<template>
  <main>
    <section class="w-full bg-featureBg">
      <div class="container">
        <div
          class="w-full flex flex-col tab:flex-row items-center justify-between gap-6 pt-10"
        >
          <div
            class="w-full tab:flex-1 flex flex-col items-start justify-start gap-6"
          >
            <h6 class="text-base font-medium text-dark md:text-xl font-dm">
              Compare Cards
            </h6>
            <h2 class="headingtext">
              The ideal <br class="hidden lg:block" />
              card for you
            </h2>
          </div>
          <div class="w-full tab:flex-1">
            <img src="../assets/images/ideaHero.svg" alt="heroImage" />
          </div>
        </div>
      </div>
    </section>
    <section class="w-full">
      <div class="container">
        <div
          class="w-full flex items-start justify-center tab:justify-end py-16"
        >
          <div
            class="w-[80%] grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-start"
          >
            <div
              v-for="cardItem in featurePricingData"
              :key="cardItem.price"
              class="w-full flex flex-col items-center justify-center gap-6"
            >
              <div class="flex items-center justify-center gap-2">
                <h4 class="text-base font-medium text-dark md:text-xl font-dm">
                  {{ cardItem.headline }}
                </h4>
                <span
                  class="w-fit px-2 py-1 text-primary bg-featureBg rounded text-xs font-medium text-center"
                  v-if="cardItem.price === 'Free'"
                  >Popular</span
                >
              </div>
              <div class="flex items-end justify-center gap-2">
                <h3
                  class="text-2xl text-dark text-center sm:text-3xl tab:text-4xl font-bold"
                >
                  {{ cardItem.price }}
                </h3>
                <span
                  class="text-sm font-medium text-dark/50 md:text-base"
                  v-if="cardItem.price !== 'Free'"
                  >per month</span
                >
              </div>
              <p
                class="text-sm font-medium text-dark/50 md:text-base text-center tab:max-w-[220px]"
              >
                {{ cardItem.desc }}
              </p>
              <img :src="cardItem.cardImage" :alt="cardItem.desc" />
              <button
                type="button"
                class="btn font-dm bg-primary text-white !w-full cursor-pointer"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full">
      <div class="container">
        <div class="w-full flex flex-col items-start justify-start gap-10">
          <div
            v-for="(itemInfo, index) in compareData"
            :key="index"
            class="w-full flex flex-col items-start justify-start gap-3"
          >
            <div class="w-full border-b border-bordergray pb-2">
              <h3 class="text-base font-medium text-dark md:text-xl font-dm">
                {{ itemInfo.title }}
              </h3>
            </div>
            <ul class="w-full flex flex-col items-start">
              <li
                v-for="(item, index) in itemInfo.data"
                :key="index"
                class="border-b border-bordergray w-full py-4 grid grid-cols-2 tab:flex items-center tab:justify-between gap-5 select-none"
              >
                <div class="flex flex-col tab:flex-row tab:items-center justify-start gap-2 w-full">
                  <span
                    class="w-12 h-12 bg-featureBg flex items-center justify-center rounded-full text-primary"
                    ><i :class="item.firstContent.icon"></i
                  ></span>
                  <div class="flex flex-col items-start justify-start">
                    <h3
                      class="text-base font-medium text-dark md:text-lg font-dm"
                    >
                      {{ item.firstContent.heading }}
                    </h3>
                    <p class="text-sm font-medium text-dark/50">
                      {{ item.firstContent.desc }}
                    </p>
                  </div>
                </div>

                <div class="flex items-center justify-center w-[90%]">
                  <span
                    class="text-sm font-medium text-dark md:text-base"
                    v-if="item.isOptional !== 'check'"
                    >{{ item.isOptional }}</span
                  >
                  <img
                    src="../assets/icons/badgeIcon.svg"
                    alt="check"
                    class="w-6 h-6 object-contain"
                    v-if="item.isOptional === 'check'"
                  />
                </div>
                <div class="flex items-center tab:justify-center w-[90%]">
                  <span
                    class="text-sm font-medium text-dark md:text-base"
                    v-if="item.checkIcon !== 'check'"
                    >{{ item.checkIcon }}</span
                  >
                  <img
                    src="../assets/icons/badgeIcon.svg"
                    alt="check"
                    class="w-6 h-6 object-contain"
                    v-if="item.checkIcon === 'check'"
                  />
                </div>
                <div class="flex items-center justify-center w-[90%]">
                  <span
                    class="text-sm font-medium text-dark md:text-base"
                    v-if="item.checkIcon2 !== 'check'"
                    >{{ item.checkIcon2 }}</span
                  >
                  <img
                    src="../assets/icons/badgeIcon.svg"
                    alt="check"
                    class="w-6 h-6 object-contain"
                    v-if="item.checkIcon2 === 'check'"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { compareData, featurePricingData } from "../utils/constant";
</script>
