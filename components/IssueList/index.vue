<template>
  <div :class="$style.issueList">
    <div :class="$style.issueListHeader">

    </div>
    <div :class="$style.issueItemsWrapper">
      <IssueItem
        v-for="(issue, index) of issues"
        :key="`issue_${index}`"
        :class="$style.issueItem"
        v-bind="{
          issue
        }"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import IssueItem from './IssueItem'
export default Vue.extend({
  components: {
    IssueItem
  },
  computed: {
    issues() {
      return this.$store.state.issues.issues
    },
  },
  mounted() {
    console.log('this', this)
  }
})
</script>

<style lang="stylus" module>
  .issueList {
  }
  .issueListHeader {
    padding var(--indent_4)
    border 1px solid var(--colorBorder_1)
    border-bottom none
    border-radius var(--borderRadius_1) var(--borderRadius_1) 0 0
    background-color var(--colorBgTertiary)
  }
  .issueItemsWrapper {
    border 1px solid var(--colorBorder_1)
    border-top none
    border-radius 0 0 var(--borderRadius_1) var(--borderRadius_1)
  }
  .issueItem {
    &:last-child {
      border-radius 0 0 var(--borderRadius_1) var(--borderRadius_1)
    }
  }
</style>

