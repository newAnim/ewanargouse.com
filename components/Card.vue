<template>
  <div
    v-observe-visibility="visibilityChanged"
    :class="{ 'xyz-in': show, 'xyz-out': !show }"
    xyz="fade small"
  >
    <div
      class="m-4 p-6 bg-secondary dark:bg-secondary-dark rounded text-center"
    >
      <h2 class="pb-4">{{ title }}</h2>
      <img
        :src="img"
        class="object-contain w-full object-center max-h-32 mb-4 p-6 dark:filter-invert"
      />
      <p>
        {{ description }}
      </p>
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
