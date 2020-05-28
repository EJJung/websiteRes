import React, { useState, useRef, useEffect } from 'react';
import { Typography, Grid, Box, Link, Icon } from '@material-ui/core';

import { useStyles } from '../../style/designScheme';

export const AboutSum = () => {
  const classes = useStyles();
  const [hoverRef,isHovered] = useHover(true);

  return(
    <div className={classes.root}>
      <Grid container direction='row' spacing={3}>
        <Grid item xs={12} md={7}>
        <Box pt="10%" />
        <Box ref={hoverRef} style={{transition:'0.2s'}}>
        { isHovered ? 
          <img 
            src='/imgs/decoEJ.png' 
            alt='self img'
            style={{transition:'0.2s'}}
          />
        : <img 
            src='/imgs/photoEJ2.png'
            alt='self img'
            style={{transition:'0.2s'}}
          />
        }
          
        </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box pt="60%" />
          <Typography variant='h2' align='left' gutterBottom> HEY</Typography>
          <Typography variant='body1' align='justify'>I'm Euijin Jung. </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

// Hook
function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
  );

  return [ref, value];
}
