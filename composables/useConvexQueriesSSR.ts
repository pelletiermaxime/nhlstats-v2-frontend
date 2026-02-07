import type { FunctionReturnType } from "convex/server"

export async function useConvexQueriesSSR<T extends Array<Parameters<typeof useConvexQuery>[0]>>(
  queries: T
): Promise<{ data: Array<Ref<FunctionReturnType<T[number]> | undefined>> }> {
  const results = queries.map(q => useConvexQuery(q, {}))
  await Promise.all(results.map(r => r.suspense()))
  return { data: results.map(r => r.data) }
}