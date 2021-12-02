import { defineStore } from 'pinia'

export const useCountryStore = defineStore('country', () => {
    const country = ref<string>('Chile')

    return {
        country,
    }
})
