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
import { blue } from '@material-ui/core/colors'
import { Navigation, Calculator } from './components'

// import Counter from './components/Counter'

const App = props => {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: blue[500]
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
            <Router>
              <Switch>
                <Route path='/reverse'>Reverse</Route>
                <Route path='/'>
                  <Calculator></Calculator>
                </Route>
              </Switch>
            </Router>
          </Grid>
        </Container>
      </MuiThemeProvider>
    </div>
  )
}

export default App
