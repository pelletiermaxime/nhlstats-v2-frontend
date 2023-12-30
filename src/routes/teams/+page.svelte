<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<nav class="bg-gray-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="/teams" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Teams</a>
            <a href="/standings" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Standings</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a href="/teams" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Teams</a>
      <a href="/standings" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Standings</a>
    </div>
  </div>
</nav>

<div class="grid grid-cols-2 gap-6 mx-10 mt-10">
  {#each data.divisions as division}
    <div class="border-solid border-black border shadow-sm rounded-lg">
      <div class="bg-zinc-500 px-2 py-3 border-b text-white rounded-t-lg">
        {division.name}
      </div>
      {#each data.teamsByDivision[division.id] as team}
        <div class="p-3 bg-zinc-700 last:rounded-b-lg">
          <a href="/teams/{team.id}" class="text-white no-underline hover:underline">{team.name}</a>
        </div>
      {/each}
    </div>
  {/each}
</div>
