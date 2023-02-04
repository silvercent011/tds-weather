<template>
  <div class="flex items-center justify-center">
    <p class="text-8xl">{{ weatherData.temp_c }}</p>
    <div class="flex flex-col items-end">
      <p>ºC</p>
      <div class="flex items-center">
        <Icon name="wi:day-cloudy" />
        <p>{{ weatherData.maxtemp_c }}</p>
      </div>
      <div class="flex items-center">
        <Icon name="wi:day-cloudy" />
        <p>{{ weatherData.mintemp_c }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(["weatherData"]);
</script>
