<template>
  <footer class="bg-white py-10">
    <div class="headerNav">
      <div class="w-full flex flex-col items-start justify-start gap-10">
        <div
          class="w-full flex flex-col md:flex-row gap-6 items-start justify-between"
        >
          <div
            class="flex flex-col items-start justify-start w-full sm:w-[50%]"
          >
            <RouterLink to="/" class="select-none">
              <h2 class="font-dm text-2xl font-bold text-primary md:text-2xl">
                banquee.
              </h2>
            </RouterLink>
          </div>
          <div
            class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <div
              v-for="footerLink in footerLinks"
              :key="footerLink.title"
              class="w-full flex flex-col items-start justify-start gap-8"
            >
              <h4 class="text-base font-medium text-dark font-dm md:text-lg">
                {{ footerLink.title }}
              </h4>
              <nav class="w-full flex flex-col items-start justify-start gap-4">
                <RouterLink
                  :to="link.href"
                  v-for="link in footerLink.footerLinks"
                  class="text-sm font-medium md:text-base text-dark/50 hover:text-primary transition-all duration-300"
                  >{{ link.text }}</RouterLink
                >
              </nav>
            </div>
          </div>
        </div>
        <div
          class="w-full flex items-center justify-center gap-5 pt-2 border-t border-bordergray mt-8"
        >
          <p class="text-sm font-medium text-dark/50">
            © Made by <span class="text-primary">Efe Gift</span> - Powered by
            <span class="text-primary">Vuejs</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { footerLinks } from "../utils/constant";
</script>
