<template>
    <div class="w-full h-screen grid place-items-center text-7xl font-bold relative overflow-hidden erasing bg-default-900">
        <div class="relative text-white/30 z-[1] whitten mb-6">Afford</div>
        <div
            class="absolute top-full left-1/2 -translate-x-1/2 w-40 lg:w-60 h-40 lg:h-60 rounded-full blur-[3rem] bg-teal-400 sun">
        </div>
        <div class="absolute top-full -translate-y-1/2 lg:-translate-y-1/4 w-full h-32 blur-[3rem] bg-teal-400"></div>
    </div>
</template>

<script setup lang="ts">
const top = ref<number>(100)
watchEffect(() => {
    const interval = setInterval(() => {
        if (top.value > 50) {
            top.value--
        } else {
            clearInterval(interval)
        }
    }, 20)
})
</script>

<style scoped>
.whitten {
    animation: whitten 2000ms ease-in forwards;
}

@keyframes whitten {
    60% {
        color: rgba(255, 255, 255, 0.3);
    }

    100% {
        color: white;
    }
}

.sun {
    animation: sun 2000ms linear forwards;
}

@keyframes sun {
    0% {
        transform: translateY(0) translateX(-50%) scale(1);
    }

    100% {
        transform: translateY(-58vh) translateX(-50%) scale(1.5);
    }
}

.erasing {
    animation: erasing 250ms ease-in forwards;
    animation-delay: 2200ms;
}

@keyframes erasing {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@media (min-width:576px) {
    @keyframes sun {
        0% {
            transform: translateY(0) translateX(-50%) scale(1);
        }

        100% {
            transform: translateY(-62vh) translateX(-50%) scale(1.5);
        }
    }
}
</style>