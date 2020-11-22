<template>
  <div :class="$style.issueItem">
    <div :class="$style.cell1">
      <FontAwesomeSvg
        :class="[
          $style.stateIndicatorSvg,
          $style[`stateIndicatorSvg_${issue.state}`],
        ]"
        :svg="faExclamationCircle"
      />
      <!--{{issue.state}}-->
    </div>
    <div :class="$style.cell2">
      <div :class="$style.cell2__cell1">
        <router-link
          :class="['h4', 'link_expressionless', $style.issueTitle]"
          :to="{
            name: 'issues-id',
            params: {
              id: issue.number,
              issue
            }
          }"
        >
          {{issue.title}}
        </router-link>

        <template v-if="issueLabels.length">
          <LabelItem
            v-for="(issueLabel, index) in issueLabels"
            :key="`issueLabel_${index}`"
            :class="$style.labelItem"
            v-bind="{
              name: issueLabel.name,
              backgroundColor: issueLabel.color,
              isLightColor: issueLabel.default,
              url: issueLabel.url,
            }"
          />
        </template>

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
        :class="['textSmall', 'link_expressionless', $style.comments]">
        <FontAwesomeSvg
          :class="$style.commentsSvg"
          :svg="faCommentAlt"
        />
        {{commentsQuantity}}
      </a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import LabelItem from '~/components/_componentsLib/LabelItem'
import FontAwesomeSvg from '~/components/_componentsLib/FontAwesomeSvg'
import {
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons'
import {
  faCommentAlt,
} from '@fortawesome/free-regular-svg-icons'
export default Vue.extend({
  components: {
    LabelItem,
    FontAwesomeSvg
  },
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
    },
    issueLabels() {
      return this.issue.labels
    }
  },
  beforeCreate() {
    this.faExclamationCircle = faExclamationCircle
    this.faCommentAlt = faCommentAlt
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
  display flex
  padding-top var(--indent_1)
  padding-bottom var(--indent_1)
}
.cell1 {
  flex-shrink 0
  padding-left var(--indent_2)

}
.stateIndicatorSvg {
  width var(--iconSize_1)
  height var(--iconSize_1)
  margin-top 3px
}
.stateIndicatorSvg_open {
  color var(--colorIconSuccess)
}
.cell2 {
  flex-direction column
  width 100%
  padding-left var(--indent_1)
  padding-right var(--indent_1)
}
.cell2__cell1 {
  display flex
  flex-wrap wrap
  align-items center
}
.issueTitle {

}
.labelItem {
  margin var(--indent_5) 0 var(--indent_5) var(--indent_1)
}
.cell2__cell2 {
  margin-top var(--indent_2)
}
.openedBy {

}
.cell3 {
  flex-shrink 0
  padding-right var(--indent_2)
}
.comments {
  display flex
  align-items center
}
.commentsSvg {
  width var(--iconSize_2)
  margin-right var(--indent_1)
}
</style>
