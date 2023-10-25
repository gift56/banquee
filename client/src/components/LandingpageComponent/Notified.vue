<template>
  <section class="w-full bg-white">
    <div class="container">
      <div class="sectionCon">
        <div
          class="w-full tab:flex-1 flex flex-col items-start justify-start gap-6"
        >
          <h6 class="text-base font-medium text-dark md:text-xl font-dm">
            Notifications
          </h6>
          <h3 class="headingtext2">Stay notified</h3>
          <p class="text-base font-medium text-dark md:text-xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div class="flex flex-col items-start justify-start gap-3">
            <div
              v-for="feature in receiveFeature"
              :key="feature"
              class="flex items-center justify-start gap-3 w-full"
            >
              <img src="@/assets/icons/badgeIcon.svg" alt="icon" />
              <span
                class="text-sm md:text-base font-medium text-dark tab:text-lg"
                >{{ feature }}</span
              >
            </div>
          </div>
          <RouterLink to="/">
            <div class="text-primary flex items-center gap-4">
              Compare Cards
              <img src="@/assets/icons/right_arrowIcon.svg" alt="arrow" />
            </div>
          </RouterLink>
        </div>
        <div
          class="w-full tab:flex-1 flex flex-col gap-5 items-center justify-center"
        >
          <div
            v-for="item in [{}]"
            class="max-w-full w-full tab:max-w-[80%] tab:w-[80%] py-2 px-4 bg-white rounded-[10px] flex items-center justify-between gap-5"
          >
            <div class="flex items-start justify-start gap-4">
              <span
                class="w-12 h-12 rounded-lg bg-primary text-white text-2xl flex items-center justify-center"
              >
                <i :class="product.icon"></i>
              </span>
              <div class="flex flex-col items-start justify-start">
                <h4 class="font-dm text-medium text-base md:text-lg text-dark">
                  {{ product.productBrand }}
                </h4>
                <p class="text-sm font-medium md:text-base text-dark/50">
                  {{ product.product }}
                </p>
              </div>
            </div>
            <p class="font-dm text-medium text-base md:text-lg text-dark">
              {{ product.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { receiveFeature } from "../../utils/constant";
</script>
