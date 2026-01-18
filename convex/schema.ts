import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  teams: defineTable({
    short_name: v.string(),
    city: v.string(),
    name: v.string(),
    year: v.number(),
    division_id: v.optional(v.number()),
    created_at: v.optional(v.number()),
    updated_at: v.optional(v.number()),
  }).index("division_id", ["division_id"]),

  divisions: defineTable({
    id: v.number(),
    name: v.string(),
  }),
});
