<template>
    <NuxtLink :to="props.to || ''" class="flex gap-[2px] items-center h-full px-3 text-gray-50 capitalize hover:opacity-50">
        {{ props.name }}
    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{ to: string, name: string }>()
</script>

<style scoped></style>