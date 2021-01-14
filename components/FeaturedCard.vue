<template>
  <div
    v-observe-visibility="visibilityChanged"
    :class="{ 'xyz-in': show, 'xyz-out': !show }"
    xyz="fade small"
  >
    <div
      class="my-4 p-6 bg-secondary dark:bg-secondary-dark rounded text-center"
    >
      <img
        :src="img"
        class="object-contain w-full object-center max-h-32 p-2 mb-4"
      />
      <p>
        {{ description }}
      </p>
      <a :href="downloadLink" target="_blank"
        ><img class="p-4" :src="downloadImg"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'description', 'img', 'downloadLink', 'downloadImg'],
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
