<template>
  <footer class="bg-white py-10">
    <div class="headerNav">
      <div
        class="w-full flex flex-col md:flex-row gap-6 items-start justify-between"
      >
        <div class="flex flex-col items-start justify-start">
          <RouterLink to="/" class="select-none">
            <h2 class="font-dm text-2xl font-bold text-primary md:text-2xl">
              banquee.
            </h2>
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
