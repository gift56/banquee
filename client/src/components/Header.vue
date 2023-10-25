<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenuOnOutsideClick = (event) => {
  if (isMenuOpen.value && !menuRef.contains(event.target)) {
    isMenuOpen.value = false;
  }
};

const menuRef = ref(null);

onMounted(() => {
  window.addEventListener("click", closeMenuOnOutsideClick);
});

// Clean up the event listener when the component is unmounted
onUnmounted(() => {
  window.removeEventListener("click", closeMenuOnOutsideClick);
});

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
      <span @click="toggleMenu" v-if="!isMenuOpen" class="tab:hidden text-2xl">
        <i class="fa-solid fa-bars"></i>
      </span>
      <div
        :class="{ '!left-0': isMenuOpen, '-left-full': !isMenuOpen }"
        class="tab:hidden flex flex-col h-screen bg-black/40 gap-7 absolute top-0 w-full z-40 transition-all duration-300"
      ></div>
    </nav>
  </header>
</template>
