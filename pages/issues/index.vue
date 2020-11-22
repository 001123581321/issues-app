<template>
  <div :class="$style.issuesPage">
    <IssueList/>
    <Pagination
      :class="$style.pagination"
      v-bind="{
        links: paginationLinks,
        activeLinkIndex: activePaginationLinkIndex
      }"
    />
  </div>
</template>

<script>
  import Vue from 'vue'
  import {mapState} from 'vuex'
  import IssueList from '~/components/IssueList'
  import Pagination from '~/components/_componentsLib/Pagination'

  export default Vue.extend({
    components: {
      IssueList,
      Pagination
    },
    middleware: ['getIssues'],
    computed: {
      ...mapState({
        issuePagination: state => state.issues.pagination
      }),
      paginationLinks() {
        const paginationLinks = []
        if(!this.issuePagination) {
          return paginationLinks
        }
        const lastPageRouterLocation = this.$router.resolve(this.issuePagination.last).location
        const pagesQuantity = parseInt(lastPageRouterLocation.query.page, 10)
        for (let i = 0; i < pagesQuantity; i++) {
          paginationLinks.push({
            query: {
              page: i + 1
            }
          })
        }
        return paginationLinks
      },
      activePaginationLinkIndex() {
        if(!this.issuePagination) {
          return
        }
        const nextPageNumber = this.$router.resolve(this.issuePagination.next)?.location?.query?.page

        if(!nextPageNumber) {
          return
        }
        let currentPageNumber = parseInt(nextPageNumber, 10) - 1
        if(currentPageNumber < 1) {
          currentPageNumber = 1
        }
        return currentPageNumber - 1
      },
    },

    mounted() {
      if (!this.$isServer) {
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

  .pagination {
    margin-top var(--indent_4)
  }
</style>
