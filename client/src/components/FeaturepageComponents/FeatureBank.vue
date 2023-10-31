<template>
  <section class="w-full">
    <div class="container">
      <div class="w-full flex flex-col items-center justify-center gap-6 py-16">
        <div class="flex flex-col gap-4">
          <h2 class="headingtext2 text-center">All in one bank. Really.</h2>
          <p
            class="text-base font-medium text-dark md:text-xl tab:max-w-[500px] text-center"
          >
            Senectus et netus et malesuada fames ac turpis. Sagittis vitae et
            leo duis ut diam.
          </p>
        </div>
        <div
          class="w-full flex flex-col items-center justify-between tab:flex-row gap-6"
        >
          <div
            class="w-full tab:flex-1 flex flex-col items-center justify-start gap-5 h-[370px] overflow-hidden rounded-[20px] bg-navhover pt-10 px-4 relative"
          >
            <h3
              class="text-2xl text-center md:text-3xl tab:text-4xl font-dm font-medium text-dark"
            >
              Statistics
            </h3>
            <p
              class="text-base font-medium text-dark/50 text-center md:text-lg tab:max-w-[80%]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <img
              src="../../assets/images/phoneControl.svg"
              alt="phone"
              class="w-[330px] max-w-full absolute top-[53%]"
            />
          </div>
          <div
            class="w-full tab:flex-1 flex flex-col items-center justify-start gap-5 h-[370px] overflow-hidden rounded-[20px] bg-navhover pt-10 relative"
          >
            <h3
              class="text-2xl text-center md:text-3xl tab:text-4xl font-dm font-medium text-dark"
            >
              Cards
            </h3>
            <p
              class="text-base font-medium text-dark/50 text-center md:text-lg tab:max-w-[80%]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <div class="w-full flex items-end justify-between gap-5">
              <img
                src="@/assets/images/featureHeroCard3.svg"
                alt="herocard"
                class="rounded-tr-3xl rounded-tl-3xl hidden tab:inline-block tab:w-[35%] -translate-x-5 lg:-translate-y-5"
              />
              <img
                src="@/assets/images/featureHeroCard1.svg"
                alt="herocard"
                class="rounded-tr-3xl rounded-tl-3xl mx-auto w-[80%] tab:w-[40%] -translate-x-5"
              />
              <img
                src="@/assets/images/featureHeroCard2.svg"
                alt="herocard"
                class="rounded-tr-3xl rounded-tl-3xl hidden tab:inline-block tab:w-[45%] -translate-x-5 lg:-translate-y-5"
              />
            </div>
          </div>
        </div>
        <div
          class="w-full flex flex-col items-center justify-between tab:flex-row gap-6"
        >
          <div
            class="w-full flex flex-col items-start justify-between gap-5 h-[570px] overflow-hidden rounded-[20px] bg-navhover pt-10 px-4 relative"
          >
            <div
              class="w-full flex flex-col items-start justify-start gap-5 h-[570px] overflow-hidden rounded-[20px] bg-navhover pt-8 px-4 relative"
            >
              <h3
                class="text-2xl md:text-3xl tab:text-4xl font-dm font-medium text-dark"
              >
                Easy
                <br class="hidden tab:block" />
                integration
              </h3>
              <p class="text-base font-medium text-dark/50 md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div
              class="w-full grid grid-cols-4 gap-x-6 gap-y-3 items-center justify-center md:items-start md:justify-start"
            >
              <div v-for="clientImage in clientsImages" class="bg-white py-2">
                <img :src="clientImage" alt="client_photo" class="w-full" />
              </div>
            </div>
          </div>
          <div
            class="w-full flex flex-col items-start justify-start gap-5 h-[570px] overflow-hidden rounded-[20px] bg-navhover pt-10 px-4 relative"
          >
            <div
              class="w-full flex flex-col items-start justify-start gap-5 h-[570px] overflow-hidden rounded-[20px] bg-navhover pt-8 px-4 relative"
            >
              <h3
                class="text-2xl md:text-3xl tab:text-4xl font-dm font-medium text-dark"
              >
                Saving <br class="hidden tab:block" />
                accounts
              </h3>
              <p class="text-base font-medium text-dark/50 md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div
            class="w-full flex flex-col items-center justify-start gap-5 h-[570px] overflow-hidden rounded-[20px] bg-navhover pt-10 px-4 relative"
          >
            <div
              class="w-full flex flex-col items-start justify-start gap-5 h-[570px] overflow-hidden rounded-[20px] bg-navhover pt-8 px-4 relative"
            >
              <h3
                class="text-2xl md:text-3xl tab:text-4xl font-dm font-medium text-dark"
              >
                Instant <br class="hidden tab:block" />
                transactions
              </h3>
              <p class="text-base font-medium text-dark/50 md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { clientsImages } from "../../utils/constant";
</script>
