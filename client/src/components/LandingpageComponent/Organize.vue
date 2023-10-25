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
          <RouterLink to="/">
            <button type="button" class="btn text-primary gap-4">
              All Features
              <img src="@/assets/icons/right_arrowIcon.svg" alt="arrow" />
            </button>
          </RouterLink>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
