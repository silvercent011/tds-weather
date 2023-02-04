<template>
  <div>
    <div v-for="(hour, index) in hours">
      {{ index }}
      {{ hour.temp_c }}
      {{ hour.condition.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(["hours"]);
</script>
