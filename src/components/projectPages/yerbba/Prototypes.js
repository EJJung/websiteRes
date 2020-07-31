import React, { useState } from 'react';
import { Typography, Grid, Box, Chip, Link, Avatar } from '@material-ui/core';

import { useStyles, theme } from '../../../style/designScheme';

const Prototypes = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          We start to build working prototypes to test our idea. Thanks to some patients, we could make dummy data that looks alike real data. We did countless trial and errors. Because recruiting breast cancer patients was extremely difficult, we created and discarded a lot of wireframes and ideas ourselves. Once we materialize our idea in Hi-Fi wireframes, we set up user interview plan and asked to patients. 
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          We could finalized initial version of prototype after iteration of trial and errors. and we started to develop the prototype that is actually able to show viable results, a patient centered report. 
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          We could finalized initial version of prototype after iteration of trial and errors. and we started to develop the prototype that is actually able to show viable results, a patient centered report. 
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Prototypes