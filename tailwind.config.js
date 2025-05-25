// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                'brand-primary': '#2563eb', // A nice blue, adjust as needed
                'brand-primary-light': '#eff6ff', // A very light blue for backgrounds
                'brand-secondary': '#4b5563',  // A darker gray for text
                'brand-accent-red': '#ef4444',   // For tags or important accents
                'brand-text-main': '#1f2937',    // Main text color
                'brand-text-muted': '#6b7280',   // Muted text color
            },
        },
    },
    plugins: [],
}