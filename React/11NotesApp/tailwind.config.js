module.exports = {
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}', 
    './src/pages/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      'small': '0.5px',
    },
    extend: {
      backgroundPosition: {
        'right-top-75': 'right top 75%',
      },
      backgroundImage: {
        'react-logo':
           'url(../public/logo.png)',
      },
      boxShadow: {
        small: '0px 2px 5px 2px rgba(190, 193, 202,0.5)',
        big: '0px 3px 20px 5px rgba(190, 193, 202,0.5)',
      },
      colors: {
        primary: '#61DAFB',
        secondary: '#1F374A',
        dark: '#4B4343',
        delete: '#B64F5E',
        'border-gray': '#F5F5F5',
        modalbackgroundgray: '#5f6065',
        'textfield-dark': '#4B4343'
      },
      spacing: {
        'toogle-padding': '1px',
        'toogle': '14px',
      }
    },
  },
  variants: {},
  plugins: [],
}
