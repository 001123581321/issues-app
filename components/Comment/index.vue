<template>
  <div :class="$style.comment">
    <div :class="['textSmall', $style.commentHeader]">
      <strong>
        <a
          href=""
          :class="['link_expressionless', $style.commentUserLink]"
        >
          {{commentUser.login}}
        </a>
      </strong>
      commented
      <a
        href=""
        :class="['link_expressionless', $style.commentedAt]"
      >
        {{comment.created_at}}
      </a>
    </div>
    <div :class="$style.commentBody">
      {{comment.body}}
    </div>
    <!--{{comment}}-->

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
  computed: {
    commentUser() {
      return this.comment.user
    }
  },
  mounted() {
    if(!this.$isServer) {
      console.log('this.comment', this.comment)
    }
  }
})
</script>

<style lang="stylus" module>
  .comment {
    width 100%

    border-radius var(--borderRadius_1)
    &:not(:first-child) {
      margin-top var(--indent_4)
    }
  }
  .commentHeader {
    padding var(--indent_4)
    border 1px solid var(--colorBorder_1)
    border-bottom none
    border-radius var(--borderRadius_1) var(--borderRadius_1) 0 0
    background-color var(--colorBgTertiary)
  }
  .commentUserLink {

  }
  .commentedAt {

  }
  .commentBody {
    border 1px solid var(--colorBorder_1)
    border-radius 0 0 var(--borderRadius_1) var(--borderRadius_1)
    padding var(--indent_4)
  }
</style>

