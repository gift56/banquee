<template>
  <section class="w-full bg-white">
    <div class="container">
      <div class="w-full flex flex-col items-start justify-start gap-4 py-16">
        <h6 class="text-base font-medium text-dark md:text-xl font-dm">
          Saving Accounts
        </h6>
        <h3 class="headingtext2">
          Organize your <br class="hidden tab:block" />
          money the right way
        </h3>
        <div
          class="w-full flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p
            class="text-base font-medium text-dark md:text-xl tab:max-w-[600px]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <RouterLink to="/" class="group">
            <div class="text-primary flex items-center gap-2">
              All Features
              <img
                src="@/assets/icons/right_arrowIcon.svg"
                alt="arrow"
                class="group-hover:translate-x-3 transition-all duration-300"
              />
            </div>
          </RouterLink>
        </div>

        <div
          class="w-full mt-6 grid grid-cols-1 md:grid-cols-2 tab:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-start justify-start gap-6"
        >
          <div
            v-for="item in organizeFeature"
            :key="item.product"
            class="w-full flex flex-col items-start justify-start gap-4"
          >
            <img :src="item.featureImage" :alt="item.product" class="w-full" />
            <div>
              <h3 class="text-base font-medium text-dark md:text-xl font-dm">
                {{ item.product }}
              </h3>
              <p class="text-sm font-medium md:text-base text-dark/50">
                {{ item.price }}
              </p>
            </div>
          </div>
          <div class="w-full flex flex-col items-start justify-start gap-4">
            <img
              src="@/assets/icons/feature5Icon.svg"
              alt="addNew"
              class="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { organizeFeature } from "../../utils/constant";
</script>
