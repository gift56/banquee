<template>
  <section
    class="w-full tab:h-screen tab:overflow-hidden bg-featureBg flex items-center justify-center flex-col"
  >
    <div
      class="w-full h-full flex flex-col justify-between items-center pt-16 tab:pt-20"
    >
      <div class="flex flex-col items-center justify-center w-[90%] mx-auto">
        <h4
          class="text-lg text-dark font-medium font-dm md:text-xl text-center"
        >
          Features
        </h4>
        <h2 class="headingtext text-center">All in one card.</h2>
        <p
          class="text-lg text-dark font-medium md:text-xl text-center tab:max-w-[500px] my-5"
        >
          Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
          duis ut diam.
        </p>
        <div
          class="flex flex-col mt-4 md:flex-row items-center justify-center w-full gap-5"
        >
          <RouterLink to="/" class="w-full md:w-fit">
            <button
              type="button"
              class="btn bg-primary text-white !w-full md:!w-fit !px-8"
            >
              Open Account
            </button>
          </RouterLink>
          <RouterLink to="/" class="group">
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
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
