<template>
  <div>
    <br /><br /><br /><br />
    <div class="max-w-4xl mx-auto">
      <masonry :cols="{ default: 1, 600: 1 }" :gutter="10">
        <div v-for="game in top_games" :key="game.slug">
          <game
            :title="game.title"
            :description="game.description"
            :img="game.img"
            :download-link="game.downloadLink"
            :download-img="game.downloadImg"
          ></game>
        </div>
      </masonry>
      <masonry :cols="{ default: 2, 600: 1 }" :gutter="10">
        <div v-for="game in games" :key="game.slug">
          <game
            :title="game.title"
            :description="game.description"
            :img="game.img"
            :download-link="game.downloadLink"
            :download-img="game.downloadImg"
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
      top_games: [],
    }
  },
  async fetch() {
    this.top_games = await this.fetchTopData()
    this.games = await this.fetchData()
  },
  methods: {
    fetchData() {
      return this.$content('games')
        .where({ top: false })
        .limit(this.limit)
        .skip(this.limit * this.page)
        .sortBy('order', 'desc')
        .fetch()
    },
    fetchTopData() {
      return this.$content('games')
        .where({ top: true })
        .sortBy('order', 'desc')
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
