module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        plate: 'rgb(var(--plate) / <alpha-value>)',
        'plate-border': 'rgb(var(--plate-border) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'midnight': '0 4px 20px -5px rgba(79, 70, 229, 0.15)',
        'midnight-lg': '0 10px 30px -5px rgba(79, 70, 229, 0.2)',
        'inner-accent': 'inset 0 0 0 2px rgb(var(--accent))',
      },
      borderRadius: {
        'xl': 'calc(var(--radius) * 1.5)',
        '2xl': 'calc(var(--radius) * 2)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}