import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Grid, Container } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import { Navigation, Calculator, ReverseCalculator } from './components'

// import Counter from './components/Counter'

const App = () => {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: red[900]
      }
    }
  })

  const classes = makeStyles(theme => ({
    root: {
      display: 'flex',
      height: '100vh'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    toolbar: theme.mixins.toolbar,
    container: {
      display: 'flex',
      flexDirection: 'column'
    }
  }))()

  return (
    <Router>
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Navigation></Navigation>
          <Container className={classes.container}>
            <div className={classes.toolbar} />
            <Grid
              className={classes.content}
              justify='center'
              alignItems='center'
              container
            >
              <Switch>
                <Route path='/reverse'>
                  <ReverseCalculator></ReverseCalculator>
                </Route>
                <Route path='/'>
                  <Calculator></Calculator>
                </Route>
              </Switch>
            </Grid>
          </Container>
        </MuiThemeProvider>
      </div>
    </Router>
  )
}

export default App
