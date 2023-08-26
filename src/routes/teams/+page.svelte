<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>
<a href="/">Home</a>

<h1 class="text-white text-4xl text-center">Teams</h1>

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
