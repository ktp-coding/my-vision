import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        panel: 'var(--panel)',
        'panel-2': 'var(--panel-2)',
        hairline: 'var(--hairline)',
        'hairline-soft': 'var(--hairline-soft)',
        text: 'var(--text)',
        'text-dim': 'var(--text-dim)',
        'text-dimmer': 'var(--text-dimmer)',
        'text-ghost': 'var(--text-ghost)',
        brass: 'var(--brass)',
        'brass-hi': 'var(--brass-hi)',
        market: 'var(--market)',
        alert: 'var(--alert)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'var(--font-serif)', 'Georgia', 'serif'],
        serif: ['var(--font-serif)', 'var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
