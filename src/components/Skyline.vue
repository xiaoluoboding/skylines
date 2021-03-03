<template>
  <main>
    <div class="z-2">
      <span class="hidden" data-v-2efe89c3="">
        <!--


        ▁▁▁▁▁▁▁▁▁▁▁▄▅▂█▂▁▁▁▅▁▆▁▁▁█▁▁▅▁▇▁▁▅▁▁▁▁▁▂▂▁▃▃▁▂█▆▇█▁▁▂▂▅▂▃▂▃▃▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
        █─▄▄▄▄█▄─▄█─▄─▄─█─█─█▄─██─▄█▄─▄─▀███─▄▄▄▄█▄─█─▄█▄─█─▄█▄─▄███▄─▄█▄─▀█▄─▄█▄─▄▄─█
        █─██▄─██─████─███─▄─██─██─███─▄─▀███▄▄▄▄─██─▄▀███▄─▄███─██▀██─███─█▄▀─███─▄█▀█
        ▀▄▄▄▄▄▀▄▄▄▀▀▄▄▄▀▀▄▀▄▀▀▄▄▄▄▀▀▄▄▄▄▀▀▀▀▄▄▄▄▄▀▄▄▀▄▄▀▀▄▄▄▀▀▄▄▄▄▄▀▄▄▄▀▄▄▄▀▀▄▄▀▄▄▄▄▄▀
              

        -->
      </span>
      <!-- <img class="pointer-events-none illustration" src="./assets/images/grid_octocat.svg" alt=""> -->
    </div>
    <section
      class="relative z-10 flex items-center justify-center flex-col p-12 mx-6 full-screen md:mx-auto"
    >
      <h1 class="text-center w-full text-white text-4xl z-10">@xiaoluoboding's GitHub Skyline</h1>
      <div class="grid grid-cols-2 gap-8 mt-16">
        <div 
          v-for="item in skylineList"
          :key="item.title"
        >
          <h1 class="text-white text-2xl mb-4">{{ item.year }}</h1>
          <iframe
            height='480'
            width='640'
            frameborder='0'
            :src='item.src'
            :title='item.title'>
          </iframe>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Skyline',
  setup () {
    const BASE_URL = 'https://render.githubusercontent.com/view/3d?color_mode=dark&url=https://raw.githubusercontent.com/'
    const username = ref('xiaoluoboding')
    const repo = ref('skyline')
    const gitRef = ref('main')

    const skylineList = computed(() => {
      return Array(8).fill().map((v, i) => {
        const year = new Date().getFullYear() - 1
        const title = `${username.value}-${year - i}.stl`

        return {
          title,
          year: year - i,
          src: `${BASE_URL}/${username.value}/${repo.value}/${gitRef.value}/${title}`
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
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 0;
  width: 100%;
  height: auto;
  margin: 0 auto;
  transform: translate(-50%,-50%);
}
</style>