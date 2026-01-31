import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  teams: defineTable({
    short_name: v.string(),
    city: v.string(),
    name: v.string(),
    year: v.number(),
    division_id: v.optional(v.id("divisions")),
  }).index("division_id", ["division_id"]),

  divisions: defineTable({
    name: v.string(),
    conference: v.string(),
  }),

  standings: defineTable({
    team_id: v.id("teams"),
    year: v.number(),
    gp: v.number(),
    w: v.number(),
    l: v.number(),
    otl: v.number(),
    pts: v.number(),
    row: v.number(),
    gf: v.number(),
    ga: v.number(),
    ppp: v.optional(v.number()),
    pkp: v.optional(v.number()),
    home: v.string(),
    away: v.string(),
    l10: v.string(),
    diff: v.string(),
    streak: v.string(),
    ppg: v.optional(v.number()),
    ppo: v.optional(v.number()),
    ppga: v.optional(v.number()),
    ppoa: v.optional(v.number()),
    positionOverall: v.optional(v.number()),
    positionConference: v.optional(v.number()),
  })
    .index("team_id", ["team_id"])
    .index("year", ["year"])
    .index("year_team", ["year", "team_id"]),
});
