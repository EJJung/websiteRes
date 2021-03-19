import React from 'react';
import { Typography } from '@material-ui/core';

import ConstructionImg from '../../images/imgs/comingSoon.gif';
import { useStyles } from '../../style/designScheme';

const ComingSoon = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <img src={ConstructionImg} alt='coming soon' width='75%' style={{display:'block', margin:'auto'}}/>
      <Typography variant="h2" align='center'>Coming Soon</Typography>
      <Typography variant="body1" align='center'>I am coming with a new page. It won't take that long!</Typography>
    </div>
  )
}

export default ComingSoon;