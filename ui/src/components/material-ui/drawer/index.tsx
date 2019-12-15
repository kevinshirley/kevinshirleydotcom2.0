import React from 'react';
import Link from 'next/Link';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { TOP_DRAWER_MENU, BOTTOM_DRAWER_MENU, MENU } from 'ui/src/components/material-ui/icons';

const theme = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

const drawerLink = text => {
  if (text.toLowerCase() === 'home') {
    return '/';
  } else {
    return text.toLowerCase().replace(' ', '-');
  }
}

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles(theme);
  const [state, setState] = React.useState({
    left: false,
  });

  type DrawerSide = 'top' | 'left' | 'bottom' | 'right';
  const toggleDrawer = (side: DrawerSide, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (side: DrawerSide) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
      style={{
        background: 'transparent'
      }}
    >
      <List>
        {['Home', 'Portfolio', 'Services', 'About'].map((text, index) => (
          <Link href={drawerLink(text)} key={text}>
            <ListItem button>
              <ListItemIcon>{TOP_DRAWER_MENU[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {['Contact', 'Hire Me'].map((text, index) => (
          <Link href={drawerLink(text)} key={text}>
            <ListItem button>
              <ListItemIcon>{BOTTOM_DRAWER_MENU[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}>{MENU}</Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}