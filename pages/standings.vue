<template>
  <div>
    <table v-if="!pending && data" id="tableOverall" class="w-4/5 m-auto text-white">
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
        <Block :standings="data.data" />
      </tbody>
    </table>
    <div v-else-if="pending" class="text-white text-center py-8">Loading...</div>
  </div>
</template>

<script setup lang="ts">
// Define page metadata
definePageMeta({
  title: 'Standings'
})

// Import component
const Block = resolveComponent('Block')

// Fetch data using composable
const { data, pending } = await useStandings()
</script>
