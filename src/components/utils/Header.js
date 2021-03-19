import React from 'react';
import { Typography, Grid, Hidden } from '@material-ui/core';
import { Link } from "react-router-dom";

import {ReactComponent as Logo} from '../../images/icons/logo.svg';
import { useStyles } from '../../style/designScheme';

const Header = () => {
  const classes = useStyles();

  return (
    <div style={{maxWidth:"1200px", margin:'0 auto'}}>
      <div className={classes.header}>
        <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
          <Grid item xs={6} md={10}>
            <Link to='/'><Logo width='36px' /></Link>
          </Grid>
          <Grid item xs={3} md={1}>
            <Link to='/works' style={{textDecoration:'none'}}>
              <Typography color="textPrimary" variant='subtitle1'>Works</Typography>
            </Link>
          </Grid>
          <Grid item xs={3} md={1}>
            <Link to='/about' style={{textDecoration:'none'}}>
              <Typography color="textPrimary" variant='subtitle1'>About</Typography>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Header;