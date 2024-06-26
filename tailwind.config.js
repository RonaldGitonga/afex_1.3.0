/** @type {import('tailwindcss').Config} */
import { Montserrat } from 'next/font/google'
import {withUt} from 'uploadthing/tw'


export default withUt ({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'sans':[Montserrat]
    }
  },
  plugins: [],
})

