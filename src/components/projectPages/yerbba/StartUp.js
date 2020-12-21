import React, { useState } from 'react';
import { Typography, Grid, Box, Chip, Link, Avatar } from '@material-ui/core';

import { useStyles, theme } from '../../../style/designScheme';

const StartUp = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          This project was inspired by <Link hrer="https://kgrid.org/">Knowledge Grid</Link>. The Knowledge Grid converts knowledge, KGrid, to executable form. By using Kgrid, any papers and publications that include programming codes or programable formula can be automatically converted into any form for machines. We believed that this concept could be applied to many other field such as finance or engineering. Isn't it awesome that anyone can use the most recent technology without putting efforts? We thought we could build 'a thing' that can convert any actionable papers to any kind of results.
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1'>
          However, the keyword 'any data' to 'any kind of results' was practically not feasible. To find where and how start, we did a lot of research on various area from Finance to Bio informatics. And then, We realized we already have a common specialty: Health informatics. We decided to set our area in healthcare IT. 
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          Healthcare IT is still too big and complex area to jump on. Is it payer-friendly product or health practitioner-friendly product, or customer-friendly product? What and why should we go with it? We kept discussing specific domain and strategy. 
        </Typography>
      </Grid>
    </Grid>
  )
}

export default StartUp