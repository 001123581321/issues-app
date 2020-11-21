<template>
  <svg
    :class="$style.root"
    :viewBox="`0 0 ${icon[0]} ${icon[1]}`"
  >
    <path
      :class="$style.path"
      :d="icon[4]"
    />
  </svg>
</template>
<script>
  export default {
    props: {
      svg: Object,
    },
    computed: {
      icon() {
        return this.svg.icon
      },
    },
  }
</script>
<style lang="stylus" module>
  .root {
    fill currentColor
  }
</style>
