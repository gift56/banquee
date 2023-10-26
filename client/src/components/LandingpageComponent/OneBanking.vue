<template>
  <section class="w-full bg-white">
    <div class="container">
      <div class="sectionCon xl:items-start">
        <div
          class="flex-1 flex flex-col items-start justify-start gap-6 tab:gap-10"
        >
          <h2 class="headingtext">
            One app. <br class="hidden tab:block" />
            One banking.
          </h2>
          <div
            class="w-full grid grid-cols-1 md:grid-cols-2 items-start justify-start gap-6"
          >
            <div
              v-for="feature in bankingFeature"
              :key="feature.title"
              class="card"
            >
              <img :src="feature.iconSrc" :alt="feature.title" />
              <h2
                class="text-base font-medium text-dark font-dm md:text-lg tab:text-xl"
              >
                {{ feature.title }}
              </h2>
              <p class="text-sm font-medium text-dark md:text-base">
                {{ feature.detail }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex-1 flex items-center justify-center">
          <img
            src="../../assets/images/phone.svg"
            alt="phone"
            class="w-[330px] max-w-full"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { bankingFeature } from "../../utils/constant";
</script>
