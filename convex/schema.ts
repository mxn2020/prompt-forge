import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
  prompts: defineTable({ title: v.string(), description: v.optional(v.string()), tags: v.array(v.string()) }),
  versions: defineTable({ promptId: v.id("prompts"), text: v.string(), model: v.string(), temperature: v.number(), isDefault: v.boolean(), createdAt: v.string() }).index("by_prompt", ["promptId"]),
  testRuns: defineTable({ versionId: v.id("versions"), input: v.string(), output: v.string(), latencyMs: v.number(), status: v.string(), timestamp: v.string() }).index("by_version", ["versionId"]),
});
