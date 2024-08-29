import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/common/**/*.{js,ts,jsx,tsx,mdx}',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            borderRadius: {
                xl: '1.5rem',
            },
        },
    },
    plugins: [],
}
export default config
