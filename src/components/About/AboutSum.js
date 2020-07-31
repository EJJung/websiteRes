import React, { useState, useRef, useEffect } from 'react';
import { Typography, Grid, GridList, GridListTile, Box, Link, Icon } from '@material-ui/core';
import ReactPlayer from 'react-player';

import { useStyles } from '../../style/designScheme';
import { TileInfo } from './TileInfo';

export const AboutSum = () => {
  const classes = useStyles();
  const [hoverRef,isHovered] = useHover(false);

  return(
    <div className={classes.root}>
      <Grid container direction='row' spacing={3}>
        <Grid item xs={12} md={7}>
        <Box pt="10%" />
        <Box ref={hoverRef} >
        {/* { isHovered ? 
          <img 
            src='/imgs/decoEJ.png' 
            alt=''
            style={{transition:'0.2s'}}
          />
        : <img 
            src='/imgs/photoEJ2.png'
            alt=''
            style={{transition:'0.2s'}}
          />
        } */}
        <div className={classes.test} />
        
        </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box pt="60%" />
          <Typography variant='h2' align='left' gutterBottom>Euijin Jung</Typography>
          <Typography variant='body1' align='left' paragraph>I'm UX Designer, frontend developer who can apply machine learning skills. I'm venturing a startup called <Link href='https://yerbba.com' color='secondary'><b>Yerbba</b></Link>, healthcare literacy platform for patients. I experience the whole lifecycle of business and product. I see new ideas that no one have seen so far. And this lead me beyond the realm of design.</Typography>
          <Typography variant='body1' align='left' paragraph>My interest is to build new services that help people to be happy. Wanted to understand people, I started my career as a UI designer, and gradually extend my ability to be a UX designer. Now I go further enough to build services myself. I understand how a new services and/or products are developed, aligned those into users' unmet needs, and operated them. I believe this expreience let me help people happy.</Typography>
          <Typography variant='body1' align='justify' paragraph>I am based in Michigan, but originally from Seoul, Korea. </Typography>
        </Grid>
      </Grid>
      <Box pb="10%" />
      <div className={classes.AboutGridRoot}>
        <GridList spacing={1} cols={3} className={classes.AboutGridTile}>
        {TileInfo.map((tile) => (
          <GridListTile key={tile.title} cols={tile.cols} rows={tile.rows}>
            {tile.type==='img' ? 
            <img src={tile.location} alt={tile.title} />
            : <ReactPlayer url={tile.location} light controls width='100%' height='100%'/>}
          </GridListTile>
        ))}
        </GridList>
      </div>
      <Box pb="10%" />
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
