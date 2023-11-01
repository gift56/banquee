<template>
  <main class="w-full">
    <div class="container">
      <div
        class="w-full flex flex-col items-center justify-center gap-10 py-16 overflow-hidden"
      >
        <h2 class="headingtext">Blog</h2>
        <div class="flex flex-col items-start justify-start gap-4 w-full">
          <div class="flex items-center justify-start gap-5 flex-wrap">
            <h4 class="text-base font-medium text-dark md:text-lg font-dm">
              Categories
            </h4>
            <div class="flex items-center justify-start gap-4 flex-wrap">
              <div
                v-for="(item, index) in cat"
                :key="index"
                class="w-fit px-2 py-1 bg-navhover rounded cursor-pointer select-none hover:bg-primary hover:text-white transition-all duration-300"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full grid sm:grid-cols-2 tab:grid-cols-3 gap-x-4 gap-y-10"
        >
          <RouterLink
            v-for="blog in blogData"
            :key="blog.blogHeadline"
            :to="blog.blogid"
            class="w-full flex flex-col items-start justify-start gap-4 cursor-pointer"
          >
            <img
              :src="blog.blogImage"
              :alt="blog.blogHeadline"
              class="w-full aspect-square rounded-2xl"
            />
            <div class="flex flex-col items-start justify-start gap-3 w-full">
              <h3 class="text-lg font-medium font-dm text-dark md:text-2xl">
                {{ blog.blogHeadline }}
              </h3>
              <p class="text-sm font-medium text-dark md:text-base">
                {{ blog.detail }}
              </p>
              <div
                class="w-full flex flex-wrap gap-5 items-start justify-start"
              >
                <span
                  class="w-fit py-1 px-2 rounded text-sm font-medium text-dark select-none bg-bordergray"
                  v-for="item in blog.cat"
                  :key="item"
                  >{{ item }}</span
                >
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { blogData } from "../utils/constant";

const cat = ["All", "Product", "Technology", "App"];
</script>
