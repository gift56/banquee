<template>
  <main class="w-full">
    <div class="container">
      <div
        class="w-full flex flex-col items-center justify-center gap-10 py-16"
      >
        <h2 class="headingtext">Blog</h2>
        <div class="flex flex-col items-start justify-start gap-4 w-full">
          <div class="flex items-center justify-start gap-5">
            <h4 class="text-base font-medium text-dark md:text-lg font-dm">
              Categories
            </h4>
            <div class="flex items-center justify-start gap-4">
              <div
                v-for="(item, index) in cat"
                :key="index"
                class="w-fit px-2 py-1 bg-navhover rounded cursor-pointer select-none"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const cat = ["All", "Product", "Technology", "App"];
</script>
