import React, { useState } from 'react';
import { Typography, Grid, Box, Chip, Link, Avatar } from '@material-ui/core';

import { useStyles, theme } from '../../../style/designScheme';

const Product = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          Once working prototype has built, design team starts to do light usability testing with approachable people such as friends and family. We collect feedbacks from 8 people and consoildate key findings. Testees showed common errors: difficulty in finding appropriate function sets, understanding of concepts that we wanted to provide. They also complaint small typo. 
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          The major problems of prototype UIs were came from the concept of the UIs. We wanted to provide 'whole-in-one page' so we built a dashboard that users don't have to go back and forth between pages. Because too many information laid in one page, the page looked too complicated to categorize and understand information. Also, for the same reason, users couldn't find an important function because the open button was not recgnizable. Thus, we decided to level information and functions and allocate them appropriately. 
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          We designed new UIs and conducted user interveiws to see our conceptual model is aligned with users' mental model. After 3 rounds of user interviews, we finalize UIs and GUIs. As contents team find more facts, design team adjust UIs continuously. 
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          While design team was working on new design, development team converted data exchange system and base language from Python to Javascript. We used to use Python for backend. However, since we wanted to build the web application, using Javascript seemed the right way to go. 
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1' gutterBottom>
          The development tasks consisted with three major parts: proper data retrieval, match data to relevant payloads, and proper information representation to user. I can't reveal how we build them in detail. I can say we used javascript based web frameworks such as React.JS in frontend and REST API based works in backend. I took in charge of frontend design and development. Beltran took backend and Eddie helped him.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Product