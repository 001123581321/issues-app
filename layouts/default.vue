<template>
  <Nuxt/>
</template>

<style lang="stylus">
  :root {
    --colorTextPrimary #24292e
    --colorBorder_1 #eaecef
    --colorTextLink #0366d6
    --colorBgTertiary #f6f8fa
    --colorIconSuccess #22863a
    --color_1 #fff
    --color_2 #fe6cbd
    --color_3 #c6c7f6

    --gradient_1 linear-gradient(45deg, var(--color_2), var(--color_3) 90%)

    --indent_1 5px
    --indent_2 10px
    --indent_3 15px
    --indent_4 20px
    --indent_5 3px

    --fontSize_1 14px
    --fontSize_2 12px

    --borderRadius_1 5px
    --borderRadius_2 10px

    --iconSize_1 16px
    --iconSize_2 12px
  }

  html {
    font-family 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
    font-size 16px
    word-spacing 1px
    -ms-text-size-adjust 100%
    -webkit-text-size-adjust 100%
    -moz-osx-font-smoothing grayscale
    -webkit-font-smoothing antialiased
    box-sizing border-box
  }

  *,
  *::before,
  *::after {
    box-sizing border-box
    margin 0
  }

  body,
  #__nuxt,
  #__layout {
    width 100%
    height 100%
    position relative
    display flex
    align-items center
    justify-content center
    overflow auto
  }

  body {
    font-family -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji
    color var(--colorTextPrimary)
    font-size var(----fontSize_1)
  }

  input {
    background-color transparent
    outline none
    border-radius 3px
    font-size 21px
    padding 2px 10px
    width 100%
    &::-webkit-contacts-auto-fill-button,
    &::-webkit-textfield-decoration-container,
    &::-webkit-caps-lock-indicator,
    &::-webkit-credentials-auto-fill-button {
      visibility hidden
    }
  }

  a {
    color var(--colorTextLink)
    text-decoration none
  }

  .link_expressionless {
    color var(--colorTextPrimary) !important
    &:hover {
      color var(--colorTextLink) !important
    }
  }

  .h1, .h2, .h3, .h4, .h5, .h6 {
    font-weight 600 !important
  }

  .textSmall {
    font-size var(--fontSize_2) !important
  }

  .lightText {
    color var(--color_1) !important
  }

</style>
