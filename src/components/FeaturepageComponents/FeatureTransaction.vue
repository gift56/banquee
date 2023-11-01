<template>
  <div class="w-full bg-white">
    <div class="container">
      <div class="sectionCon">
        <div
          class="w-full tab:flex-1 flex flex-col items-start justify-start gap-5"
        >
          <h4 class="text-base font-medium font-dm text-dark md:text-xl">
            {{ props.data.headline }}
          </h4>
          <h2 class="headingtext2">{{ props.data.pageTitle }}</h2>
          <p class="text-sm font-medium text-dark md:text-base">
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
        </div>
        <div class="w-full tab:flex-1 flex items-center justify-center">
          <img
            :src="props.data.pageImage"
            alt="phone"
            class="w-[330px] max-w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
import { receiveFeature } from "../../utils/constant";
</script>
