<template>
  <div :class="{ 'xyz-in': show, 'xyz-out': !show }" xyz="fade small">
    <div
      v-observe-visibility="{
        callback: visibilityChanged,
        throttle: 300,
      }"
      class="relative min-w-full px-4 py-2"
    >
      <img class="w-full rounded-md" :src="img" />
      <div
        class="absolute rounded-md inset-0 bg-info opacity-0 hover:opacity-90 mx-4 my-2"
      >
        <div
          class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
        >
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'description', 'img'],
  data() {
    return {
      show: true,
    }
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      this.show = isVisible
    },
  },
}
</script>
