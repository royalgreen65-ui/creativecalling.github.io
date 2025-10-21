// uno.config.js
import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      'bg': '#2f2f2f',
      'text': '#e6e6e6',
      'muted': '#b0b0b0',
      'accent': '#8aa7a1',
      'accent-dark': '#7a9791',
      'border': '#404040'
    }
  },
  shortcuts: {
    // Layout shortcuts
    'container': 'max-w-[900px] mx-auto px-4',
    'section': 'py-8 border-b border-border',
    'grid': 'grid grid-cols-1 md:grid-cols-2 gap-6',
    
    // Typography shortcuts
    'h1': 'text-4xl font-serif mb-4 text-text',
    'h2': 'text-2xl font-serif mb-4 text-text',
    'text-body': 'text-lg leading-relaxed text-text',
    'text-small': 'text-sm text-muted',
    
    // Interactive elements
    'btn': 'bg-accent text-white rounded-full px-6 py-2 font-semibold shadow hover:bg-accent-dark transition-transform hover:translate-y-[-2px]',
    'btn-outline': 'bg-transparent border border-accent text-accent rounded-full px-6 py-2 font-semibold hover:bg-accent/10 transition-colors',
    'input': 'w-full bg-bg border border-border rounded-lg px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent',
    'link': 'text-accent hover:underline',
    
    // Card and container styles
    'card': 'bg-bg/50 border border-border rounded-lg p-6 hover:border-accent/50 transition-colors',
    'form-group': 'space-y-2 mb-4'
  }
})