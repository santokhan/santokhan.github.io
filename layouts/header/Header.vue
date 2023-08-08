<template>
    <section class="">
        <div class="h-16 flex items-center justify-between">
            <HeaderNavsHamburger />
            <Logo />
            <nav class="px-4 hidden lg:flex items-center h-full">
                <div v-for="(e, i) in navs" :key="i" class="h-10">
                    <HeaderNavsItem v-if="!e.dropdown" :name="e.name" :to="e.to" />
                    <div v-else class="h-10 flex items-center relative group/drop">
                        <HeaderNavsItemButton :name="e.name" />
                        <div
                            class="absolute top-full left-0 bg-white/90 backdrop-blur-sm rounded-md hidden group-hover/drop:block p-2 z-[2] drop">
                            <div class="grid" :style="{ gridTemplateColumns: generateCols(e.dropdown) }" >
                                <HeaderNavsDropdownItem v-for="(e1, i1) in e.dropdown" :key="i + i1" :name="e1.name"
                                    :to="e1.to" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="w-full"></div>
            <User />
        </div>
    </section>
</template>

<script setup lang="ts">
import { navs } from '../../components/header/navs/navs'
import User from '../../layouts/header/User.vue'

function generateCols(list: any[]): string {
    const len = list.length
    let cols = Math.floor(len / 8)
    let gridCols = "10rem"
    if (len > 8) {
        while (cols > 0) {
            gridCols += " 10rem"
            cols--
        }
    }
    return gridCols // output "auto auto auto..."
}
</script>

<style scoped>
.drop {
    animation: drop 250ms linear forwards;
    transform-origin: top;
}

@keyframes drop {
    0% {
        transform: scale(.95);
    }

    100% {
        transform: scale(1);
    }
}
</style>