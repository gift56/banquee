<template>
  <section class="w-full bg-white">
    <div class="container">
      <div class="w-full flex flex-col items-start justify-start gap-4 py-16">
        <h6 class="text-base font-medium text-dark md:text-xl font-dm">
          Testimonials
        </h6>
        <div
          class="w-full flex flex-col md:flex-row items-end justify-between gap-6"
        >
          <h3 class="headingtext2">
            People all over the<br class="hidden tab:block" />
            world use banko.
          </h3>
          <div class="flex items-center justify-end gap-2">
            <div
              class="w-10 h-10 bg-featureBg rounded-full flex items-center justify-center"
            >
              <img src="@/assets/icons/starIcon.svg" alt="star" />
            </div>
            <p class="text-base font-medium text-dark md:text-lg">
              Rated <span class="text-primary">4.8/5</span> from over 1000 users
            </p>
          </div>
        </div>
        <div
          class="w-full grid grid-cols-2 lg:grid-cols-3 items-start justify-start gap-6"
        >
          <div
            v-for="testimony in testimonyData"
            :key="testimony.headline"
            class="card"
          >
            <div class="flex items-center justify-start gap-1">
              <img
                src="@/assets/icons/starIcon.svg"
                alt="star"
                v-for="star in testimony.starTotal"
                :key="star"
              />
            </div>
            <h4
              class="text-lg font-medium text-dark font-dm md:text-2xl xl:text-3xl"
            >
              {{ testimony.headline }}
            </h4>
            <p class="text-sm font-medium text-dark md:text-base">
              {{ testimony.detail }}
            </p>
            <div class="flex flex-col items-start justify-start">
              <h5
                class="text-base font-medium text-dark md:text-lg font-dm"
              ></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { testimonyData } from "../../utils/constant";
</script>
