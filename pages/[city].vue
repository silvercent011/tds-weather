<template>
  <div>
    <div v-if="pending">LOADING</div>
    <div v-else>
      <LocationWeather :weatherData="data" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { city } = useRoute().params;

const { API_KEY, API_URL } = useRuntimeConfig().public;

const { pending, data, error } = useLazyFetch(`${API_URL}/forecast.json`, {
  params: {
    key: API_KEY,
    q: city,
    days: 1,
  },
});
</script>
