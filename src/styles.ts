// src\styles.ts

import { definePreset } from '@primeng/themes';
import Lara from '@primeng/themes/lara';

export const MyPreset = definePreset(Lara, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          50: '{purple.50}',
          100: '{purple.100}',
          200: '{purple.200}',
          300: '{purple.300}',
          400: '{purple.400}',
          500: '{purple.500}',
          600: '{purple.600}',
          700: '{purple.700}',
          800: '{purple.800}',
          900: '{purple.900}',
          950: '{purple.950}',
        },
        surface: {
          50: '{viva.50}',
          100: '{viva.100}',
          200: '{viva.200}',
          300: '{viva.300}',
          400: '{viva.400}',
          500: '{viva.500}',
          600: '{viva.600}',
          700: '{viva.700}',
          800: '{viva.800}',
          900: '{viva.900}',
          950: '{viva.950}',
        },
      },
      dark: {
        primary: {
          50: '{cyan.50}',
          100: '{cyan.100}',
          200: '{cyan.200}',
          300: '{cyan.300}',
          400: '{cyan.400}',
          500: '{cyan.500}',
          600: '{cyan.600}',
          700: '{cyan.700}',
          800: '{cyan.800}',
          900: '{cyan.900}',
          950: '{cyan.950}',
        },
        surface: {
          50: '{viva.50}',
          100: '{viva.100}',
          200: '{viva.200}',
          300: '{viva.300}',
          400: '{viva.400}',
          500: '{viva.500}',
          600: '{viva.600}',
          700: '{viva.700}',
          800: '{viva.800}',
          900: '{viva.900}',
          950: '{viva.950}',
        },
      },
    },
  },
  components: {
    menubar: {
      colorScheme: {
        light: {
          root: {
            background: '{viva.200}',
          },
        },
        dark: {
          root: {
            background: '{ocean.900}',
          },
        },
      },
    },
    datatable: {
      colorScheme: {
        light: {
          header: {
            cell: {
              background: '{viva.200}',
            },
          },
          row: {
            background: '{viva.200}',
          },
          footer: {
            cell: {
              background: '{viva.200}',
            },
          },
        },
        dark: {
          header: {
            cell: {
              background: '{ocean.900}',
            },
          },
          row: {
            background: '{ocean.900}',
          },
          footer: {
            cell: {
              background: '{ocean.900}',
            },
          },
        },
      },
    },
    paginator: {
      colorScheme: {
        light: {
          background: '{viva.200}',
        },
        dark: {
          background: '{ocean.950}',
        },
      },
    },
  },
});
