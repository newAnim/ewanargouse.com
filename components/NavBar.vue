<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav
    class="fixed w-full bg-secondary dark:bg-info bg-opacity-30 backdrop-blur top-0 z-10"
  >
    <div class="max-w-4xl mx-auto px-4 lg:px-2">
      <div class="relative flex items-center justify-between h-12">
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
            @click="isOpen = !isOpen"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg
              v-show="!isOpen"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Icon when menu is open. -->
            <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg
              v-show="isOpen"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-stretch justify-start">
          <div
            class="flex-shrink-0 flex items-center text-grey-900 dark:text-gray-200"
          >
            <NuxtLink to="/"
              ><h1 class="text-xl hover:text-white">
                <span v-if="$nuxt.$route.path === '/'">ᐅ</span> EWAN ARGOUSE
              </h1></NuxtLink
            >
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div
            class="hidden sm:block sm:ml-6 text-grey-900 dark:text-gray-200 rounded-md text-xs font-medium uppercase"
          >
            <div class="flex space-x-6">
              <NuxtLink to="/works" class="hover:text-white p-4">
                <span v-if="$nuxt.$route.path === '/works'">ᐅ</span>
                Games
              </NuxtLink>
              <NuxtLink to="/about" class="hover:text-white p-4">
                <span v-if="$nuxt.$route.path === '/about'">ᐅ</span>
                About
              </NuxtLink>
              <NuxtLink to="/contact" class="hover:text-white p-4">
                <span v-if="$nuxt.$route.path === '/contact'">ᐅ</span>
                Contact
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--
      Mobile menu, toggle classes based on menu state.

      Menu open: "block", Menu closed: "hidden"
    -->
    <div
      v-show="isOpen"
      class="flex flex-col text-grey-900 dark:text-gray-200 rounded-md text-base font-medium uppercase space-y-1"
    >
      <NuxtLink to="/works" class="hover:text-white p-2">
        <span v-if="$nuxt.$route.path === '/works'">ᐅ</span>
        Games
      </NuxtLink>
      <NuxtLink to="/about" class="hover:text-white p-2">
        <span v-if="$nuxt.$route.path === '/about'">ᐅ</span>
        About
      </NuxtLink>
      <NuxtLink to="/contact" class="hover:text-white p-2">
        <span v-if="$nuxt.$route.path === '/contact'">ᐅ</span>
        Contact
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['navbar'],
  data: () => ({
    isOpen: false,
  }),
}
</script>
