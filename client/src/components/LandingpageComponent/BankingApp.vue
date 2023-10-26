<template>
  <section class="w-full bg-white py-16">
    <div class="container">
      <div
        class="w-full bg-primary text-white flex flex-col tab:flex-row items-start gap-8 justify-between px-4 tab:px-10 rounded-[20px] tab:h-[] overflow-hidden"
      >
        <div
          class="w-full tab:flex-1 flex flex-col items-start justify-start gap-4 py-20"
        >
          <h1 class="headingtext2 !text-white">
            One app.
            <br class="hidden tab:block" />
            One banking.
          </h1>
          <p class="text-base font-medium md:text-lg">
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
              <span class="text-sm md:text-base font-medium tab:text-lg">{{
                feature
              }}</span>
            </div>
          </div>
          <div
            class="flex mt-4 flex-row items-center justify-start w-full gap-5"
          >
            <RouterLink to="/">
              <img src="../../assets/images/appleBtn.svg" alt="apple" />
            </RouterLink>
            <RouterLink to="/"
              ><img src="../../assets/images/googleBtn.svg" alt="googlePlay" />
            </RouterLink>
          </div>
        </div>
        <div class="w-full tab:flex-1 flex items-center justify-center relative">
          <div></div>
          <img
            src="@/assets/images/phone.svg"
            alt="phone"
            class="w-[330px] max-w-full absolute top-[90px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { heroFeatures } from "../../utils/constant";
</script>
