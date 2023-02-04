<template>
  <div class="flex gap-8 mt-10 justify-center">
    <div class="flex flex-col gap-5">
      <p>wind speed</p>
      <p>{{ (weatherData.wind_kph / 3.6).toFixed(2) }} m/s</p>
    </div>
    <div class="flex flex-col gap-5">
      <p>sunrise</p>
      <p>{{ weatherData.sunrise }}</p>
    </div>
    <div class="flex flex-col gap-5">
      <p>sunset</p>
      <p>{{ weatherData.sunset }}</p>
    </div>
    <div class="flex flex-col gap-5">
      <p>humidity</p>
      <p>{{ weatherData.humidity }} %</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(["weatherData"]);
</script>
