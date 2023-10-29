<template>
  <main>
    <FeatureHero />
    <section class="w-full" v-for="data in PropData">
      <FeatureTransaction :data="data" />
    </section>
  </main>
</template>

<script setup>
import FeatureHero from "../components/FeaturepageComponents/FeatureHero.vue";
import FeatureTransaction from "../components/FeaturepageComponents/FeatureTransaction.vue";
import { PropData } from "../utils/propdata";
</script>
