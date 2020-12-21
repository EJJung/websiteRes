import React, { useState } from 'react';
import { Typography, Grid, Box, Chip, Link, Avatar } from '@material-ui/core';

import { useStyles, theme } from '../../../style/designScheme';

const Prototypes = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          I start to build working prototypes to test our idea with design team. Thanks to some patients, contents team could make dummy data that looks alike real data. We did countless trial and errors. Because recruiting breast cancer patients was extremely difficult, I created and discarded a lot of wireframes and ideas. Once I materialize our idea in Hi-Fi wireframes, I set up user interviews with patients. 
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          Design team got through a lot of minor edits and could finalized initial version of working prototype. and I started to develop the prototype that is actually able to show viable results, a patient centered report. Development team established sample backend with local database. 
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          One of design team member, Carlo started to build frontend User Interfaces with development team. Carlo got back to school and I took over his works and finalized all frontend works. 
          I supervised design team and helped them to design deliverables on time. Development team helped design team to build working prototype. And the CEO met investors with this prototype. While design team brought up new designs, development team started to prepare for real product by that time.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Prototypes