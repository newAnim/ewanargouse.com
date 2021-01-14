<template>
  <div>
    <img :src="game.img" :alt="article.alt" />
    <h1>{{ game.title }}</h1>
    <p>{{ game.description }}</p>
    <nuxt-content :document="game" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const game = await $content('games', params.slug).fetch()

    return { game }
  },
}
</script>
