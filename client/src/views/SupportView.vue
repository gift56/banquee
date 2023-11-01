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
    <section class="w-full mt-5 select-none py-14">
      <div class="container">
        <div
          class="w-full grid md:grid-cols-2 xl:grid-cols-4 items-start justify-start gap-9 bg-primary text-white py-10 px-5 rounded-lg"
        >
          <div class="flex flex-col items-start justify-start">
            <h3 class="text-lg font-medium md:text-2xl truncate">
              Still have questions?
            </h3>
            <p class="text-base font-medium opacity-70">We are here to help.</p>
          </div>
          <div class="flex items-center xl:justify-end gap-2">
            <span
              class="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center"
              ><i class="fa-solid fa-phone"></i
            ></span>
            <div class="flex flex-col items-start justify-start">
              <h4 class="text-base font-medium md:text-lg font-dm">
                +49 176 123 456
              </h4>
              <p class="text-sm font-medium opacity-70">Support Hotline</p>
            </div>
          </div>
          <div class="flex items-center xl:justify-end gap-2">
            <span
              class="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center"
              ><i class="fa-regular fa-envelope"></i
            ></span>
            <div class="flex flex-col items-start justify-start">
              <h4 class="text-base font-medium md:text-lg font-dm">
                help@bank.com
              </h4>
              <p class="text-sm font-medium opacity-70">Support Email</p>
            </div>
          </div>
          <div class="flex items-end justify-end">
            <button class="btn text-white bg-dark font-dm">Chat with us</button>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full">
      <div class="container">
        <div class="sectionCon !items-start">
          <div class="w-full tab:flex-[0.6]">
            <div
              class="w-full flex flex-col items-start justify-start gap-6 p-6 bg-navhover rounded-lg"
            >
              <h4 class="text-base font-medium text-dark md:text-lg font-dm">
                Categories
              </h4>
              <nav class="flex flex-col items-start justify-start gap-6 w-full">
                <RouterLink
                  to="#card"
                  class="w-full text-base font-medium text-dark/50 hover:underline"
                  >Cards</RouterLink
                >
                <RouterLink
                  to="#account"
                  class="w-full text-base font-medium text-dark/50 hover:underline"
                  >Account</RouterLink
                >
                <RouterLink
                  to="#detail"
                  class="w-full text-base font-medium text-dark/50 hover:underline"
                  >Personal Details</RouterLink
                >
              </nav>
            </div>
          </div>
          <div
            class="w-full tab:flex-[2] flex flex-col items-start justify-start gap-10"
          >
            <div
              v-for="supportItem in supportData"
              :key="supportItem.id"
              :id="supportItem.id"
              class="w-full tab:w-[80%] ml-auto flex flex-col items-start justify-start gap-5"
            >
              <div class="flex items-center justify-start gap-5">
                <span
                  class="w-12 h-12 rounded-full flex items-center justify-center bg-featureBg text-primary"
                >
                  <i :class="supportItem.headingContent.icon"></i>
                </span>
                <h3 class="text-xl font-medium text-dark md:text-2xl font-dm">
                  {{ supportItem.headingContent.title }}
                </h3>
              </div>
              <div
                v-for="(faq, index) in supportItem.faqData"
                :key="faq.id"
                class="w-full flex flex-col items-start justify-start py-4 border-b border-bordergray transition-all duration-300"
              >
                <div
                  @click="toggleFaq(index)"
                  class="w-full flex items-center justify-between gap-3 cursor-pointer select-none"
                >
                  <h2
                    class="text-base font-medium text-dark md:text-xl font-dm"
                  >
                    {{ faq.question }}
                  </h2>
                  <img
                    src="@/assets/icons/plusIcon.svg"
                    alt="plusIcon"
                    :class="{
                      'rotate-45 transition-all duration-300': faq.open,
                    }"
                    class="transition-all duration-300"
                  />
                </div>
                <div
                  class="max-h-0 overflow-hidden transition-all duration-300"
                  :class="{
                    'max-h-[1000px] transition-all duration-300': faq.open,
                  }"
                >
                  <p class="mt-4 text-sm md:text-base text-dark/50">
                    {{ faq.answer }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { supportData } from "../utils/constant";

const toggleFaq = (faqList, index) => {
  for (let i = 0; i < faqList.value.length; i++) {
    if (i !== index) {
      faqList.value[i].open = false;
    }
  }

  faqList.value[index].open = !faqList.value[index].open;
};
</script>
