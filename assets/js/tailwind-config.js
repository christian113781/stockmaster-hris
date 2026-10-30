/* Shared Tailwind config (loaded after the Tailwind CDN script) */
tailwind.config = {
  theme: {
    extend: {
      fontFamily: { poppins: ['Poppins', 'sans-serif'] },
      /* Type scale tuned for Poppins (it runs large, so each step is ~1px smaller than Tailwind's default) */
      fontSize: {
        xs:   ['0.78125rem', { lineHeight: '1.125rem' }],  /* 12.5px labels, captions  */
        sm:   ['0.84375rem',{ lineHeight: '1.25rem'  }],  /* 13.5px body, inputs, nav */
        base: ['0.96875rem',{ lineHeight: '1.5rem'   }],  /* 15.5px card titles       */
        lg:   ['1.09375rem',{ lineHeight: '1.5rem'   }],  /* 17.5px modal titles      */
        xl:   ['1.25rem',   { lineHeight: '1.75rem'  }],  /* 20px  page title (mobile)*/
        '2xl':['1.4375rem', { lineHeight: '1.75rem'  }],  /* 23px  page title         */
        '3xl':['1.6875rem', { lineHeight: '2rem'     }],  /* 27px                     */
      },
      colors: {
        brand: {
          50:  '#E8F3FF', 100: '#D3E8FF', 200: '#A9D2FF', 300: '#6DB3FA',
          400: '#19B5FE', 500: '#3A8FEF', 600: '#1473E6', 700: '#0F5CBA',
          800: '#0B4690', 900: '#0B2D5C',
        },
      },
      boxShadow: {
        card: '0 1px 4px 0 rgba(20,115,230,.08), 0 4px 16px 0 rgba(20,115,230,.06)',
      },
    },
  },
};
