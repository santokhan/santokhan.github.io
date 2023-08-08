<template>
    <footer>
        <section class="bg-default-800 px-4 py-5">
            <div class="flex justify-between">
                <div class="flex gap-6">
                    <div class="text-default-300">@2023 <nuxt-link to="/"
                            class="text-default-300 hover:underline">Afford</nuxt-link></div>
                    <nuxt-link to="terms" class="text-default-300 hover:underline">Terms</nuxt-link>
                    <nuxt-link to="terms" class="text-default-300 hover:underline">Privacy</nuxt-link>
                    <nuxt-link to="terms" class="text-default-300 hover:underline">Sitemap</nuxt-link>
                </div>
                <div class="flex gap-6">
                    <a class="text-default-300 hover:text-[#3b5998]" href="http://">
                        <Icon name="ic:baseline-facebook" size="24" />
                    </a>
                    <a class="text-default-300 hover:text-[#bc2a8d]" href="http://">
                        <Icon name="uil:instagram" size="24" />
                    </a>
                    <a class="text-default-300 hover:text-[#ea4c89]" href="http://">
                        <Icon name="uil:dribbble" size="24" />
                    </a>
                    <a class="text-default-300 hover:text-[#000000]" href="http://">
                        <Icon name="uil:github" size="24" />
                    </a>
                    <a class="text-default-300 hover:text-[#bb0000]" href="http://">
                        <Icon name="uil:youtube" size="24" />
                    </a>
                </div>
            </div>
        </section>
    </footer>
</template>

<script setup lang="ts">
import Container from '../section/Container.vue';
</script>

<style scoped></style>