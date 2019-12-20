import React from 'react';
import './App.scss';
import Grid from '@material-ui/core/Grid';
import Counter from './components/Counter';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { blueGrey, blue, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: blue[800],
      barbell: blueGrey[800]
    },
    background: {
      default: grey[900]
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container direction='row' justify='center' alignItems='center'>
        <Counter></Counter>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
