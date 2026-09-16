export const MOHPA_MAP_NAMES: Record<string, string> = {
  mp_airfield_inv: 'Henderson Airfield (Invader)',
  mp_airfield: 'Henderson Airfield',
  mp_airfield_obj: 'Henderson Airfield (Objective)',
  mp_airfield_ffa: 'Henderson Airfield (FFA)',
  mp_airfield_tdm: 'Henderson Airfield (TDM)',
  mp_airfield_rbm: 'Henderson Airfield (RBM)',
  mp_guadalcanal: 'Guadalcanal',
  mp_guadalcanal_inv: 'Guadalcanal (Invader)',
  mp_guadalcanal_obj: 'Guadalcanal (Objective)',
  mp_makin: 'Makin Atoll',
  mp_makin_inv: 'Makin Atoll (Invader)',
  mp_tarawa: 'Tarawa',
  mp_tarawa_inv: 'Tarawa (Invader)',
  mp_pearl_harbor: 'Pearl Harbor',
  mp_pearl_harbor_obj: 'Pearl Harbor (Objective)',
  mp_matanikau: 'Matanikau River',
  mp_matanikau_inv: 'Matanikau River (Invader)',
  mp_edsons_ridge: "Edson's Ridge",
  mp_corregidor: 'Corregidor',
  mp_corregidor_inv: 'Corregidor (Invader)',
  mp_corregidor_obj: 'Corregidor (Objective)',
  mp_corregidor_tdm: 'Corregidor (TDM)',
};

export function formatMapName(rawMap?: string): string {
  if (!rawMap) return 'Henderson Airfield';
  const clean = rawMap.trim().toLowerCase();
  return MOHPA_MAP_NAMES[clean] || rawMap;
}

export function formatGameMode(mode?: string): string {
  if (!mode) return 'Invader';
  const lower = mode.toLowerCase();
  if (lower.includes('inv')) return 'Invader';
  if (lower.includes('tdm') || lower.includes('team')) return 'Team Deathmatch';
  if (lower.includes('ffa') || lower.includes('deathmatch')) return 'Free For All';
  if (lower.includes('obj')) return 'Objective';
  return mode;
}

export function countryCodeToFlag(countryCode?: string): string {
  if (!countryCode) return '🌐';
  const clean = countryCode.trim().toUpperCase();
  if (clean === 'GLOBAL' || clean.length !== 2) return '🌐';
  const codePoints = clean.split('').map((c) => 127397 + c.charCodeAt(0));
  try {
    return String.fromCodePoint(...codePoints);
  } catch {
    return '🌐';
  }
}
