<template>
  <main>
    <section class="w-full">
      <div class="container">
        <div class="w-full flex flex-col items-center justify-center gap-6">
          <h2>{{}}</h2>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { blogData } from "../utils/constant";
const blogDetail = blogData.find((item) => item.blogid === $route.params.blogId);

console.log(blogDetail);
</script>
