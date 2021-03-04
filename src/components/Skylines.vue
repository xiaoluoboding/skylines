<template>
  <main>
    <div class="z-2">
      <span class="hidden">
        <!--


        ▁▁▁▁▁▁▁▁▁▁▁▄▅▂█▂▁▁▁▅▁▆▁▁▁█▁▁▅▁▇▁▁▅▁▁▁▁▁▂▂▁▃▃▁▂█▆▇█▁▁▂▂▅▂▃▂▃▃▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
        █─▄▄▄▄█▄─▄█─▄─▄─█─█─█▄─██─▄█▄─▄─▀███─▄▄▄▄█▄─█─▄█▄─█─▄█▄─▄███▄─▄█▄─▀█▄─▄█▄─▄▄─█
        █─██▄─██─████─███─▄─██─██─███─▄─▀███▄▄▄▄─██─▄▀███▄─▄███─██▀██─███─█▄▀─███─▄█▀█
        ▀▄▄▄▄▄▀▄▄▄▀▀▄▄▄▀▀▄▀▄▀▀▄▄▄▄▀▀▄▄▄▄▀▀▀▀▄▄▄▄▄▀▄▄▀▄▄▀▀▄▄▄▀▀▄▄▄▄▄▀▄▄▄▀▄▄▄▀▀▄▄▀▄▄▄▄▄▀
              

        -->
      </span>
      <img class="pointer-events-none illustration" src="../assets/images/grid_octocat.svg" alt="">
    </div>
    <section
      class="relative z-10 flex items-center justify-center flex-col full-screen p-6 mx-0 md:p-12 lg:px-36 lg:mx-6  md:mx-auto"
    >
      <h1 class="text-center w-full text-white text-3xl z-10 font-semibold">
        <a
          class="link-gradient bg-gradient-to-r hover:from-pink-500 hover:to-blue-500"
          href="https://github.com/xiaoluoboding/skyline"
          target="_blank"
        >@xiaoluoboding's </a> 
        <span class="mr-1 text-gradient bg-gradient-to-r from-pink-500 to-blue-500">GitHub Skylines</span></h1>
      <div class="grid grid-cols-1 gap-8 mt-16 w-full md:grid-cols-1 lg:grid-cols-2">
        <div 
          v-for="item in skylineList"
          :key="item.title"
        >
          <div class="w-full mx-auto text-center">
            <h1 class="text-white text-2xl mb-4 lg:text-left">
              <a
                class="link-gradient bg-gradient-to-r hover:from-pink-500 hover:to-blue-500"
                :href="item.yearLink"
                target="_blank"
              >{{ item.year }}
              </a>
            </h1>
            <iframe
              height='480'
              class="inline-block w-full md:w-3/4 lg:w-full h-64 md:h-96 lg:h-96"
              frameborder='0'
              :src='item.src'
              :title='item.title'>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'

const BASE_EMBED_URL = 'https://render.githubusercontent.com/view/3d?color_mode=dark&url=https://raw.githubusercontent.com'
const BASE_SKYLINE_URL = 'https://skyline.github.com/xiaoluoboding'

export default defineComponent({
  name: 'Skylines',
  setup () {
    const username = ref('xiaoluoboding')
    const repo = ref('skyline')
    const gitRef = ref('main')

    const skylineList = computed(() => {
      return Array(8).fill().map((v, i) => {
        const year = new Date().getFullYear() - 1 - i
        const title = `${username.value}-${year}.stl`

        return {
          title,
          year: year,
          yearLink: `${BASE_SKYLINE_URL}/${year}`,
          src: `${BASE_EMBED_URL}/${username.value}/${repo.value}/${gitRef.value}/${title}`
        }
      })
    })

    return {
      skylineList
    }
  }
})
</script>

<style scoped>
.illustration {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 0;
  width: 100%;
  height: auto;
  margin: 0 auto;
  transform: translate(-50%,-50%);
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