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
  }),
});
