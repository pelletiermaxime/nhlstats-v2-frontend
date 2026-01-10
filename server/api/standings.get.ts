export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const apiUrl = config.public.apiUrl

  try {
    const response = await $fetch(`${apiUrl}/standings`)
    return response
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch standings data'
    })
  }
})
