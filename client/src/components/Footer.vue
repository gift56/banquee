<template>
  <footer class="bg-white py-10">
    <div class="headerNav">
      <div
        class="w-full flex flex-col md:flex-row gap-6 items-start justify-between"
      >
        <div class="flex flex-col items-start justify-start w-full">
          <RouterLink to="/" class="select-none">
            <h2 class="font-dm text-2xl font-bold text-primary md:text-2xl">
              banquee.
            </h2>
          </RouterLink>
        </div>
        <div
          class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <div
            v-for="footerLink in footerLinks"
            :key="footerLink.title"
            class="w-full flex flex-col items-start justify-start gap-8"
          >
            <h4 class="text-base font-medium text-dark font-dm md:text-lg">
              {{ footerLink.title }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { footerLinks } from "../utils/constant";
</script>
