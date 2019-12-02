import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { hot } from 'react-hot-loader/root';
import Routes from './routes/Routes';

const customTheme = createMuiTheme({
  palette: {
    background: {
      // paper: '#414755',
      paper: '#e2e2e2',
      default: '#e6e6e6'
      // default: '#313640'
    },
    // type: 'dark',
    //  background:{
    //     default:"rgba(239, 239, 239, 1)",
    //     paper:"rgb(197, 197, 197)"
    //  },
    primary: {
      // light: will be calculated from palette.primary.main,
      // main: '#ff9800',
      main: '#ff9800'
    },
    secondary: {
      // main: '#ff5722',
      main: '#e91e63'
    },
    default: {
      main: '#383A47'
    }
    //   text:{
    //     primary:"#f5f5f5",
    //     secondary:"#080808",
    //     disabled:"rgba(247, 247, 247, 0.38)",
    //     hint:"rgba(240, 234, 234, 0.38)"
    //  }

    // error: will use the default color
  },
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: ['Roboto Light'].join(',')
  }
});

const App = () => (
  <MuiThemeProvider theme={customTheme}>
    <CssBaseline />
    <Router>
      <Routes />
    </Router>
  </MuiThemeProvider>
);

export default hot(App);
