import React, { useState, useRef, useEffect } from 'react';

import { Typography, Grid, Box, Link, Icon } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';

import { useStyles } from '../style/designScheme';

const Banner = () => {
  const classes = useStyles();
  const [hoverRef,isHovered] = useHover(true);

  return (
    <div className={classes.root}>
      <Grid container direction='row' spacing={3}>
        <Grid item xs={12} md={7}>
        <Box pt="40%" />
          <Typography variant='h2' gutterBottom>Euijin Jung</Typography>
          <Typography variant='h5'>Warm-harted Innovator</Typography>
          <Typography variant='body2' gutterBottom>User Experience Designer, Front-end Developer, Data Analyist</Typography>
          <div className={classes.socialSpacing}>
            <Link href="https://www.linkedin.com/in/ejjung79/" target="_blank"><LinkedInIcon className={classes.linkedInIcon} /></Link>
            <Link href="https://github.com/EJJung" target="_blank"><GitHubIcon className={classes.githubIcon} /></Link>
            <Link href="mailto:euijjung@umich.edu" target="_blank"><EmailTwoToneIcon className={classes.emailIcon} /></Link>
            <Link href="/resume.pdf" ref={hoverRef} target="_blank">
              <Icon 
                className={isHovered ? "far fa-id-badge":"fas fa-id-badge"} 
                style={{transition: '0.2s', color:isHovered ? '#797979':'#d3d3d3'}}
                />
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box pt="60%" />
          <Typography variant='h5' style={{fontFamily:'DM Serif Text', fontSize:'1.5em'}}>"</Typography>
          <Typography variant='body1' style={{fontStyle:'italic', fontWeight:300}} align='center'>
          Be happy, Be positive, Be balanced. <br/>Let me help you to be in those.
          </Typography>
          <Typography variant='h5' style={{fontFamily:'DM Serif Text', fontSize:'1.5em'}} align='right'>"</Typography>
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

export default Banner;