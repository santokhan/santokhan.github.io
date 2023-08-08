<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <!-- <IntroAnimation v-if="intro" /> -->
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const intro = ref<boolean>(true)

watchEffect(() => {
  setTimeout(() => {
    intro.value = false
  }, 2450);
})
</script>

<style scoped></style>
