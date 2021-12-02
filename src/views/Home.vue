<script setup lang="ts">
import { useCountryStore } from '@/stores/country'

const country = useCountryStore()
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
    const locales = availableLocales
    locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
    <div class="p-4 text-lg">
        <div class="font-bold">
            {{ t('button.home') }}
        </div>
        <div>{{ country.country }}</div>
        <HelloWorld />
        <a
            class="px-2 text-red-500 bg-red-100 rounded-md cursor-pointer"
            :title="t('button.toggle_langs')"
            @click.prevent="toggleLocales"
        >
            {{ t('button.toggle_langs') }}
        </a>
    </div>
</template>
