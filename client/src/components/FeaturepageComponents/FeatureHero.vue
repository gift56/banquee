<template>
  <section
    class="w-full tab:overflow-hidden bg-featureBg flex items-center justify-center flex-col"
  >
    <div
      class="w-full h-full flex flex-col justify-between items-center py-16 gap-10 tab:pt-20 tab:pb-0"
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
      <div class="w-full hidden tab:flex items-end justify-between gap-6">
        <img
          src="@/assets/images/featureHeroCard2.svg"
          alt="herocard"
          class="rounded-tr-3xl rounded-tl-3xl"
        />
        <img
          src="@/assets/images/featureHeroCard3.svg"
          alt="herocard"
          class="tab:hidden lg:inline-block rounded-tr-3xl rounded-tl-3xl"
        />
        <img
          src="@/assets/images/featureHeroCard1.svg"
          alt="herocard"
          class="rounded-tr-3xl rounded-tl-3xl"
        />
        <img
          src="@/assets/images/featureHeroCard3.svg"
          alt="herocard"
          class="rounded-tr-3xl rounded-tl-3xl"
        />
        <img
          src="@/assets/images/featureHeroCard2.svg"
          alt="herocard"
          class="tab:hidden lg:inline-block rounded-tr-3xl rounded-tl-3xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
