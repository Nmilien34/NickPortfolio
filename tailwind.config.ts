import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-white': '#ededed',
        'background-color': '#131313',
        'stroke-border': '#292929',
        'hover-state': '#414141',
        'normal-text': '#b3b3b3',
        'highlight-dark': '#292929',
        'white-smoke': '#e7e7e7',
      },
    },
  },
  plugins: [],
};

export default config;
