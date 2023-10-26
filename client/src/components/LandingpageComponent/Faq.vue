<template>
  <section class="w-full bg-white">
    <div class="container">
      <div class="sectionCon !items-start">
        <div
          class="w-full tab:flex-1 flex flex-col items-start justify-start gap-4"
        >
          <h2 class="headingtext2">Need help?</h2>
          <div class="flex flex-col items-start justify-start gap-3">
            <div class="flex items-center justify-start gap-3">
              <img src="@/assets/icons/contactPhoneIcon.svg" alt="contact" />
              <div class="flex flex-col items-start justify-start">
                <h5 class="text-base font-medium text-dark md:text-lg font-dm">
                  +49 176 123 456
                </h5>
                <h6 class="text-sm font-medium text-dark/50">
                  Support Hotline
                </h6>
              </div>
            </div>
            <div class="flex items-center justify-start gap-3">
              <img src="@/assets/icons/contactMailIcon.svg" alt="contact" />
              <div class="flex flex-col items-start justify-start">
                <h5 class="text-base font-medium text-dark md:text-lg font-dm">
                  help@banquee.com
                </h5>
                <h6 class="text-sm font-medium text-dark/50">Support Email</h6>
              </div>
            </div>
          </div>
          <RouterLink to="/" class="group">
            <div class="text-primary flex items-center gap-2">
              Support
              <img
                src="@/assets/icons/right_arrowIcon.svg"
                alt="arrow"
                class="group-hover:translate-x-3 transition-all duration-300"
              />
            </div>
          </RouterLink>
        </div>
        <div class="w-full tab:flex-1 flex flex-col items-start justify-start">
          <div
            v-for="(faq, index) in faqList"
            :key="faq.id"
            class="w-full flex flex-col items-start justify-start py-4 border-b border-bordergray transition-all duration-300"
          >
            <div
              @click="toggleFaq(index)"
              class="w-full flex items-center justify-between gap-3 cursor-pointer select-none"
            >
              <h2 class="text-base font-medium text-dark md:text-xl font-dm">
                {{ faq.question }}
              </h2>
              <img
                src="@/assets/icons/plusIcon.svg"
                alt="plusIcon"
                :class="{ 'rotate-45 transition-all duration-300': faq.open }"
                class="transition-all duration-300"
              />
            </div>
            <div
              class="max-h-0 overflow-hidden transition-all duration-300"
              :class="{
                'max-h-[1000px] transition-all duration-300':
                  faq.open,
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
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { faqData } from "../../utils/constant";

const faqList = ref(faqData);

const toggleFaq = (index) => {
  faqList.value[index].open = !faqList.value[index].open;
};
</script>
