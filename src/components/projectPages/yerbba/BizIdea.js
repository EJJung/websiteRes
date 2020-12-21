import React, { useState } from 'react';
import { Typography, Grid, Box, Chip, Link, Avatar } from '@material-ui/core';

import { useStyles, theme } from '../../../style/designScheme';

const BizIdea = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          We thought we should focuse on patient for several reasons: HITECH act, ACA, and other acts are still in effect. Patient-centered services seemed promising and were relatively new in the healthcare market. Since Affordable Care Act (ACA) was in effect, traditional healthcare industry have slowly been changed along with the change in reimburse model: from fee-for service model to value based model such as Merit-based Incentive Payment System. Also, the adoption of Electroinc Health Record was accelerated under Health Information Technology for Economic and Clinical Health (HITECH) Act. 
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          We categorized our perspectives into patients' perspective and doctors' perspective, and did quantitative and qualitative researches. We eventually found patients fundamentally ask two questions: 'Am I ill?' and 'How much do I have to pay?'. On the other hand, doctors take into account various essential matters including prognosis and quality of life when they treat their patients. After profound researches and discussions, we spotted out 'breast cancer' as our primary target disease. It is something that we can work together and know where to start. 
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          We focused more on what information the patient want to know and what they felt uncomfortable or less satisfaction. Some patient who have breast cancer want to know more on their disease and what is going on their body. Although hopsital did provide informations through Patient Portal, they could not distinguish what information was critical to make decision because of too much information to digest and lack of medical knowledge. The patients want to control their health and have clear vision over their disease.
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          So we restructure work product roadmap. Instead of simply applying Kgrid to breast cancer, we extracted some of functionalities from Kgrid and added our values on our product so breast cancer patients will be able to take control on their disease. 
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          I created wireframes and prototypes. Then I had user interview sessions with patients and doctors with prototypes. After 3 iteration of interviewing - prototyping, I could settle product concept. We started to meet other entreprenures shared our idea to them and learned from their idea. We did a bootcamp from SPARK, one of the startup incubators/ accelerators in Ann Arbor, and honed our idea sharper. Other than that, we reached out to our friends at the University of Michigan and got feedback on our prototypes and business idea from them. 
        </Typography>
      </Grid>
    </Grid>
  )
}

export default BizIdea