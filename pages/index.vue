<template>
  <div :class="$style.homePage">

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  created() {
    this.$router.push('/issues')
  }
})
</script>

<style lang="stylus" module>
.homePage {
  display flex
  flex-direction column
  padding var(--indent_4)
  width 100%
}
</style>
