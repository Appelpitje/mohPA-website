import React, { useState, useEffect, useCallback } from 'react';
import { Server, Users, Signal, Copy, Check, RefreshCw, AlertCircle, ExternalLink } from 'lucide-react';
import { GameServer, ServerListResponse } from '../types/server';
import { formatMapName, formatGameMode, countryCodeToFlag } from '../utils/formatters';

interface ServerShowcaseProps {
  portalUrl?: string;
}

export const ServerShowcase: React.FC<ServerShowcaseProps> = ({ portalUrl = 'https://portal.mohpa.net' }) => {
  const [servers, setServers] = useState<GameServer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [filterMode, setFilterMode] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const apiBase = import.meta.env.VITE_API_URL || 'https://backend.mohpa.net';

  const fetchServers = useCallback(async (manual: boolean = false) => {
    if (manual) setIsRefreshing(true);

    try {
      const response = await fetch(`${apiBase}/api/v1/servers?game_slug=mohpa&is_online=true`, {
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Master server responded with status: ${response.status}`);
      }

      const data: ServerListResponse = await response.json();
      setServers(data.servers || []);
      setLastUpdated(new Date());
      setError(null);
    } catch (err: unknown) {
      console.error('Failed to query live servers:', err);
      setError(err instanceof Error && err.name === 'TimeoutError'
        ? 'The server-list request timed out. Try refreshing the list.'
        : 'The server list could not be loaded. Check your connection or try again later.');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, [apiBase]);

  useEffect(() => {
    fetchServers(false);

    // Dynamic poll interval every 20 seconds
    const interval = setInterval(() => {
      fetchServers(false);
    }, 20000);

    return () => clearInterval(interval);
  }, [fetchServers]);

  const handleCopyIp = (id: string, ip: string) => {
    navigator.clipboard.writeText(ip);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredServers = servers.filter((s) => {
    if (filterMode === 'all') return true;
    const mode = (s.gameMode || '').toLowerCase();
    return mode.includes(filterMode.toLowerCase());
  });

  const hasServerData = lastUpdated !== null;
  const hasPlayerCounts = servers.every((server) => server.currentPlayers != null || server.details?.players != null);
  const totalPlayers = hasPlayerCounts
    ? servers.reduce((acc, server) => acc + (server.currentPlayers ?? server.details?.players?.length ?? 0), 0)
    : null;
  const unknownCount = isLoading ? 'Loading' : 'Unknown';

  return (
    <section id="servers" className="py-20 lg:py-28 bg-sand-100 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Real-time Telemetry Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              Live dedicated server roster.
            </h2>
            <p className="text-base text-ink-muted leading-relaxed">
              The latest server list from the community master server, refreshed every 20 seconds while this page is open. Availability can change between updates.
            </p>
          </div>

          {/* Dynamic Telemetry & Controls */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Live Count Pill */}
            <div className="flex items-center gap-3 px-3 py-1.5 bg-sand-50 rounded-lg border border-sand-300 text-xs font-mono">
              <div className="flex items-center gap-1.5 text-ink">
                <span aria-hidden="true" className={`w-2 h-2 rounded-full ${hasServerData && !error ? 'bg-olive-500' : 'bg-sand-300'}`} />
                <span className="font-semibold">{hasServerData ? servers.length : unknownCount}</span>
                <span className="text-ink-muted">{servers.length === 1 ? 'Server' : 'Servers'}{error && hasServerData ? ' (last known)' : ' Online'}</span>
              </div>
              <span className="text-sand-300">|</span>
              <div className="flex items-center gap-1 text-ink">
                <Users className="w-3.5 h-3.5 text-olive-700" />
                <span className="font-semibold">{hasServerData ? totalPlayers ?? 'Unknown' : unknownCount}</span>
                <span className="text-ink-muted">Players online{error && hasServerData ? ' (last known)' : ''}</span>
              </div>
            </div>

            {/* Manual Refresh Button */}
            <button
              onClick={() => fetchServers(true)}
              disabled={isLoading || isRefreshing}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sand-50 hover:bg-sand-200 border border-sand-300 text-xs font-mono text-ink transition-colors disabled:opacity-50"
              title="Refresh live server query"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-olive-800 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>{isRefreshing ? 'Refreshing...' : 'Refresh'}</span>
            </button>
          </div>
        </div>

        {/* Mode Filters */}
        <div className="flex items-center gap-1.5 p-1 bg-sand-200/80 rounded-lg border border-sand-300 self-start text-xs font-medium w-fit mb-6">
          <button
            onClick={() => setFilterMode('all')}
            aria-pressed={filterMode === 'all'}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              filterMode === 'all' ? 'bg-sand-50 text-ink shadow-sm font-semibold' : 'text-ink-muted hover:text-ink'
            }`}
          >
            All Servers ({hasServerData ? servers.length : '—'})
          </button>
          <button
            onClick={() => setFilterMode('invader')}
            aria-pressed={filterMode === 'invader'}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              filterMode === 'invader' ? 'bg-sand-50 text-ink shadow-sm font-semibold' : 'text-ink-muted hover:text-ink'
            }`}
          >
            Invader
          </button>
          <button
            onClick={() => setFilterMode('team')}
            aria-pressed={filterMode === 'team'}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              filterMode === 'team' ? 'bg-sand-50 text-ink shadow-sm font-semibold' : 'text-ink-muted hover:text-ink'
            }`}
          >
            Team Deathmatch
          </button>
        </div>

        {/* Live Server Table Container */}
        <div className="bg-sand-50 border border-sand-300 rounded-xl shadow-tactical overflow-hidden mb-10">
          {error && hasServerData && (
            <div role="status" className="px-4 py-3 bg-stamp-50 border-b border-stamp-200 text-sm text-ink-muted">
              <span className="font-semibold text-ink">Server list may be out of date. </span>
              {error} Showing the last successful update.
            </div>
          )}
          {isLoading ? (
            <div role="status" className="p-12 text-center space-y-3">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-olive-100 text-olive-800 animate-spin mb-2">
                <RefreshCw className="w-4 h-4" />
              </div>
              <p className="text-sm font-medium text-ink">Querying live dedicated servers...</p>
              <p className="text-xs text-ink-faint font-mono">Querying {apiBase}/api/v1/servers</p>
            </div>
          ) : error && !hasServerData ? (
            <div role="status" className="p-8 text-center space-y-3">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-stamp-50 text-stamp-600 mb-1 border border-stamp-200">
                <AlertCircle className="w-5 h-5" />
              </div>
              <p className="text-sm font-bold text-ink">Server List Unavailable</p>
              <p className="text-xs text-ink-muted max-w-md mx-auto">{error}</p>
              <button
                onClick={() => fetchServers(true)}
                disabled={isRefreshing}
                className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-sand-200 hover:bg-sand-300 text-ink text-xs font-semibold"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{isRefreshing ? 'Retrying...' : 'Retry Server List'}</span>
              </button>
            </div>
          ) : filteredServers.length === 0 ? (
            <div className="p-12 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sand-200 text-ink-faint border border-sand-300">
                <Server className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-base font-bold text-ink">
                  {servers.length > 0 ? 'No servers match this game mode' : 'No servers listed in the latest update'}
                </p>
                <p className="text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
                  {servers.length > 0
                    ? 'Choose All Servers to see the other available game modes.'
                    : 'Try refreshing later, or see the hosting guide if you want to run a dedicated server.'}
                </p>
              </div>
              <div className="pt-2">
                {servers.length > 0 ? (
                  <button
                    onClick={() => setFilterMode('all')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-olive-800 text-sand-50 hover:bg-olive-900 text-xs font-semibold transition-colors"
                  >
                    Show All Servers
                  </button>
                ) : (
                  <a
                    href={`${portalUrl}/setup?tab=dedicated`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-olive-800 text-sand-50 hover:bg-olive-900 text-xs font-semibold transition-colors"
                  >
                    <span>Dedicated Server Hosting Guide</span>
                    <ExternalLink className="w-3.5 h-3.5 text-olive-300" />
                  </a>
                )}
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-sand-100/80 border-b border-sand-200 text-xs font-mono text-ink-muted uppercase">
                  <tr>
                    <th className="py-3 px-4 font-semibold">Server Name</th>
                    <th className="py-3 px-4 font-semibold">Current Map</th>
                    <th className="py-3 px-4 font-semibold">Mode</th>
                    <th className="py-3 px-4 font-semibold">Players</th>
                    <th className="py-3 px-4 font-semibold">Reported Latency</th>
                    <th className="py-3 px-4 font-semibold text-right">Direct Connect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-200">
                  {filteredServers.map((server) => {
                    const connectIp = `${server.ipAddress}:${server.port}`;
                    const playersCount = server.currentPlayers ?? server.details?.players?.length ?? '?';
                    const maxCount = server.maxPlayers ?? '?';
                    const flag = countryCodeToFlag(server.countryCode);
                    const locationText = server.city || server.country || server.region || 'Location unknown';

                    return (
                      <tr key={server.id} className="hover:bg-sand-100/50 transition-colors">
                        <td className="py-4 px-4">
                          <div className="font-semibold text-ink flex items-center gap-2">
                            <span aria-hidden="true" className={`w-2 h-2 rounded-full ${error ? 'bg-sand-300' : 'bg-olive-500'} shrink-0`} />
                            <span>{server.name}</span>
                          </div>
                          <div className="text-xs text-ink-faint font-mono pl-4">
                            {flag} {locationText}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="font-mono text-xs text-ink bg-sand-200/70 px-2 py-0.5 rounded">
                            {formatMapName(server.mapName)}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-xs font-medium text-ink-muted">
                          {formatGameMode(server.gameMode)}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-1.5 text-xs font-mono">
                            <Users className="w-3.5 h-3.5 text-olive-700" />
                            <span className="font-semibold text-ink">{playersCount}</span>
                            <span className="text-ink-faint">/ {maxCount}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-1.5 text-xs font-mono text-olive-800">
                            <Signal className="w-3 h-3 text-olive-600" />
                            <span>{server.ping != null ? `${server.ping}ms` : 'Unknown'}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <button
                            onClick={() => handleCopyIp(server.id, connectIp)}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-sand-100 hover:bg-sand-200 border border-sand-300 text-xs font-mono text-ink transition-colors"
                            title="Copy direct connect IP"
                          >
                            {copiedId === server.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-olive-700" />
                                <span className="text-olive-800 font-semibold">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 text-ink-muted" />
                                <span>{connectIp}</span>
                              </>
                            )}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* Table Footer with Timestamp */}
          {lastUpdated && (
            <div className="px-4 py-2 bg-sand-100/50 border-t border-sand-200 text-[11px] font-mono text-ink-faint flex flex-wrap gap-2 items-center justify-between">
              <span>{error ? 'Stale data from' : 'Last successful query to'} {apiBase.replace(/^https?:\/\//, '')}</span>
              <span>Updated: {lastUpdated.toLocaleTimeString()}</span>
            </div>
          )}
        </div>

        {/* Dedicated Server Host Notice */}
        <div className="bg-sand-50 border border-sand-200 rounded-xl p-6 sm:p-7 shadow-tactical flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-ink font-bold">
              <Server className="w-4 h-4 text-olive-700" />
              <span>Hosting your own Dedicated MOHPA Server?</span>
            </div>
            <p className="text-sm text-ink-muted max-w-2xl">
              Read the dedicated server hosting guide for current setup requirements and registration instructions before configuring your community server.
            </p>
          </div>

          <a
            href={`${portalUrl}/setup?tab=dedicated`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-olive-800 hover:bg-olive-900 text-sand-50 text-xs font-semibold transition-colors shrink-0"
          >
            <span>Server Admin Guide</span>
            <ExternalLink className="w-3.5 h-3.5 text-olive-300" />
          </a>
        </div>

      </div>
    </section>
  );
};
