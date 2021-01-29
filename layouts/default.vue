<template>
  <div
    class="bg-primary bg-tic-tac-toe-pattern dark:bg-primarydark dark:bg-tic-tac-toe-2-pattern"
  >
    <NavBar />
    <div
      class="transform-preserve-3d perspective overflow-x-hidden overflow-y-auto h-screen"
    >
      <div
        class="absolute inset-0 w-10 h-10 top-40 left-56 bg-position-3d-1 transform-origin-x-full"
      >
        <img src="~assets/svg/bg-item-1.svg" />
      </div>
      <div
        class="absolute inset-0 w-10 h-10 transform-3d bg-position-3d-2 transform-origin-x-full"
      >
        <img src="~assets/svg/bg-item-2.svg" />
      </div>
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
document.querySelector('html').classList.add('dark')
</script>
