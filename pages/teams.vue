<template>
  <div v-if="divisions && teamsByDivision" class="grid grid-cols-2 gap-6 mx-10 mt-10">
    <div
      v-for="division in divisions"
      :key="division._id"
      class="border-solid border-black border shadow-sm rounded-lg"
    >
      <div class="bg-zinc-500 px-2 py-3 border-b text-white rounded-t-lg">
        {{ division.name }}
      </div>
        <div
          v-for="team in teamsByDivision[division.id]"
          :key="team._id"
          class="p-3 bg-zinc-700 last:rounded-b-lg"
        >
          <span class="text-white">{{ team.city }} {{ team.name }}</span>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { api } from "../convex/_generated/api";
import type { FunctionReturnType } from "convex/server";

definePageMeta({
  title: 'Teams'
})

type Divisions = FunctionReturnType<typeof api.teams.getDivisions>;
type TeamsByDivision = FunctionReturnType<typeof api.teams.getTeamsByDivision>;

const { data: divisions } = useConvexQuery(api.teams.getDivisions, {}) as { data: Ref<Divisions> };
const { data: teamsByDivision } = useConvexQuery(api.teams.getTeamsByDivision, {}) as { data: Ref<TeamsByDivision> };
</script>
