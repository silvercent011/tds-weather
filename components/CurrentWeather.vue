<template>
  <p>{{ weatherData.temp_c }}</p>
  <p>{{ weatherData.maxtemp_c }}</p>
  <p>{{ weatherData.mintemp_c }}</p>
</template>

<script setup lang="ts">
defineProps(["weatherData"]);
</script>
