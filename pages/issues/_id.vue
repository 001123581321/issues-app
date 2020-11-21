<template>
  <div :class="$style.issuePage">
    <Comment
      v-for="comment in comments"
      :key="`comment_${comment.id}`"
      v-bind="{
        comment
      }"
    />
  </div>
</template>

<script>
  import Vue from 'vue'
  import Comment from '~/components/Comment'

  export default Vue.extend({
    components: {
      Comment
    },
    data() {
      return {
        comments: [],
      }
    },
    async fetch() {
      const routeParams = this.$route.params
      this.comments.push(
        routeParams.issue,
        ...await this.$store.dispatch({
          type: 'issues/getIssueFromGithub',
          number: routeParams.id
        })
      )
    },
  })
</script>

<style lang="stylus" module>
  .issuePage {
    display flex
    flex-direction column
    padding var(--indent_4)
    width 100%
  }
</style>
