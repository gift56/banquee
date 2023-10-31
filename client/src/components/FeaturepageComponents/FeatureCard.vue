<template>
  <section class="w-full bg-white">
    <div class="container">
      <div class="w-full flex flex-col items-center justify-center gap-4 py-16">
        <h6 class="text-base font-medium text-dark md:text-xl font-dm">
          Account
        </h6>
        <h2 class="headingtext2 text-center">Choose your card.</h2>
        <p
          class="text-base font-medium text-dark md:text-xl tab:max-w-[500px] text-center mb-10"
        >
          Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
          duis ut diam.
        </p>
        <div
          class="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-start"
        >
          <div
            v-for="cardItem in featurePricingData"
            :key="cardItem.price"
            class="w-full flex flex-col items-center justify-center gap-6"
          >
            <div class="flex items-center justify-center gap-2">
              <h4 class="text-base font-medium text-dark md:text-xl font-dm">{{ cardItem.headline }}</h4>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { featurePricingData } from "../../utils/constant";
</script>
