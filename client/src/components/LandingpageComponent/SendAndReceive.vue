<template>
  <section class="bg-featureBg w-full overflow-hidden">
    <div class="container">
      <div class="sectionCon">
        <div class="flex-1 flex flex-col items-start justify-start gap-6">
          <h3 class="headingtext2">Send & receive money instantly</h3>
          <p class="text-base font-medium text-dark md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
          <div class="flex flex-col items-start justify-start gap-3">
            <div
              v-for="feature in receiveFeature"
              :key="feature"
              class="flex items-center justify-start gap-3 w-full"
            >
              <img src="@/assets/icons/checkIcon.svg" alt="checkIcon" />
              <span
                class="text-sm md:text-base font-medium text-dark tab:text-lg"
                >{{ feature }}</span
              >
            </div>
          </div>
        </div>
        <div class="flex-1 flex flex-col gap-5">

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { receiveFeature } from "../../utils/constant";
</script>
