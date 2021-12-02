import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import eslintPlugin from 'vite-plugin-eslint'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    plugins: [
        Vue(),

        // https://github.com/hannoeru/vite-plugin-pages
        Pages({
            extensions: ['vue', 'md'],
        }),

        // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
        Layouts(),

        eslintPlugin(),

        AutoImport({
            imports: ['vue', 'vue-router', 'vue-i18n'],
            dts: 'src/auto-imports.d.ts',
        }),

        Components({
            extensions: ['vue'],
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            dts: 'src/components.d.ts',
        }),

        // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
        VueI18n({
            runtimeOnly: true,
            compositionOnly: true,
            include: [path.resolve(__dirname, 'locales/**')],
        }),
    ],

    server: {
        fs: {
            strict: true,
        },
    },

    optimizeDeps: {
        include: ['vue', 'vue-router'],
        exclude: ['vue-demi'],
    },
})
