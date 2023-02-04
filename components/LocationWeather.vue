<template>
  <div class="text-center">
    <h1 class="text-6xl">{{ location.name.toUpperCase() }}</h1>
    <h1 class="text-2xl">{{ weather.condition.text.toLowerCase() }}</h1>
    <CurrentWeather :weatherData="weather" />
    <Icon name="wi:day-cloudy" size="200px" />
    <HoursComponent :hours="day" />
    <BottomStats :weatherData="weather" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["weatherData"]);

const location = getLocationData(props.weatherData);

const weather = getCurrentForecast(props.weatherData);

const day = getActualDay(props.weatherData);
</script>
