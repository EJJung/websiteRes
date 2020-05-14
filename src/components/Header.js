import React from 'react';
import { Typography, Grid, Link, Hidden } from '@material-ui/core';

import { useStyles } from '../style/designScheme';

const Header = () => {
  const classes = useStyles();

  return (
    <div style={{maxWidth:"1200px", margin:'0 auto'}}>
      <div className={classes.header}>
        <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
          <Grid item xs={6} md={10}>
            <img src='/icons/logo.svg' alt="logo.svg" style={{width:'3em'}} />
          </Grid>
          <Grid item xs={3} md={1}><Typography variant='subtitle1'>Works</Typography></Grid>
          <Grid item xs={3} md={1}><Typography variant='subtitle1'>About</Typography></Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Header;