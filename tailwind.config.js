/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Security Professional Palette
        'security-blue': '#0F172A',
        'slate-gray': '#1E293B',
        'cyber-blue': '#0EA5E9',
        'threat-red': '#EF4444',
        'secure-green': '#10B981',
        'alert-orange': '#F59E0B',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'SF Mono', 'Monaco', 'monospace'],
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'code': ['Source Code Pro', 'Consolas', 'Monaco', 'monospace'],
      },
      backgroundImage: {
        'security-gradient': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        'accent-gradient': 'linear-gradient(45deg, #0EA5E9, #3B82F6)',
        'threat-scan': 'linear-gradient(45deg, transparent 30%, rgba(14, 165, 233, 0.1) 50%, transparent 70%)',
      },
      animation: {
        'security-scan': 'security-scan 3s ease-in-out infinite',
        'terminal-blink': 'terminal-blink 1.2s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
      },
      keyframes: {
        'security-scan': {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
        },
        'terminal-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}