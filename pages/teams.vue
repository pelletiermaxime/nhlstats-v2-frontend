<template>
  <div v-if="data" class="grid grid-cols-2 gap-6 mx-10 mt-10">
    <div
      v-for="division in data.divisions"
      :key="division.id"
      class="border-solid border-black border shadow-sm rounded-lg"
    >
      <div class="bg-zinc-500 px-2 py-3 border-b text-white rounded-t-lg">
        {{ division.name }}
      </div>
      <div
        v-for="team in data.teamsByDivision[division.id]"
        :key="team.id"
        class="p-3 bg-zinc-700 last:rounded-b-lg"
      >
        <NuxtLink :to="`/teams/${team.id}`" class="text-white no-underline hover:underline">{{
          team.name
        }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define page metadata
definePageMeta({
  title: 'Teams'
})

// Fetch data using composable
const { data } = await useTeams()
</script>
