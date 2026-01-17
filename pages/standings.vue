<template>
  <div>
    <table
      v-if="!pending && standings.length > 0"
      id="tableOverall"
      class="w-4/5 m-auto text-white"
    >
      <thead>
        <tr>
          <th>Position</th>
          <th>Team</th>
          <th>Division</th>
          <th>Conference</th>
          <th>GP</th>
          <th>W</th>
          <th>L</th>
          <th>OTL</th>
          <th>PTS</th>
          <th title="Regular or Overtime Wins">ROW</th>
          <th>GF</th>
          <th>GA</th>
          <th>Diff</th>
          <th>Home</th>
          <th>Away</th>
          <th>L10</th>
          <th>Streak</th>
        </tr>
      </thead>
      <tbody>
        <StatsBlock :standings="standings" />
      </tbody>
    </table>
    <div v-else-if="pending" class="text-white text-center py-8">Loading...</div>
    <div v-else class="text-white text-center py-8">No standings data available</div>
  </div>
</template>

<script setup lang="ts">
import type { Standing } from '~/types/teams'
// Define page metadata
definePageMeta({
  title: 'Standings'
})

// Fetch data using Nuxt's $fetch (server-side)
const { data, pending } = await useAsyncData<Standing[]>('standings', () => $fetch('/api/standings'))

// Safe access to standings data
const standings = computed(() => {
  if (!data.value) return []
  return data.value
})
</script>
