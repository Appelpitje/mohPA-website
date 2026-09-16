export interface ScoreboardPlayer {
  name: string;
  score: number;
  kills: number;
  deaths?: number;
  ping: number;
  team?: number;
}

export interface GameServer {
  id: string;
  name: string;
  gameSlug: string;
  ipAddress: string;
  port: number;
  queryPort?: number;
  isRanked: boolean;
  isOnline: boolean;
  lastHeartbeat: string;
  maxPlayers?: number;
  currentPlayers?: number;
  mapName?: string;
  gameMode?: string;
  subState?: string;
  region?: string;
  country?: string;
  countryCode?: string;
  city?: string;
  ping?: number;
  tickRate?: number;
  details?: {
    city?: string;
    ping?: number;
    region?: string;
    country?: string;
    countryCode?: string;
    players?: ScoreboardPlayer[];
    rules?: Record<string, any>;
  };
}

export interface ServerListResponse {
  servers: GameServer[];
  count: number;
  limit: number;
  offset: number;
}
