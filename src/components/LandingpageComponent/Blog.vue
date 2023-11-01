<template>
  <section class="w-full bg-white">
    <div class="container">
      <div class="w-full flex flex-col items-start justify-start gap-8 py-16">
        <div class="w-full flex items-center justify-between gap-6">
          <h3 class="headingtext2">Blog</h3>
          <RouterLink to="/blog" class="group">
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
            v-for="blog in blogData.slice(0, 3)"
            :key="blog.blogHeadline"
            class="w-full flex flex-col items-start justify-start gap-4"
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { blogData } from "../../utils/constant";
</script>
