<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import Block from './Block.svelte';
</script>

<table id="tableOverall" class="w-4/5 m-auto text-white">
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
    <Block standings={data.data} />
  </tbody>
</table>
