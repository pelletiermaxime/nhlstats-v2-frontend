export const useStandings = () => {
  const { apiUrl } = useRuntimeConfig().public

  return useAsyncData(
    'standings',
    async () => {
      const response = await $fetch(`${apiUrl}/standings`)
      return response
    },
    {
      server: true,
      default: () => ({ data: [] })
    }
  )
}
