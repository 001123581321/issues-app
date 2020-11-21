<template>
  <div :class="$style.issuesPage">
    <IssueList/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  middleware: ['getIssues'],
  mounted() {
    if(!this.$isServer) {
      console.log('this', this)
    }
  }
})
</script>

<style lang="stylus" module>
.issuesPage {
  display flex
  flex-direction column
  padding var(--indent_4)
  width 100%
}
</style>
