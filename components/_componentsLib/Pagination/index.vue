<template>
  <div :class="$style.pagination">
    <div :class="$style.linksWrapper">
      <component
        :is="prevPageLink ? 'router-link' : 'span'"
        key="prev"
        v-bind="{
          ...prevPageLink && {
            to: prevPageLink
          }
        }"
        :class="[
          'textSmall',
          $style.link,
          !prevPageLink && $style.link_disabled
        ]"
      >
        < Previous
      </component>
      <router-link
        v-for="(link, index) in links"
        :key="`link_${index}`"
        :class="[
          'textSmall',
        ' link_expressionless',
          $style.link,
          ...index === activeLinkIndex && ['lightText', $style.link_active],
        ]"
        :to="link"
      >
        {{index + 1}}
      </router-link>

      <component
        :is="nextPageLink ? 'router-link' : 'span'"
        v-bind="{
          ...nextPageLink && {
            to: nextPageLink
          }
        }"
        :class="[
          'textSmall',
          $style.link,
          !nextPageLink && $style.link_disabled
        ]"
      >
        Next >
      </component>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    props: {
      links: {
        type: Array,
        required: true
      },
      activeLinkIndex: {
        type: Number,
      }
    },
    computed: {
      prevPageLink() {
        if (this.activeLinkIndex > 0) {
          return this.links[this.activeLinkIndex - 1]
        }
      },
      nextPageLink() {
        if (this.activeLinkIndex > -1 && this.activeLinkIndex < this.links.length) {
          return this.links[this.activeLinkIndex + 1]
        }
      },
    }
  })
</script>

<style lang="stylus" module>
  .pagination {
    display flex
  }

  .linksWrapper {
    display flex
    align-items center
    justify-content center
    flex-wrap wrap
    margin-top calc(var(--indent_1) * -1)
    margin-left calc(var(--indent_1) * -1)
    width 100%
  }

  .link {
    padding var(--indent_1) var(--indent_2)
    border-radius var(--borderRadius_1)
    margin-top var(--indent_1)

    & + .link {
      margin-left var(--indent_1)
    }

    &:not(.link_active):not(.link_disabled):hover {
      box-shadow 0 0 0 1px var(--colorBorder_1)
    }
  }

  .link_active {
    background-image var(--gradient_1)
    color var(--color_1)
  }

  .link_disabled {
    cursor default
  }
</style>
