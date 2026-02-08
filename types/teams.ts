import type { Doc } from "../convex/_generated/dataModel";

// Re-export Convex types
export type Team = Doc<"teams">;
export type Division = Doc<"divisions">;
export type StandingRecord = Doc<"standings">;

// Flattened Standing interface for UI components
// Combines standing data with team and division info
export interface Standing extends Omit<StandingRecord, "_id" | "_creationTime" | "team_id"> {
  conference: string
  short_name: string
  city: string
  name: string
  division: string
}

export interface TeamsResponse {
  divisions: Division[]
  teams: Team[]
  teamsByDivision: Record<string, Team[]>
}
