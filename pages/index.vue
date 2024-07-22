<template>
  <div>
    <div class="max-w-4xl mx-auto">
      <div class="my-screen relative mx-8 sm:mx-2 text-left filter-drop-shadow">
        <p>Hi, I'm a passionate game developer,</p>
        <h1 class="font-body text-5xl sm:text-7xl text">
          Aiming for
          <span class="text-gradient bg-gradient-to-r from-cyan to-cyandark">
            fun
          </span>
          games
        </h1>
      </div>
      <div class="my-screen sm:my-24 mx-2 text-right">
        <h1 class="font-body text-5xl sm:text-7xl text">
          My
          <span class="text-gradient bg-gradient-to-r from-cyan to-cyandark">
            work
          </span>
        </h1>
        <masonry :cols="{ default: 3, 600: 1 }" :gutter="20">
          <div v-for="game in games" :key="game.slug">
            <featured-card
              :description="game.description"
              :img="game.titleImg"
              :download-link="game.downloadLink"
              :download-img="game.downloadImg"
            ></featured-card>
          </div>
        </masonry>
        <button>
          <h3><NuxtLink to="/works">ᐅ View more</NuxtLink></h3>
        </button>
      </div>
      <div class="my-screen mx-2 text-right">
        <h1 class="font-body text-5xl sm:text-7xl text">
          Something
          <span class="text-gradient bg-gradient-to-r from-cyan to-cyandark">
            about
          </span>
          me
        </h1>
        <masonry :cols="{ default: 3, 600: 1 }" :gutter="20">
          <card
            title="Gameplay"
            description="Striking balance between appealing creativity and 
            meaningful choices is essential for memorable and pleasant game experiences."
            :img="require('~/assets/svg/gamepad.svg')"
          ></card>
          <card
            title="Systems"
            description="I believe in simple game systems that help to 
            create tools which empower the entire team."
            :img="require('~/assets/svg/loop.svg')"
          ></card>
          <card
            title="UX"
            description="User experience for players and developers 
            is top priority for me."
            :img="require('~/assets/svg/user.svg')"
          ></card>
        </masonry>
        <button>
          <h3><NuxtLink to="/about">ᐅ More about</NuxtLink></h3>
        </button>
      </div>
      <div class="my-screen mx-2 text-center">
        <h2>Let's get in touch!</h2>
        <div class="py-4">
          <button>
            <h3><NuxtLink to="/contact">ᐅ Contact</NuxtLink></h3>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        .where({ featured: true })
        .limit(3)
        .sortBy('createdAt', 'desc')
        .fetch()
    },
  },
}
</script>
