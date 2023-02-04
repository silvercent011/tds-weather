<template>
  <div class="flex gap-16">
    <div
      v-for="(hour, index) in hours"
      class="flex flex-col items-center justify-center"
    >
      <p>
        {{ index }}
      </p>
      <Icon name="wi:day-cloudy" size="60px" />
      <p>{{ hour.temp_c }} ºC</p>
      <!-- {{ hour.condition.text }} -->
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(["hours"]);
</script>
