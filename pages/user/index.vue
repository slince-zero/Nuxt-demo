<template>
  <div>
    user
  </div>
  <!-- <img src="@/assets/test.png" alt="test"> -->
  <!-- <img src="@/assets/test.png" alt="test"> -->
  <img src="/test.png" alt="test">
  <IconsBell />
</template>
<script setup>
/**
 * @description 用于自定义布局
 */
definePageMeta({
  layout: 'custom'
})
const { sayHello } = useUtils()
sayHello()
</script>
<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>