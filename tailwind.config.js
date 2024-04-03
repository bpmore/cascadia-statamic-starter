/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {},
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
