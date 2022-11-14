/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark-blue': '#141e30',
                'very-dark-blue': '#243b55'
              },
        },
    },
    plugins: [],
}
