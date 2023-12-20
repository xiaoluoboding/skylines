<template>
  <main class="skylines">
    <div class="z-2">
      <span class="hidden">
        <!--


        ▁▁▁▁▁▁▁▁▁▁▁▄▅▂█▂▁▁▁▅▁▆▁▁▁█▁▁▅▁▇▁▁▅▁▁▁▁▁▂▂▁▃▃▁▂█▆▇█▁▁▂▂▅▂▃▂▃▃▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
        █─▄▄▄▄█▄─▄█─▄─▄─█─█─█▄─██─▄█▄─▄─▀███─▄▄▄▄█▄─█─▄█▄─█─▄█▄─▄███▄─▄█▄─▀█▄─▄█▄─▄▄─█
        █─██▄─██─████─███─▄─██─██─███─▄─▀███▄▄▄▄─██─▄▀███▄─▄███─██▀██─███─█▄▀─███─▄█▀█
        ▀▄▄▄▄▄▀▄▄▄▀▀▄▄▄▀▀▄▀▄▀▀▄▄▄▄▀▀▄▄▄▄▀▀▀▀▄▄▄▄▄▀▄▄▀▄▄▀▀▄▄▄▀▀▄▄▄▄▄▀▄▄▄▀▄▄▄▀▀▄▄▀▄▄▄▄▄▀
              

        -->
      </span>
      <img
        class="pointer-events-none glow z-20"
        src="../assets/images/bg_glow.svg"
        alt=""
      />
      <img
        class="pointer-events-none illustration"
        src="../assets/images/grid_octocat.svg"
        alt=""
      />
    </div>
    <section
      class="relative z-10 flex items-center justify-center flex-col full-screen p-6 mx-0 md:p-12 lg:px-36 lg:mx-6 md:mx-auto"
    >
      <h1
        class="flex justify-between w-full text-white text-3xl z-10 font-semibold"
      >
        <div>
          <a
            class="link-gradient bg-gradient-to-r hover:from-pink-500 hover:to-blue-500"
            :href="repoLink"
            target="_blank"
            >@{{ username }}'s
          </a>
          <span
            class="mr-1 text-gradient bg-gradient-to-r from-pink-500 to-blue-500"
            >GitHub Skylines</span
          >
        </div>
        <a :href="repoLink" target="_blank">
          <carbon:logo-github />
        </a>
      </h1>
      <div
        class="grid grid-cols-1 gap-8 mt-16 w-full md:grid-cols-1 lg:grid-cols-3"
      >
        <div v-for="item in skylineList" :key="item.title">
          <div class="w-full mx-auto text-center">
            <h1 class="text-white text-2xl mb-4 lg:text-left">
              <a
                class="link-gradient bg-gradient-to-r hover:from-pink-500 hover:to-blue-500"
                :href="item.yearLink"
                target="_blank"
                >{{ item.year }}
              </a>
            </h1>
            <!-- <div class="w-32 h-32"></div> -->
            <iframe
              height="480"
              class="inline-block w-full md:w-3/4 lg:w-full h-64 md:h-96 lg:h-96 rounded-2xl"
              frameborder="0"
              :src="item.src"
              :title="item.title"
            >
            </iframe>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const BASE_EMBED_URL =
  'https://viewscreen.githubusercontent.com/view/solid?color_mode=dark&url=https%3a%2f%2fraw.githubusercontent.com'
const BASE_SKYLINE_URL = 'https://skyline.github.com'

const username = ref('xiaoluoboding')
const repo = ref('skylines')
const gitRef = ref('main')
const repoLink = computed(
  () => `https://github.com/${username.value}/${repo.value}`
)

const skylineList = computed(() => {
  return Array(9)
    .fill(0)
    .map((v, i) => {
      const year = new Date().getFullYear() - i
      const title = `${username.value}-${year}.stl`

      return {
        title,
        year,
        yearLink: `${BASE_SKYLINE_URL}/${username.value}/${year}`,
        src: `${BASE_EMBED_URL}/${username.value}/${repo.value}/${gitRef.value}/${title}`
      }
    })
})
</script>

<style scoped>
.glow {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 200%;
  max-width: none;
  height: auto;
  transform: translate(-50%, -50%);
}
.illustration {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 0;
  width: 100%;
  height: auto;
  margin: 0 auto;
  transform: translate(-50%, -50%);
}

.text-gradient {
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
}

.link-gradient:hover {
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
}
</style>
