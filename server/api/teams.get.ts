import groupBy from 'lodash/groupBy'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const apiUrl = config.public.apiUrl

  try {
    const teams = await $fetch(`${apiUrl}/teams`)
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
      teamsByDivision
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch teams data'
    })
  }
})
