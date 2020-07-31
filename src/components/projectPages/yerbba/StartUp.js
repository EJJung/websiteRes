import React, { useState } from 'react';
import { Typography, Grid, Box, Chip, Link, Avatar } from '@material-ui/core';

import { useStyles, theme } from '../../../style/designScheme';

const StartUp = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          This project was inspired by <Link hrer="https://kgrid.org/">Knowledge Grid</Link>. The Knowledge Grid converts knowledge, KGrid, to executable form. By using Kgrid, some papers and publications that include programming codes or programable formula can be automatically converted into ready-to-use form for machines. We believed that this concept could be applied to many other field such as finance or engineering. Isn't it awesome that anyone can use the most recent technology without putting efforts? It was what we were looking at. We thought we could build 'a thing' that can convert any actionable papers to any kind of results.
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1'>
          However, the ideas that we threw was limited and vague. The keyword 'any data' to 'any kind of results' was practically not feasible. Thus, we decided to start where we are good at. We all share one thing: Health informatics. We decided to set our area in healthcare IT. 
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          Healthcare itself is still big and complex area to jump on. We kept discussing what specific area we would go and what can we do for it. 
        </Typography>
      </Grid>
    </Grid>
  )
}

export default StartUp