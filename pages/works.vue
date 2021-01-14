<template>
  <div>
    <div class="max-w-4xl mx-auto">
      <div class="relative">
        <div class="mx-2 text-left my-24">
          <h1 class="font-body text-5xl sm:text-7xl text">
            Here's some of my
            <span class="text-gradient bg-gradient-to-r from-cyan to-cyandark">
              work
            </span>
          </h1>
        </div>
      </div>
      <masonry :cols="{ default: 2, 600: 1 }" :gutter="10">
        <div v-for="game in games" :key="game.slug">
          <game
            :title="game.title"
            :description="game.description"
            :img="game.img"
          ></game>
        </div>
      </masonry>
    </div>
    <infinite-loading @infinite="infiniteHandler">
      <h4 slot="spinner" class="my-5">Loading...</h4>
      <h4 slot="no-more" class="my-5">- End -</h4>
      <h4 slot="no-results" class="my-5">No results message</h4>
    </infinite-loading>
  </div>
</template>

<script>
import Game from '~/components/Game.vue'
export default {
  components: { Game },
  data() {
    return {
      page: 0,
      limit: 4,
      games: [],
    }
  },
  async fetch() {
    this.games = await this.fetchData()
  },
  methods: {
    fetchData() {
      return this.$content('games')
        .limit(this.limit)
        .skip(this.limit * this.page)
        .sortBy('createdAt', 'desc')
        .fetch()
    },
    infiniteHandler($state) {
      setTimeout(async () => {
        this.page += 1
        const additionalItems = await this.fetchData()
        if (additionalItems.length > 0) {
          this.games.push(...additionalItems)
          $state.loaded()
        } else {
          $state.complete()
        }
      }, 500)
    },
  },
}
</script>
