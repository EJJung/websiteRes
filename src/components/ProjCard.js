import React, { useState } from 'react';
import { Typography, Grid, Button, Paper } from '@material-ui/core';

import { useStyles } from '../style/designScheme';

export const CardContents = [
  {
    id: 1,
    type: ['UX', 'Dev', 'Data'],
    icon: 'Yerbba.svg',
    name: 'Yerbba',
    desc: 'A patient medical information platform that provides personalized report based on own medical records'
  },
  {
    id:2,
    type: ['UX'],
    icon: '2ndBrain.svg',
    name: '2nd Brain',
    desc: 'A medical reminder system that reminds teens with chronic illnesses to stay on medication schedule'
  },
  {
    id: 3,
    type: ['UX'],
    icon: 'eyeGuide.svg',
    name: 'eyeGuide',
    desc: 'A platform that help patients change their behavior over their glaucoma and remember to take glaucoma medication'
  },
  {
    id: 4,
    type: ['Dev'],
    icon: 'upLift.svg',
    name: 'UpLift',
    desc: 'A commuter-to-commuter ridesharing service'
  },
  {
    id: 5,
    type: ['Dev'],
    icon: 'healthHub.svg',
    name: 'Health Hub: Radnet.kr',
    desc: 'A health information exchange service that shares medical images and meta data through cloud based sharing and real-time image reading'
  },
  {
    id: 6,
    type: ['Data'],
    icon: 'humax.svg',
    name: 'Humax: MobileApp'
  },
  {
    id: 7,
    type: ['Data'],
    icon: 'humax.svg',
    name: 'Humax: TV App'
  },
  {
    id: 8,
    type: ['Data'],
    icon: 'humax.svg',
    name: 'Humax: BXR'
  },
]

export default function ProjCard(props) {
  const classes = useStyles();
  const { content } = props;
  const [hover, setHover] = useState(false);

  function handleMouseOver() {
    setHover(!hover)
  }

  function handleMouseOut() {
    setHover(false)
  }

  return (
    <Paper 
      elevation={0} 
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{background:'none'}}
    >
      <Grid container direction='row' justify='center' alignItems='center' spacing={3}>
        <Grid item xs={12} className={classes.projCard}>
          <img src={"/portfolios/"+content.icon} alt='yerbba' className={hover? classes.projOverImg:classes.projOutImg}/>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='subtitle1' align='center' className={hover? classes.projOverTxt:classes.projOutTxt}>{content.name}</Typography>
        <Grid item xs={12}>
          <Typography variant='body2' align='center' className={hover? classes.projOverTxt:classes.projOutTxt}>{content.desc}</Typography>
        </Grid>
        </Grid>
      </Grid>
    </Paper>
    
  )
};