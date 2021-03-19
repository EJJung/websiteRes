import React from 'react';
import { Typography, Grid, Box, Link, Chip, Hidden } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { useStyles } from '../../style/designScheme';
import YerbbaImg from '../../images/imgs/yerbba.png';

const featureList = [
  {
    color: '#E1B382',
    overline: 'featured project',
    title: 'Yerbba',
    summary: 'Your Personalize Breast Cancer Report',
    desc: 'Know the details of your breast cancer, including treatment options, tests, and all the actions that you should take to get the best care possible. No need to type in your information at all. We take care of everything for you.',
    tags: ["Service Design", "UX","UI","Javascript", "React", "Data Analyzation"],
    detailLink: '/yerbba',
    externalLink: 'https://yerbba.com'
  }
]

function FeatureSection(props) {
  const classes = useStyles();
  const { color, overline, title, summary, desc, tags, detailLink, externalLink } = props.feature;

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  
  return (
    <div className={classes.featureSection} style={{background:color}}>
      <div className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
          <Grid item xs={12}>
          <Box pt="15%" />
          </Grid>
          <Hidden smDown>
          <Grid item md={6}>
            <Box pt="10%" />
              <img src={YerbbaImg} alt={title} style={{maxWidth:'100%'}} />
          </Grid>
          </Hidden>
          <Grid item xs={12} md={6}>
            <Typography variant='overline'>{overline}</Typography>
            <Typography variant='h2' style={{fontSize:'3rem'}}>{title}</Typography>
            <Typography variant='body1' gutterBottom>{summary}</Typography>
            <Box pb='7%' />
            <Typography variant='body2'>{desc}</Typography>
            <Box pb='5%' />
            <div className={classes.tagArea}>
            {tags.map(tag => (
              <Chip 
                className={classes.caption}
                variant="outlined"
                size="small"
                label={tag}
                key={tag}
                onClick={handleClick}
              />) 
            )}
            </div>
            <Box pb='10%' />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Link href={detailLink} color='textPrimary'><Typography variant='button'>read full story</Typography><ArrowForwardIosIcon fontSize='inherit' /></Link>
              </Grid>
              <Grid item xs={12}>
                <Link href={externalLink} color='textPrimary'><Typography variant='button'>visit site</Typography><ArrowForwardIosIcon fontSize='inherit' /></Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
};

const Features = () => {
  
  return featureList.map(feature => <FeatureSection feature={feature} key={feature.title} />)
}

export default Features;