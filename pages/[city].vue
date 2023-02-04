<template>
  <div>
    <div v-if="pending">LOADING</div>
    <div v-else></div>
  </div>
</template>

<script setup lang="ts">
const { city } = useRoute().params;

const { API_KEY, API_URL } = useRuntimeConfig().public;

const { pending, data } = useLazyFetch(`${API_URL}/forecast.json`, {
  params: {
    key: API_KEY,
    q: city,
  },
});
</script>
