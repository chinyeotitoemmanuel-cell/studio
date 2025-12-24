
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'Playfair Display', 'serif'],
        body: ['Noto Sans', 'Merriweather', 'serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
        news: ['Newsreader', 'serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Custom colors from HTML
        'background-light': '#f8f7f5',
        'background-dark': '#221c10',
        'surface-dark': '#2c2415',
        'surface-highlight': '#493c22',
        'text-secondary': '#cbb790',
        'text-muted': '#cbb790',
        'border-color': '#493c22',
        'surface-border': '#493c22',
        'background-surface': '#27272a',
        'shop-surface-dark': '#493c22',
        'surface-input': '#342b18',
        'border-input': '#685631',
        'border-dark': '#493c22',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      typography: (theme: (arg0: string) => any) => ({
        DEFAULT: {
            css: {
                color: theme('colors.gray.300'),
                fontFamily: theme('fontFamily.body'),
                h1: { fontFamily: theme('fontFamily.display') },
                h2: { fontFamily: theme('fontFamily.display') },
                h3: { fontFamily: theme('fontFamily.display') },
            },
        },
      }),
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;

    