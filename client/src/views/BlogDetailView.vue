<template>
  <main>
    <section class="w-full">
      <div class="container">
        <div
          class="w-full flex flex-col items-center justify-center gap-6 py-16"
        >
          <h2 class="headingtext2 text-center tab:max-w-[70%]">
            {{ blogDetail.blogHeadline }}
          </h2>
          <p
            class="text-center text-lg md:text-xl font-medium tab:max-w-[600px] text-dark"
          >
            {{ blogDetail.detail }}
          </p>
          <img
            :src="blogDetail.blogImage"
            :alt="blogDetail.blogHeadline"
            class="tab:w-[68%] aspect-video rounded-2xl object-contain"
          />

          <div
            class="flex flex-col items-start justify-start w-full tab:max-w-[600px] tab:w-[600px]"
          >
            <h4  class="text-lg md:text-2xl font-medium text-dark">Et malesuada fames ac turpis</h4>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { blogData } from "../utils/constant";

export default {
  data() {
    return {
      blogDetail: blogData.find(
        (item) => item.blogid === this.$route.params.blogId
      ),
    };
  },
};
</script>
