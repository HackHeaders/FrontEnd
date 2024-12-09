<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import axios from 'axios';
import { useGeolocation } from '@vueuse/core';

// Geolocation API
const { coords, locatedAt, error, resume, pause } = useGeolocation();

// Live mode control
const live = ref(false);

// Interval ID for clearing later
let intervalId: NodeJS.Timeout | null = null;

watch(live, async (isLive) => {
    if (isLive) {
        intervalId = setInterval(async () => {
            console.log("Analyzing your location...");
            console.log(JSON.stringify(coords.value.latitude + " " + coords.value.longitude));

            const response = await axios.patch("https://api.fexcompany.me/api/orders/6/update-driver-position/",
                {
                    driver_position: JSON.stringify({
                        latitude: coords.value.latitude,
                        longitude: coords.value.longitude,
                    })
                });

        }, 10000);
    } else if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
});

onUnmounted(() => {
    if (intervalId) {
        clearInterval(intervalId);
    }
});
</script>

<template>
    <main>
        <button @click="live = !live">
            {{ live ? "Stop Live Mode" : "Start Live Mode" }}
        </button>
        <pre lang="json">{{
            JSON.stringify(
                {
                    coords: {
                        accuracy: coords.accuracy,
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                        altitude: coords.altitude,
                        altitudeAccuracy: coords.altitudeAccuracy,
                        heading: coords.heading,
                        speed: coords.speed,
                    },
                    locatedAt,
                    error: error ? error.message : error,
                },
                null,
                2,
            )
        }}</pre>
        <button @click="pause">Pause watch</button>
        <button @click="resume">Start watch</button>
    </main>
</template>

<style scoped>
main {
    width: 50%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
