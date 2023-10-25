<template>
  <section class="w-full bg-white">
    <div class="container">
      <div class="sectionCon">
        <div class="flex-1 flex flex-col items-start justify-start gap-4">
          <h1 class="headingtext">
            Banking <br class="hidden tab:block" />
            starts here.
          </h1>
          <p class="text-base font-medium text-dark md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div class="w-full grid grid-cols-2 gap-4 items-start justify-start">
            <div
              v-for="feature in heroFeatures"
              :key="feature"
              class="flex items-center justify-start gap-3"
            >
              <img src="@/assets/icons/badgeIcon.svg" alt="icon" />
              <span
                class="text-sm md:text-base font-medium text-dark tab:text-lg"
                >{{ feature }}</span
              >
            </div>
          </div>
          <div
            class="flex flex-col mt-4 md:flex-row items-center justify-start w-full gap-5"
          >
            <RouterLink to="/" class="w-full md:w-fit">
              <button
                type="button"
                class="btn bg-primary text-white !w-full md:!w-fit !px-8"
              >
                Open Account
              </button>
            </RouterLink>
            <RouterLink to="/">
              <button type="button" class="btn text-primary gap-4">
                Compare Cards
                <img src="@/assets/icons/right_arrowIcon.svg" alt="arrow" />
              </button>
            </RouterLink>
          </div>
        </div>
        <div class="flex-1 relative flex items-center justify-center">
          <img src="@/assets/images/herocard.svg" alt="heroCard" />
          <img src="../../assets/images/herocard2.svg" alt="heroCard" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { heroFeatures } from "../../utils/constant";
import { RouterLink } from "vue-router";
</script>
