<template>
  <section class="w-full bg-white">
    <div class="container">
      <div class="w-full flex flex-col items-start justify-start gap-8 py-16">
        <div
          class="w-full flex flex-wrap gap-x-6 gap-y-3 items-center justify-center md:items-start md:justify-start tab:max-w-[50%]"
        >
          <img
            :src="clientImage"
            alt="client_photo"
            class="w-[86px] aspect-video object-contain"
            v-for="clientImage in clientsImages"
          />
        </div>
        <div
          class="w-full flex flex-col tab:flex-row items-end justify-between gap-6"
        >
          <div class="w-full flex flex-col items-start justify-start gap-6">
            <h6 class="text-base font-medium text-dark md:text-xl font-dm">
              Tools
            </h6>
            <h2 class="headingtext2">
              Seemless <br class="hidden lg:block" />
              integration
            </h2>
            <p
              class="text-base font-medium text-dark md:text-xl tab:max-w-[500px]"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div class="w-full flex flex-col items-center justify-start gap-6">
            <div
              v-for="feature in integrationFeature"
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { clientsImages, integrationFeature } from "../../utils/constant";
</script>
