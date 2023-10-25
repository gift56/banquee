<script setup>
import { RouterLink } from "vue-router";
const navLinks = [
  {
    href: "/",
    text: "Features",
  },
  {
    href: "/",
    text: "Compare",
  },
  {
    href: "/",
    text: "Support",
  },
  {
    href: "/",
    text: "Support",
  },
  {
    href: "/",
    text: "Blog",
  },
];
</script>

<template>
  <header class="w-full sticky top-0 z-40">
    <nav class="headerNav">
      <RouterLink to="/" class="select-none">
        <h2 class="font-dm text-2xl font-bold text-primary md:text-2xl">
          banquee.
        </h2>
      </RouterLink>
      <nav class="navLink">
        <RouterLink
          v-for="link in navLinks"
          :key="link.text"
          :to="link.href"
          class="text-base font-medium text-dark w-fit px-3 py-2 rounded-md hover:bg-navhover transition-all duration-300"
          >{{ link.text }}</RouterLink
        >
      </nav>
      <div class="navLink">
        <RouterLink to="/" class="text-lg font-medium text-primary font-dm"
          >Login</RouterLink
        >
        <RouterLink to="/">
          <button type="button" class="btn bg-primary text-white">
            Open Account
          </button>
        </RouterLink>
      </div>
      <span class="tab:hidden w-5 h-5 bg-red-500">
        
      </span>
    </nav>
  </header>
</template>
