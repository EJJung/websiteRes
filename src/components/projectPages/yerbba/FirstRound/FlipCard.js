import React from 'react';
import ReactCardFlip from 'react-card-flip';

import { Typography, Grid, ThemeProvider, Avatar, Button, Paper } from "@material-ui/core";
import '../../../../style/FirstIteration.css';
import { theme, useStyles } from "../../../../style/YerbbaSample";
import ProfileImg from '../../../../images/portfolios/YerbbaRes/profilephoto1.jpeg';

export const FlipCard = function() {
  const classes = useStyles();
  const [isFlipped, setIsFlipped] = React.useState(false);

  return(
    <ThemeProvider theme={theme}>
      <ReactCardFlip 
        isFlipped={isFlipped} 
        flipDirection='horizontal'
        containerStyle={{width:"380px"}}
      >
        <Paper style={{backgroundColor:"#f3f3f3", margin:"1em"}}>
        <Grid container spacing={2} style={{height:'30%', marginLeft:'4px', padding:'8px'}}>
          <Grid item xs={3}>
            <Avatar area-label='profile' alt="Cindy Baker" src={ProfileImg} style={{height:'3em', width: '3em', borderRadius: '50%'}} />
          </Grid>
          <Grid item xs={8}>
            <Typography variant='h6' color='textPrimary' className={classes.h6} coponent='p'>Cindy Baker</Typography> 
            <Typography variant='subtitle2' color='textSecondary' className={classes.subtitle2}>55 years old, Female</Typography> 
          </Grid>
          <Grid item xs={11}>
            <Typography variant="body2" color='textSecondary' className={classes.body2}>
              First diagnosed on Sep. 2018 and took tests: History and physical exam, diagnostic bilateral mammogram, Pathology review, and determination of ER status. Available to take Genetic counseling and breast MRI if indicated
            </Typography>
          </Grid>
          <Grid item xs={12}><Button variant='outlined' onClick={() => setIsFlipped(true)}>View More</Button></Grid>
        </Grid>
        </Paper>

        <Paper style={{backgroundColor:"#f3f3f3", margin:"1em"}}>
        <Grid container spacing={2} style={{height:'30%', marginLeft:'4px', padding:'8px'}}>
          <Grid item xs={3}>
            <Typography variant='subtitle2' color='textPrimary' className={classes.subtitle2} coponent='p'>Family History</Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant='body2' color='textSecondary' className={classes.body2}>Maternal grandmother - gastric cancer in 60’s.</Typography> 
          </Grid>
          <Grid item xs={3}>
            <Typography variant='subtitle2' color='textPrimary' className={classes.subtitle2} coponent='p'>Mammogram</Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant='body2' color='textSecondary' className={classes.body2}>Found abnormality in the left breast.</Typography> 
          </Grid>
          <Grid item xs={3}>
            <Typography variant='subtitle2' color='textPrimary' className={classes.subtitle2} coponent='p'>Medication</Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant='body2' color='textSecondary' className={classes.body2}>Multivitamins, Vitamin D, calcium, prn cetirizine and albuterol prn.
            </Typography> 
          </Grid>
          <Grid item xs={12}>
            <Typography variant='subtitle2' color='textSecondary' className={classes.subtitle2}>Available to take Genetic counseling and breast MRI if indicated from doctor’s note.
            </Typography> 
          </Grid>
          <Grid item xs={12}><Button variant='outlined' onClick={() => setIsFlipped(false)}>Back to Front</Button></Grid>
        </Grid>
        </Paper>
      </ReactCardFlip>
      {/* <label>
        <input type="checkbox" />
        <div class="card">
          <div class="front">
            <Grid container spacing={2} style={{height:'30%', marginLeft:'4px'}}>
              <Grid item xs={3}>
                <Avatar area-label='profile' alt="Cindy Baker" src={ProfileImg} style={{height:'3em', width: '3em', borderRadius: '50%'}} />
              </Grid>
              <Grid item xs={8}>
                <Typography variant='h6' color='textPrimary' className={classes.h6} coponent='p'>Cindy Baker</Typography> 
                <Typography variant='subtitle2' color='textSecondary' className={classes.subtitle2}>55 years old, Female</Typography> 
              </Grid>
              <Grid item xs={11}>
                <Typography variant="body2" color='textSecondary' className={classes.body2}>
                  First diagnosed on Sep. 2018 and took tests: History and physical exam, diagnostic bilateral mammogram, Pathology review, and determination of ER status. Available to take Genetic counseling and breast MRI if indicated
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div class="back">
            <Grid container spacing={2} style={{height:'30%', marginLeft:'4px'}}>
              <Grid item xs={3}>
                <Typography variant='subtitle2' color='textPrimary' className={classes.subtitle2} coponent='p'>Family History</Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography variant='body2' color='textSecondary' className={classes.body2}>Maternal grandmother - gastric cancer in 60’s.</Typography> 
              </Grid>
              <Grid item xs={3}>
                <Typography variant='subtitle2' color='textPrimary' className={classes.subtitle2} coponent='p'>Mammogram</Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography variant='body2' color='textSecondary' className={classes.body2}>Found abnormality in the left breast.</Typography> 
              </Grid>
              <Grid item xs={3}>
                <Typography variant='subtitle2' color='textPrimary' className={classes.subtitle2} coponent='p'>Medication</Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography variant='body2' color='textSecondary' className={classes.body2}>Multivitamins, Vitamin D, calcium, prn cetirizine and albuterol prn.
                </Typography> 
              </Grid>
              <Grid item xs={12}>
                <Typography variant='subtitle2' color='textSecondary' className={classes.subtitle2}>Available to take Genetic counseling and breast MRI if indicated from doctor’s note.
                </Typography> 
              </Grid>
            </Grid>
          </div>
        </div>
      </label> */}
    </ThemeProvider>
  )
}