import React, { useState } from 'react';
import { Typography, Grid, Box, Chip, Link, Avatar } from '@material-ui/core';

import { useStyles, theme } from '../../../style/designScheme';

const Product = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          We are focusing on marketing now. Since our product poses as an credence good and/or claim, marketing would be tricky. We need to establish credibility of our product. 
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          We are running a blog that talks about breast cancer. Also, we publish newsletter and share our news through instagram. We will analyse performances on each media and set strategy from there.  
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Product