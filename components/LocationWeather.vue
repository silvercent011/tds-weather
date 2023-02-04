<template>
  <h1>{{ location.name }}</h1>
  <h1>{{ weather.condition.text }}</h1>
  <CurrentWeather :weatherData="weather" />
  <HoursComponent :hours="day" />
  <BottomStats :weatherData="weather" />
</template>

<script setup lang="ts">
const props = defineProps(["weatherData"]);

const location = getLocationData(props.weatherData);

const weather = getCurrentForecast(props.weatherData);

const day = getActualDay(props.weatherData);
</script>
