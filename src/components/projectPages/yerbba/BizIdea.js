import React, { useState } from 'react';
import { Typography, Grid, Box, Chip, Link, Avatar } from '@material-ui/core';

import { useStyles, theme } from '../../../style/designScheme';

const BizIdea = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          We categorized our perspectives into patients' perspective and doctors' perspective, and did quantitative and qualitative researches. We got rid of other stakeholder at this point. We eventually thought patients fundamentally ask two questions: 'Am I ill?' and 'How much do I have to pay?'. On the other hand, doctors take into account various essential matters including prognosis and quality of life when they treat their patients. 
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          After profound researches and discussions, we spotted out 'breast cancer' as our primary target disease. It is something that we can work together and know where to start. 
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          Instead of simply applying Kgrid to breast cancer, we extracted some of functionalities from Kgrid and added our values on our product so breast cancer patients will be able to take control on their disease. 
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          Instead of simply applying Kgrid to breast cancer, we extracted some of functionalities from Kgrid and added our values on our product so breast cancer patients will be able to take control on their disease. 
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          We started to meet other entreprenures shared our idea to them and learned from their idea. We did a bootcamp from SPARK, one of the startup incubators and accelerators in Ann Arbor, and honed our idea sharper. Other than that, we reached out to our friends at the University of Michigan and got feedback from them. 
        </Typography>
      </Grid>
    </Grid>
  )
}

export default BizIdea