/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'arabic': ['Cairo', 'IBM Plex Sans Arabic', 'sans-serif'],
            },
            colors: {
                'tech-dark': '#0a0e17',
                'tech-navy': '#0f172a',
            }
        },
    },
    plugins: [],
}
