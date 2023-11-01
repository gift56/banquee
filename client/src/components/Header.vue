<template>
  <header class="w-full sticky top-0 z-40 bg-white">
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
        class="tab:hidden flex flex-col h-screen bg-black/40 gap-7 absolute top-0 w-full z-40 transition-all duration-300"
        :class="{ 'left-0': isMenuOpen, '-left-full': !isMenuOpen }"
      >
        <nav
          ref="menuRef"
          className="flex flex-col h-full bg-white gap-5 p-4 w-[250px]"
        >
          <div className="w-full flex items-center justify-end">
            <span @click="toggleMenu" className="text-dark text-2xl">
              <i class="fa-solid fa-xmark"></i>
            </span>
          </div>
          <RouterLink
            v-for="link in navLinks"
            :key="link.text"
            :to="link.href"
            class="text-base font-medium text-dark"
            >{{ link.text }}</RouterLink
          >
          <RouterLink to="/" class="text-lg font-medium text-primary font-dm"
            >Login</RouterLink
          >
          <RouterLink to="/">
            <button type="button" class="btn bg-primary text-white">
              Open Account
            </button>
          </RouterLink>
        </nav>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";

const isMenuOpen = ref(false);
const menuRef = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenuOnClickOutside = (event) => {
  if (
    isMenuOpen.value &&
    menuRef.value &&
    !menuRef.value.contains(event.target)
  ) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("mousedown", closeMenuOnClickOutside);
});

// Clean up the event listener when the component is unmounted
onUnmounted(() => {
  document.removeEventListener("mousedown", closeMenuOnClickOutside);
});

const navLinks = [
  {
    href: "/feature#",
    text: "Features",
  },
  {
    href: "/compare#",
    text: "Compare",
  },
  {
    href: "/support#",
    text: "Support",
  },
  {
    href: "/blog#",
    text: "Blog",
  },
];
</script>
