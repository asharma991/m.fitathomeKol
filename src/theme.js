import { createMuiTheme } from '@material-ui/core/styles';
import Exoregular from './fonts/exo-2-v7-latin-regular.woff2';
import Exobold from './fonts/exo-2-v7-latin-600.woff2';
import Exoheavy from './fonts/exo-2-v7-latin-500.woff2';
import Exothin from './fonts/exo-2-v7-latin-300.woff2';
import {colors} from './services';

const exoThin = {
    fontFamily: 'Exo',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 300,
    src: `
      local('Exo'),
      local('Exo-Thin'),
      url(${Exothin}) format('woff2')
    `,
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
  };
const exo = {
  fontFamily: 'Exo',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Exo'),
    local('Exo-regular'),
    url(${Exoregular}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
const exoHeavy = {
    fontFamily: 'Exo',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 500,
    src: `
      local('Exo'),
      local('Exo-Heavy'),
      url(${Exoheavy}) format('woff2')
    `,
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
  };
const exoBold = {
    fontFamily: 'Exo',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 600,
    src: `
      local('Exo'),
      local('Exo-Bold'),
      url(${Exobold}) format('woff2')
    `,
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
  };

const theme = createMuiTheme({
    palette: {
        primary: {
            main: colors.primary
        },
        secondary:{
          main: colors.secondary
        }
      },
    typography: {
        fontFamily: 'Exo, Arial',
        color: '#fff',
        root: {
            color: colors.secondary
        },
        p:{
            fontSize: '1rem',
            fontWeight: 400
        },
        h1:{
            fontSize: '2.5rem',
            fontWeight: 500,
            textShadow: '1px 1px #1b1b1b'
        },
        h2:{
            fontSize: '1.5rem',
            fontWeight: 500,
        },
        h3:{
            fontSize: '1.0rem',
            fontWeight: 500
        },
        subtitle1:{
            fontSize: '1.2rem',
            fontWeight: 300
        },
        subtitle2:{
          fontSize: '1.0rem',
          fontWeight: 300
      }
    },
    MuiButton:{
      root:{
        borderRadius: '50px',
      }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
            '@font-face': [exo, exoBold, exoHeavy, exoThin],
            },
        },
        MuiButton: {
          // Name of the rule
          root: {
            //borderRadius: '20px',
            textTransform:'none',
          },
          outlined:{
            padding: '8px 20px'
          },
          contained:{
            padding: '8px 20px'
          },
          containedPrimary:{
            color: colors.secondary
          }
        },
        MuiSelect:{
          root: {color: '#c0c0c0'},
        },
        MuiList:{
          root:{background:'none'}
        }
    },
    props: {
      // Name of the component ⚛️
      MuiButtonBase: {
        // The default props to change
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
})

export default theme;