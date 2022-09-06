import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#37A794',
    },
    secondary: {
      main: '#11cb5f',
    },
    danger: {
      main: '#FC8181',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Nunito',
      fontStyle: 'normal',
      lineHeight: '150%',
      letterSpacing: '-0.02em',
    },
  },
});

export default theme;
