import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Hidden
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { List, ListItem, ListItemText } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const drawerWidth = 240
const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  }
}))

const Header = props => {
  const { container } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleDrawerClose = () => {
    setMobileOpen(false)
  }

  const drawer = (
    <List>
      <Link
        to='/'
        style={{ textDecoration: 'none', color: 'inherit' }}
        onClick={handleDrawerClose}
        data-testid='navigation-calculator-item'
      >
        <ListItem button>
          <ListItemText primary='Calculator' />
        </ListItem>
      </Link>
      <Link
        to='/reverse'
        style={{ textDecoration: 'none', color: 'inherit' }}
        onClick={handleDrawerClose}
        data-testid='navigation-reverse-calculator-item'
      >
        <ListItem button>
          <ListItemText primary='Reverse Calculator' />
        </ListItem>
      </Link>
    </List>
  )

  return (
    <div>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Lifting Calculator
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
}

export default Header
