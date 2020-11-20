<template>
  <div>
    <Nuxt/>
  </div>
</template>

<style lang="stylus">
  :root {
    --colorTextPrimary: #24292e
    --colorBorder_1: #eaecef
    --colorTextLink: #0366d6
    --colorBgTertiary: #f6f8fa

    --indent_1: 5px
    --indent_2: 10px
    --indent_3: 15px
    --indent_4: 20px
    --fontSize_1: 14px

    --borderRadius_1: 5px
  }

  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
    font-size: 16px
    word-spacing: 1px
    -ms-text-size-adjust: 100%
    -webkit-text-size-adjust: 100%
    -moz-osx-font-smoothing: grayscale
    -webkit-font-smoothing: antialiased
    box-sizing: border-box
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
    /*border none*/
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

  .h1, .h2, .h3, .h4, .h5, .h6 {
    font-weight 600 !important
  }

  .textSmall {
    font-size 12px !important
  }
</style>
