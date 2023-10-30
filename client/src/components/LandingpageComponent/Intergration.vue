<template>
  <section class="w-full bg-white">
    <div class="container">
      <div class="w-full flex flex-col items-start justify-start gap-8 py-16">
        <div
          class="w-full flex flex-wrap gap-x-6 gap-y-3 items-center justify-center md:items-start md:justify-start tab:max-w-[50%]"
        >
          <img
            :src="clientImage"
            alt="client_photo"
            class="w-[86px] aspect-video object-contain"
            v-for="clientImage in clientsImages"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { clientsImages } from "../../utils/constant";
</script>
