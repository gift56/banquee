<template>
  <main>
    <section class="w-full bg-featureBg">
      <div class="container">
        <div
          class="w-full flex flex-col tab:flex-row items-center justify-between gap-6 pt-16"
        >
          <div
            class="w-full tab:flex-1 flex flex-col items-start justify-start gap-6"
          >
            <h6 class="text-base font-medium text-dark md:text-xl font-dm">
              Support
            </h6>
            <h2 class="headingtext">
              How can <br class="hidden lg:block" />
              we help you?
            </h2>
          </div>
          <div class="w-full tab:flex-1 flex items-center justify-center">
            <img src="../assets/images/supportPhone.svg" alt="heroImage" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "SupportView",
};
</script>
