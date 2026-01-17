import groupBy from 'lodash/groupBy'
import type { Team, TeamsResponse } from '~/types/teams'

export default defineEventHandler(async (event): Promise<TeamsResponse> => {
  const config = useRuntimeConfig()
  const apiUrl = config.public.apiUrl

  try {
    const teams = await $fetch<Team[]>(`${apiUrl}/teams`)
    const teamsByDivision = groupBy(teams, 'division_id')

    const divisions = [
      { id: 2, name: 'Atlantic' },
      { id: 1, name: 'Metropolitan' },
      { id: 3, name: 'Central' },
      { id: 4, name: 'Pacific' }
    ]

    return {
      divisions,
      teams,
      teamsByDivision: Object.fromEntries(
        Object.entries(teamsByDivision).map(([key, value]) => [parseInt(key), value])
      ) as Record<number, Team[]>
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch teams data'
    })
  }
})
