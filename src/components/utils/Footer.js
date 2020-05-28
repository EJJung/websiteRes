import React from 'react';
import { Typography, Grid, Link, Hidden } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';

import { useStyles } from '../../style/designScheme';

const Footer = () => {
  const classes = useStyles();

  return (
    <div style={{maxWidth:"1200px", margin:'0 auto'}}>
      <div className={classes.header}>
        <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
          <Grid item xs={12} md={9}>
            <Typography variant='body2'>Designed and coded by Euijin Jung &copy; 2020  Euijin Jung, All Rights Reserved</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Grid container direction="row" justify='center' alignItems='center' spacing={3}>
              <Grid item md={4}>
                <Link href="https://www.linkedin.com/in/ejjung79/" target="_blank"><LinkedInIcon className={classes.linkedInIcon} style={{fontSize:24}}/></Link>
              </Grid>
              <Grid item md={4}>
                <Link href="https://github.com/EJJung" target="_blank"><GitHubIcon className={classes.githubIcon} style={{fontSize:24}}/></Link>
              </Grid>
              <Grid item md={4}>
                <Link href="mailto:euijjung@umich.edu" target="_blank"><EmailTwoToneIcon className={classes.emailIcon} style={{fontSize:24}}/></Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer;