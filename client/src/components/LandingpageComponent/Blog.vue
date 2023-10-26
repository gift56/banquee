<template>
  <section class="w-full bg-white">
    <div class="container">
      <div class="w-full flex flex-col items-start justify-start gap-8 py-16">
        <div class="w-full flex items-center justify-between gap-6">
          <h3 class="headingtext2">Blog</h3>
          <RouterLink to="/" class="group">
            <div class="text-primary flex items-center gap-2">
              All Articles
              <img
                src="@/assets/icons/right_arrowIcon.svg"
                alt="arrow"
                class="group-hover:translate-x-3 transition-all duration-300"
              />
            </div>
          </RouterLink>
        </div>
        <div class="w-full grid sm:grid-cols-2 tab:grid-cols-3 gap-4">
          <div
            v-for="blog in blogData"
            :key="blog.blogHeadline"
            class="w-full flex flex-col items-start justify-start gap-4"
          >
            <img :src="blog.blogImage" :alt="blog.blogHeadline" class="w-full aspect-square rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { blogData } from "../../utils/constant";
</script>
