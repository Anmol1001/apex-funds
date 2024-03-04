import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'xsm':'320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        '108': '28rem',
        '128': '32rem',
        '140': '36rem',
        '152': '40rem'
      },
      colors: {
        'eastern-blue': {
          '50': '#edfdfe',
          '100': '#d1f8fc',
          '200': '#a9eff8',
          '300': '#6de2f3',
          '400': '#2bcae5',
          '500': '#0ea2bd',
          '600': '#0f8bab',
          '700': '#14708a',
          '800': '#195b71',
          '900': '#194b60',
          '950': '#0b3241',
      },
      'gray': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#808080',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#262626',
    },
      },
      maxHeight:{
        '110': '30rem',
        '120': '35rem',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
