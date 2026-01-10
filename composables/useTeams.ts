import groupBy from 'lodash/groupBy'

export const useTeams = () => {
  const { apiUrl } = useRuntimeConfig().public

  return useAsyncData(
    'teams',
    async () => {
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
    },
    {
      server: true,
      default: () => ({
        divisions: [],
        teams: [],
        teamsByDivision: {}
      })
    }
  )
}
