<template>
  <div>
    <div class="header">
      <img src="/public/imgs/logo.svg" alt="">
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
  
</script>

<style lang="scss">
  body {
    background-color: black;
  }
  .header {
    width: 100vw;
    height: 300px;
    background-color: #fff;
    // background: url('../public/imgs/header_background.jpg') center center / cover no-repeat;
    img {
      width: 200px;
    }
  }
</style>