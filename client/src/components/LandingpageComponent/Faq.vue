<template>
  <section class="w-full bg-white">
    <div class="container">
      <div class="sectionCon">
        <div
          class="w-full tab:flex-1 flex flex-col items-start justify-start gap-4"
        >
          <h2 class="headingtext2">Need help?</h2>
          <div class="flex flex-col items-start justify-start gap-3">
            <div class="flex items-center justify-start gap-3">
              <img src="@/assets/icons/contactPhoneIcon.svg" alt="contact" />
              <div class="flex flex-col items-start justify-start">
                <h5 class="text-base font-medium text-dark md:text-lg font-dm">
                  +49 176 123 456
                </h5>
                <h6 class="text-sm font-medium text-dark/50">
                  Support Hotline
                </h6>
              </div>
            </div>
            <div class="flex items-center justify-start gap-3">
              <img src="@/assets/icons/contactMailIcon.svg" alt="contact" />
              <div class="flex flex-col items-start justify-start">
                <h5 class="text-base font-medium text-dark md:text-lg font-dm">
                  help@banquee.com
                </h5>
                <h6 class="text-sm font-medium text-dark/50">Support Email</h6>
              </div>
            </div>
          </div>
          <RouterLink to="/" class="group">
            <div class="text-primary flex items-center gap-2">
              Support
              <img
                src="@/assets/icons/right_arrowIcon.svg"
                alt="arrow"
                class="group-hover:translate-x-3 transition-all duration-300"
              />
            </div>
          </RouterLink>
        </div>
        <div
          class="w-full tab:flex-1 flex flex-col items-start justify-start gap-4"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
