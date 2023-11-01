<template>
  <section class="w-full bg-white overflow-hidden">
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
          <div
            class="w-full grid sm:grid-cols-2 gap-4 items-start justify-start"
          >
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
            <RouterLink to="/compare" class="group">
              <div class="text-primary flex items-center gap-2">
                Compare Cards
                <img
                  src="@/assets/icons/right_arrowIcon.svg"
                  alt="arrow"
                  class="group-hover:translate-x-3 transition-all duration-300"
                />
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="flex-1 relative flex items-center justify-center">
          <img
            src="@/assets/images/herocard.svg"
            alt="heroCard"
            class="relative z-10 w-[70%] max-w-full xl:w-[300px]"
          />
          <img
            src="@/assets/images/herocard2.svg"
            alt="heroCard"
            class="absolute right-0 tab:top-[-5%] animate-switchImages w-[90%] max-w-full xl:w-[380px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { heroFeatures } from "../../utils/constant";
</script>
