<script lang="ts">
  import '@unocss/reset/tailwind-compat.css'
  import 'uno.css'
  import { page } from '$app/stores'
  const menuElements = {
    Teams: '/teams',
    Standings: '/standings',
    'MCP/AI tool': '/mcp'
  }
</script>

<main class="bg-zinc-800 min-h-screen">
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              {#each Object.entries(menuElements) as [element, url]}
                <a
                  href={url}
                  class:menu-active={$page.url.pathname === url}
                  class:menu-inactive={$page.url.pathname !== url}
                  aria-current={$page.url.pathname === url ? 'page' : undefined}
                >
                  {element}
                </a>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        {#each Object.entries(menuElements) as [element, url]}
          <a
            href={url}
            class:menu-mobile-active={$page.url.pathname === url}
            class:menu-mobile-inactive={$page.url.pathname !== url}
            aria-current={$page.url.pathname === url ? 'page' : undefined}
          >
            {element}
          </a>
        {/each}
      </div>
    </div>
  </nav>
  <slot />
</main>
