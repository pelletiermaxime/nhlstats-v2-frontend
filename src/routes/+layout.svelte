<script lang="ts">
  import '@unocss/reset/tailwind-compat.css'
  import 'uno.css'
  import { page } from '$app/stores';
</script>
<main class="bg-zinc-800" style="height: 100%">
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                href="/teams"
                class:menu-active={$page.url.pathname === '/teams'}
                class:menu-inactive={$page.url.pathname !== '/teams'}
                aria-current={$page.url.pathname === '/teams' ? 'page' : undefined}
              >
                Teams
              </a>
              <a
                href="/standings"
                class:menu-active={$page.url.pathname === '/standings'}
                class:menu-inactive={$page.url.pathname !== '/standings'}
                aria-current={$page.url.pathname === '/standings' ? 'page' : undefined}
              >
                Standings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <a
          href="/teams"
          class:menu-mobile-active={$page.url.pathname === '/teams'}
          class:menu-mobile-inactive={$page.url.pathname !== '/teams'}
          aria-current={$page.url.pathname === '/teams' ? 'page' : undefined}
        >
          Teams
        </a>
        <a
          href="/standings"
          class:menu-mobile-active={$page.url.pathname === '/standings'}
          class:menu-mobile-inactive={$page.url.pathname !== '/standings'}
          aria-current={$page.url.pathname === '/standings' ? 'page' : undefined}
        >
          Standings
        </a>
      </div>
    </div>
  </nav>
  <slot />
</main>
