<template>
  <div :class="$style.comment">
    <!--{{comment}}-->
    {{comment.body}}
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
})
</script>

<style lang="stylus" module>
  .comment {
    width 100%
    border 1px solid var(--colorBorder_1)
    border-radius var(--borderRadius_1)
    &:not(:first-child) {
      margin-top var(--indent_4)
    }
  }
</style>

