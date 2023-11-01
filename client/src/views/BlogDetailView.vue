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
            <div class="flex flex-col gap-2 items-center justify-center">
              <h5 class="text-base md:text-lg font-medium text-dark font-dm">
                Share article
              </h5>
              <div class="flex items-center justify-center gap-5">
                <div
                  v-for="icon in socialIcons"
                  :key="icon.icon"
                  class="w-12 h-12 rounded-full bg-navhover flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <i :class="icon.icon" class="text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full bg-white">
      <div class="container">
        <div class="w-full flex flex-col items-start justify-start gap-8 py-16">
          <div class="w-full flex items-center justify-between gap-6">
            <h3 class="headingtext2">Related Articles</h3>
            <RouterLink to="/blog" class="group">
              <div class="text-primary flex items-center gap-2">
                All Articles
                <img
                  src="@/assets/icons/right_arrowIcon.svg"
                  alt="arrow"
                  class="group-hover:translate-x-3 transition-all duration-300"
                />
              </div>
            </RouterLink>
          </div>
          <div class="w-full grid sm:grid-cols-2 tab:grid-cols-3 gap-4">
            <div
              v-for="blog in blogData.slice(0, 3)"
              :key="blog.blogHeadline"
              class="w-full flex flex-col items-start justify-start gap-4"
            >
              <img
                :src="blog.blogImage"
                :alt="blog.blogHeadline"
                class="w-full aspect-square rounded-2xl"
              />
              <div class="flex flex-col items-start justify-start gap-3 w-full">
                <h3 class="text-lg font-medium font-dm text-dark md:text-2xl">
                  {{ blog.blogHeadline }}
                </h3>
                <p class="text-sm font-medium text-dark md:text-base">
                  {{ blog.detail }}
                </p>
                <div
                  class="w-full flex flex-wrap gap-5 items-start justify-start"
                >
                  <span
                    class="w-fit py-1 px-2 rounded text-sm font-medium text-dark select-none bg-bordergray"
                    v-for="item in blog.cat"
                    :key="item"
                    >{{ item }}</span
                  >
                </div>
              </div>
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
      socialIcons: [
        {
          icon: "fa-brands fa-twitter",
        },
        {
          icon: "fa-brands fa-linkedin",
        },
        {
          icon: "fa-brands fa-facebook",
        },
        {
          icon: "fa-brands fa-instagram",
        },
      ],
    };
  },
};
</script>
