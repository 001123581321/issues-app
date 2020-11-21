<template>
  <div :class="$style.issueList">
    <div :class="$style.issueListHeader">

    </div>
    <div :class="$style.issueItemsWrapper">
      <template v-if="issues.length">
        <IssueItem
          v-for="(issue, index) in issues"
          :key="`issue_${index}`"
          :class="$style.issueItem"
          v-bind="{
            issue
          }"
        />
      </template>
      <div
        v-else
        :class="$style.issuesNotExist"
      >
        <span :class="['h2', $style.issuesNotExist__title]">
          Welcome to issues!
        </span>
        <span :class="['textSmall', $style.issuesNotExist__caption]">
          Issues are used to track todos, bugs, feature requests, and more. As issues are created, they’ll appear here in a searchable and filterable list. To get started, you should
          <a href="">
            create an issue
          </a>.
        </span>
      </div>
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
})
</script>

<style lang="stylus" module>
  .issueList {
    width 100%
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
  .issuesNotExist {
    display flex
    justify-content center
    align-items center
    flex-direction column
    padding var(--indent_4)
  }
  .issuesNotExist__title {

  }
  .issuesNotExist__caption {
    margin-top var(--indent_1)
  }
</style>

