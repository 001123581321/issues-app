<template>
  <a
    :href="url"
    :class="[
      'textSmall',
      'link_expressionless',
      isLightColor && 'lightText',
      $style.labelItem,
    ]"
    :style="{
      backgroundColor: `#${backgroundColor}`
    }"
  >
    {{name}}
  </a>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true
    },
    backgroundColor: {
      type: String,
      default: 'ccc'
    },
    isLightColor: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      required: true
    },
  },
})
</script>

<style lang="stylus" module>
.labelItem {
  padding 0 var(--indent_2)
  white-space nowrap
  border-radius var(--borderRadius_2)
}
</style>
