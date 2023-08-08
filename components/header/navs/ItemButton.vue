<template>
    <button class="flex gap-[2px] items-center h-full px-3 text-gray-50 capitalize group hover:opacity-50">
        {{ props.name }}
        <Icon name="uil:angle-down" size="24" class="opacity-50 group-hover:translate-y-[2px] transition-transform ease-linear" />
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string }>()
</script>

<style scoped></style>