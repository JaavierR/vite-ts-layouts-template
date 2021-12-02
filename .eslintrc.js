module.exports = {
    // https://dev.to/imomaliev/eslint-and-vue-457a
    root: true,
    env: {
        node: true,
    },
    parser: 'vue-eslint-parser',
    // https://github.com/vuejs/vue-eslint-parser#parseroptionsparser
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    plugins: ['@typescript-eslint'],
    extends: [
        '@antfu',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-essential',
        'prettier',
    ],
    globals: {
        defineProps: 'readonly',
    },
    rules: {
        'no-unused-vars':
            process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
}
