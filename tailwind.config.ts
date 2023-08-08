/** @type {import('tailwindcss').Config} */
export default {
    content: [
        'components/**/*.{vue,js,ts}',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'composables/**/*.{js,ts}',
        'plugins/**/*.{js,ts}',
        'App.{js,ts,vue}',
        'app.{js,ts,vue}',
        'Error.{js,ts,vue}',
        'error.{js,ts,vue}',
        'content/**/*.md'
    ],
    theme: {
        extend: {
            colors: {
                default: {
                    50: 'hsl(216, 28%, 97%)',
                    100: 'hsl(216, 28%, 87%)',
                    200: 'hsl(216, 28%, 77%)',
                    300: 'hsl(216, 28%, 67%)',
                    400: 'hsl(216, 28%, 57%)',
                    500: 'hsl(216, 28%, 47%)',
                    600: 'hsl(216, 28%, 37%)',
                    700: 'hsl(216, 28%, 27%)',
                    800: 'hsl(216, 28%, 17%)',
                    900: 'hsl(216, 28%, 7%)', // "#0d1117"
                    950: 'hsl(216, 28%, 4%)',
                },
            },
        },
    },
}