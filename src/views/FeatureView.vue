<template>
  <main>
    <FeatureHero />
    <section class="w-full" v-for="data in PropData">
      <FeatureTransaction :data="data" />
    </section>
    <FeatureBank />
    <FeatureCard />
    <BankingApp />
  </main>
</template>

<script setup>
import FeatureBank from "../components/FeaturepageComponents/FeatureBank.vue";
import FeatureCard from "../components/FeaturepageComponents/FeatureCard.vue";
import FeatureHero from "../components/FeaturepageComponents/FeatureHero.vue";
import FeatureTransaction from "../components/FeaturepageComponents/FeatureTransaction.vue";
import BankingApp from "../components/LandingpageComponent/BankingApp.vue";
import { PropData } from "../utils/propdata";
</script>
