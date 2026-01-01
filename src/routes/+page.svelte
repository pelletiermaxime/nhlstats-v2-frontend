<script>
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'

  onMount(() => {
    goto('/standings')
  })
</script>
