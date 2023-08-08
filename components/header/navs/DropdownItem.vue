<template>
    <NuxtLink :to="props.to"
        class="flex gap-[2px] items-center p-3 capitalize text-gray-800 bg-transparent hover:opacity-50 hover:text-teal-800 hover:underline">
        {{ props.name }}
    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string
    to: string
}>()
</script>

<style scoped></style>