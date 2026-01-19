export interface Division {
  id: string
  name: string
}

export interface Team {
  id: string
  name: string
  division_id?: string
}

export interface TeamsResponse {
  divisions: Division[]
  teams: Team[]
  teamsByDivision: Record<string, Team[]>
}

export interface Standing {
  conference: string
  short_name: string
  city: string
  name: string
  division: string
  gp: number
  w: number
  l: number
  otl: number
  pts: number
  row: number
  gf: number
  ga: number
  diff: number
  home: string
  away: string
  l10: string
  streak: string
}
