<template>
  <p>{{ (weatherData.wind_kph / 3.6).toFixed(2) }}</p>
  <p>{{ weatherData.sunrise }}</p>
  <p>{{ weatherData.sunset }}</p>
  <p>{{ weatherData.humidity }}</p>
</template>

<script setup lang="ts">
defineProps(["weatherData"]);
</script>
