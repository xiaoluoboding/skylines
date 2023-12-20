import { fileURLToPath, URL } from 'url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import I18n from '@intlify/vite-plugin-vue-i18n'

const r = (...args: string[]) => resolve(__dirname, ...args)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: [r('src/components')],
      // auto import icons
      resolvers: [
        IconsResolver({
          prefix: ''
        })
      ]
    }),

    // https://github.com/antfu/unplugin-icons
    Icons(),

    // https://unocss.dev/integrations/vite
    UnoCSS(),

    // https://vue-i18n.intlify.dev/installation.html
    I18n({
      include: [resolve(__dirname, 'src/locales/**')]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
