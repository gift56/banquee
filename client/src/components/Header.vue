<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const showNav = ref(false);
</script>

<template>
  <header class="w-full sticky top-0 z-40">
    <nav class="headerNav">
      <RouterLink to="/" class="select-none">
        <h2 class="font-dm text-2xl font-bold text-primary md:text-2xl">
          banquee.
        </h2>
      </RouterLink>
      <nav class="flex items-center justify-start gap-6">
        <RouterLink
          to="/"
          class="text-base font-medium text-dark w-fit px-3 py-2 rounded-md hover:bg-navhover"
          >Features</RouterLink
        >
      </nav>
    </nav>
  </header>
</template>
