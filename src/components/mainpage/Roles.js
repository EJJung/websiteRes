import React from 'react';

import { Typography, Grid, Box } from '@material-ui/core';

import { useStyles } from '../../style/designScheme';
import DesignIcon from '../../images/icons/designIcon.svg';
import CodingIcon from '../../images/icons/codingIcon.svg';
import AnalyticIcon from '../../images/icons/analyticIcon.svg';

const contents =[
  {
    icon: DesignIcon,
    title: 'User Experience Designer',
    desc: 'Maintain keen observation, find solution, and bring up effective designs for 7 years. Designed various services including mobile, web, TV, and intengible service.'
  },
  {
    icon: CodingIcon,
    title:'Frontend Developer',
    desc:'Build web application from scratch. Develop and involved in backend and frontend development, especially focused on frontend development.'
  },
  {
    icon: AnalyticIcon,
    title: 'Data Analyist',
    desc: 'Interested in data analyization using Machine Learning and Natural Language Processing, applying to Python, Keras, Tenserflow.'
  }
]

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box pt='30%' />
      <Grid container direction="row" justify="center" alignItems="flex-start" spacing={5}>
        
        {contents.map((aBox) => (
          <Grid item xs={12} md={12/contents.length} key={aBox.title} >
            <img src={aBox.icon} alt={aBox.title} width="40px"/>
            <Typography variant='h6' align='justify' gutterBottom>{aBox.title}</Typography>
            <Typography variant='body2'>{aBox.desc}</Typography>
          </Grid>
        ))}
      </Grid>
      <Box pb='16%' />
    </div>
  )
}

export default Banner;