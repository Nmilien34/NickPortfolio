import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
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
