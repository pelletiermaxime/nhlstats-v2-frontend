<script>
  export let standings;
</script>
{#each standings as s, position}
<tr class="odd:bg-zinc-700 odd:bg-zinc-600 text-center">
  {#if s.conference === 'EAST'}
  <td style="background:#b9112d;color:white;font-size:1.8em;">{ position+1 }</td>
  {:else}
  <td style="background:#003872;color:white;font-size:1.8em;">{ position+1 }</td>
  {/if}
  <td width="100" align="center">
    <a href="/team/{s['short_name']}">
    <img src="logos/SVG/{s['short_name']}.svg" class="h-10"
      alt="{ s.city } { s.name }" title="{ s.city } { s.name }"
    />
    </a>
  </td>
  <td>{ s.division }</td>
  <td>{ s.conference }</td>
  <td>{ s.gp }</td>
  <td>{ s.w }</td>
  <td>{ s.l }</td>
  <td>{ s.otl }</td>
  <td>{ s.pts }</td>
  <td>{ s.row }</td>
  <td>{ s.gf }</td>
  <td>{ s.ga }</td>
  <td>{ s.diff }</td>
  <td>{ s.home }</td>
  <td>{ s.away }</td>
  <td>{ s.l10 }</td>
  <td>{ s.streak }</td>
</tr>
{/each}
