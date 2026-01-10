<template>
  <tr
    v-for="(s, position) in standings"
    :key="position"
    class="odd:bg-zinc-700 odd:bg-zinc-600 text-center"
  >
    <td v-if="s.conference === 'EAST'" style="background: #b9112d; color: white; font-size: 1.8em">
      {{ position + 1 }}
    </td>
    <td v-else style="background: #003872; color: white; font-size: 1.8em">{{ position + 1 }}</td>
    <td width="100" align="center">
      <NuxtLink :to="`/team/${s.short_name}`" class="text-white hover:underline">
        {{ s.city }} {{ s.name }}
      </NuxtLink>
    </td>
    <td>{{ s.division }}</td>
    <td>{{ s.conference }}</td>
    <td>{{ s.gp }}</td>
    <td>{{ s.w }}</td>
    <td>{{ s.l }}</td>
    <td>{{ s.otl }}</td>
    <td>{{ s.pts }}</td>
    <td>{{ s.row }}</td>
    <td>{{ s.gf }}</td>
    <td>{{ s.ga }}</td>
    <td>{{ s.diff }}</td>
    <td>{{ s.home }}</td>
    <td>{{ s.away }}</td>
    <td>{{ s.l10 }}</td>
    <td>{{ s.streak }}</td>
  </tr>
</template>

<script setup lang="ts">
interface Standing {
  conference: string
  short_name: string
  city: string
  name: string
  division: string
  gp: number
  w: number
  l: number
  otl: number
  pts: number
  row: number
  gf: number
  ga: number
  diff: number
  home: string
  away: string
  l10: string
  streak: string
}

defineProps<{
  standings: Standing[]
}>()
</script>
