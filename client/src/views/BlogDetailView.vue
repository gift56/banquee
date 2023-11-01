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
            class="flex flex-col items-start justify-start w-full tab:max-w-[600px] tab:w-[600px] gap-5"
          >
            <h4 class="text-lg md:text-2xl font-medium text-dark">
              Et malesuada fames ac turpis
            </h4>
            <p class="text-base md:text-lg font-medium text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              blandit cursus risus at ultrices mi tempus imperdiet nulla. Odio
              morbi quis commodo odio. Et malesuada fames ac turpis egestas sed
              tempus urna. Mi in nulla posuere sollicitudin aliquam ultrices
              sagittis orci a. Fringilla ut morbi tincidunt augue interdum.
              Ultrices in iaculis nunc sed augue lacus viverra. Erat imperdiet
              sed euismod nisi porta. Morbi blandit cursus risus at ultrices mi
              tempus imperdiet nulla. Cras sed felis eget velit aliquet
              sagittis. Amet commodo nulla facilisi nullam vehicula ipsum a arcu
              cursus. Ullamcorper dignissim cras tincidunt lobortis feugiat
              vivamus at augue. Blandit aliquam etiam erat velit scelerisque in
              dictum. In hac habitasse platea dictumst vestibulum rhoncus.
              Molestie ac feugiat sed lectus vestibulum.
            </p>
          </div>
          <div class="w-full flex items-center justify-center">
            <div class="flex flex-col gap-2">
                <h5 class="">Share article</h5>
            </div>
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
