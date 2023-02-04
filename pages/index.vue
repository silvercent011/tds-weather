<template>
  <div>
    <h1>Weather</h1>
    <h1>Select a city</h1>
    <div>
      <NuxtLink
        v-for="(city, index) in cities"
        :key="index"
        :href="city.toLowerCase()"
      >
        {{ city }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">

const cities = [
  'Dallol', 'Fairbanks', 'London', 'Recife', 'Vancouver', 'Yakutsk'
]
</script>
