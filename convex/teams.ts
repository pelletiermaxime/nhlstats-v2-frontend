import { query } from "./_generated/server";

export const getTeams = query({
  args: {},
  handler: async (ctx) => {
    const teams = await ctx.db.query("teams").collect();
    return teams;
  },
});

export const getTeamsByDivision = query({
  args: {},
  handler: async (ctx) => {
    const teams = await ctx.db.query("teams").collect();
    const teamsByDivision: Record<number, typeof teams> = {};

    for (const team of teams) {
      if (team.division_id !== undefined) {
        if (!teamsByDivision[team.division_id]) {
          teamsByDivision[team.division_id] = [];
        }
        teamsByDivision[team.division_id]!.push(team);
      }
    }

    return teamsByDivision;
  },
});

export const getDivisions = query({
  args: {},
  handler: async (ctx) => {
    const divisions = await ctx.db.query("divisions").collect();
    return divisions;
  },
});
