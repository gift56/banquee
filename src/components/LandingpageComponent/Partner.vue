<template>
  <section class="w-full bg-white">
    <div class="container">
      <div class="w-full flex flex-col items-center justify-center gap-4 py-16">
        <h6 class="text-base font-medium text-dark md:text-xl font-dm">
          Account
        </h6>
        <h2 class="headingtext2 text-center">
          Perfect card <br class="hidden tab:block" />
          for your needs.
        </h2>
        <p
          class="text-base font-medium text-dark md:text-xl tab:max-w-[500px] text-center mb-10"
        >
          Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
          duis ut diam.
        </p>
        <div
          class="relative flex flex-col items-center justify-center pt-32 sm:pt-48"
        >
          <img
            src="@/assets/images/card1.svg"
            alt="card"
            class="relative z-30"
          />
          <img
            src="@/assets/images/card2.svg"
            alt="card"
            class="absolute top-[20%] z-10"
          />
          <img
            src="@/assets/images/card3.svg"
            alt="card"
            class="absolute top-[0%]"
          />
        </div>
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
          <RouterLink to="/compare" class="w-full md:w-fit">
            <button
              type="button"
              class="btn bg-white text-dark border border-bordergray !w-full md:!w-fit !px-8"
            >
              Compare Cards
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
