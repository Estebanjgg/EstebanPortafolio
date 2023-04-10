import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My Website
          </Typography>
          <Link href="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="/about">
            <Button color="inherit">About</Button>
          </Link>
          <Link href="/contact">
            <Button color="inherit">Contact</Button>
          </Link>
          <Link href="/projects">
            <Button color="inherit">Projects</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}