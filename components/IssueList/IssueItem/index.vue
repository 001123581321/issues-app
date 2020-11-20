<template>
  <div :class="$style.issueItem">
    <div :class="[$style.stateIndicator, $style.cell1]">
      {{issue.state}}
    </div>
    <div :class="$style.cell2">
      <div :class="['h4', $style.cell2__cell1]">
        {{issue.title}}
      </div>
      <div :class="$style.cell2__cell2">
        <span :class="['textSmall', $style.openedBy]">
          #{{issue.number}} opened
          {{issue.created_at}}
          by
          <a
            :href="issueUser.html_url"
          >
            {{issueUser.login}}
          </a>
        </span>
      </div>
    </div>
    <div :class="$style.cell3">
      <a
        v-if="commentsQuantity > 0"
        :href="issue.comments_url"
        :class="$style.comments">
        {{commentsQuantity}}
      </a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    issue: {
      type: Object,
      required: true
    },
  },
  computed: {
    commentsQuantity() {
      return this.issue.comments
    },
    issueUser() {
      return this.issue.user
    }
  },
  mounted() {
    console.log('this.issue,', this.issue)
  }
})
</script>

<style lang="stylus" module>
.issueItem {
  border-top 1px solid var(--colorBorder_1)
  display flex
  &:hover {
    background-color var(--colorBgTertiary)
  }
}
.cell1,
.cell2,
.cell3 {
  padding-top var(--indent_1)
  padding-bottom var(--indent_1)
}
.cell1 {
  flex-shrink 0
  padding-left var(--indent_2)
}
.cell2 {
  display flex
  flex-direction column
  width 100%
  padding-left var(--indent_1)
  padding-right var(--indent_1)
}
.cell2__cell1 {

}
.cell2__cell2 {

}
.openedBy {

}
.cell3 {
  flex-shrink 0
  padding-right var(--indent_2)
}
</style>
