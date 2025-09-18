// import plugin from 'tailwindcss/plugin'

// const primaryColors = {
//   25: '#eff6ff',
//   50: '#dbeafe',
//   100: '#bfdbfe',
//   200: '#93c5fd',
//   300: '#60a5fa',
//   400: '#3b82f6',
//   500: '#2563eb',
//   600: '#1d4ed8',
//   700: '#1e40af',
//   800: '#1e3a8a',
//   900: '#1e3a8a',
// }
// const purpleColors = {
//   500: '#8049ff',
//   600: '#6b3de6',
//   700: '#5a32cc',
//   800: '#4a28b3',
//   900: '#3b1f99',
// }

// function generateUtilities(prefix: string, colors: Record<string, string>, property: string) {
//   const utils: Record<string, Record<string, string>> = {}
//   for (const [key, value] of Object.entries(colors)) {
//     utils[`.${prefix}-${key}`] = { [property]: value }
//   }
//   return utils
// }

export default {
  // plugins: [
  //   plugin(function ({ addUtilities }) {
  //     addUtilities({
  //       ...generateUtilities('bg-primary', primaryColors, 'backgroundColor'),
  //       ...generateUtilities('border-primary', primaryColors, 'borderColor'),
  //       ...generateUtilities('text-primary', primaryColors, 'color'),
  //       ...generateUtilities('bg-purple', purpleColors, 'backgroundColor'),
  //       ...generateUtilities('border-purple', purpleColors, 'borderColor'),
  //       ...generateUtilities('text-purple', purpleColors, 'color'),
  //     })
  //   }),
  // ],
}
