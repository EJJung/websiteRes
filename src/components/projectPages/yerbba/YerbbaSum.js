import React, { useState } from 'react';
import { Typography, Grid, Box, Chip, Link, Avatar } from '@material-ui/core';

import { useStyles, theme, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '../../../style/designScheme';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import CheckIcon from '@material-ui/icons/Check';

const CustomizedExpansionPanels = ({text, contributors, setSelectedFeature}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
      setSelectedFeature(panel);
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={8}>
        <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary 
          expandIcon={<ExpandMoreIcon />} 
          aria-controls="panel1d-content" 
          id="panel1d-header"
        >
          <Typography variant='h6' className={classes.projHeading}>{text['title']}</Typography>
          <Typography variant='subtitle2' className={classes.projsubtitle}>{text['sub1']}</Typography>
          <AvatarGroup max={5}>
            {contributors.map(person => (
              <Avatar alt={person} src={"/icons/yerbba/"+person+".svg"} />
            ))}
          </AvatarGroup>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant='body1' className={classes.body1}>{text['con1']}</Typography>
        </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
      <Box pb='5%' />
    </Grid>
  );
}


export const YerbbaSum = () => {
  const classes = useStyles();
  const [firstSelectedFeature, setFirstSelectedFeature] = useState("panel1")
  const [secondSelectedFeature, setSecondSelectedFeature] = useState("panel1")
  const [thirdSelectedFeature, setThirdSelectedFeature] = useState("panel1")
  const [fourthSelectedFeature, setFourthSelectedFeature] = useState("panel1")
  const [fifthSelectedFeature, setFifthSelectedFeature] = useState("panel1")

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const processContent = [
    {
      title: "Start Up!",
      contributors: ['Beltran Figueroa', 'Brian Chen', 'Josh Vo', 'Jenny Choi', 'WeiYau Tee'],
      text: {
      'subtitle':"Inspired by Knowledge Grid project, started discusses for viable business ideas", 
      'contents':"The information in your report is specific to you. Details about your options include length of treatment, questions to ask your doctors, frequent side effects, and other pros and cons to consider."
    },
      setFeature: setFirstSelectedFeature,
    },
    {
      title: "Confirm Business Idea",
      contributors: ['Beltran Figueroa', 'Brian Chen'],
      text: {
        'subtitle':"You are Unique, So is Your Cancer", 
        'contents':"Treatment of breast cancer is based on the unique features of each person's cancer. Yerbba explains what features of your cancer play a role in your treatment options."
      },
      setFeature: setSecondSelectedFeature,
    },
    {
      title: "Develop Prototypes",
      contributors: ['Aaron Pearson', 'Duo Chen', 'Eddie Yoon', 'Carlo Sugatan', 'Sally Lee'],
      text: {
        'subtitle':"Updated As your Treatment Progresses", 
        'contents':"Your report is updated automatically as your treatment continues. For example, after you visit a doctor, have a new test result, undergo surgery, or receive a new prescription."
      },
      setFeature: setThirdSelectedFeature,
    },
    {
      title: "Develop Product",
      contributors: ['Beltran Figueroa', 'Chloe Canon', 'Jennifer Griggs', 'Eddie Yoon', 'Brian Flaherty', 'Alexa Yi', 'Sally Lee'],
      text: {
        'subtitle':"Quick and Easy", 
        'contents':"Yerbba is easy to use. All you have to do is create an account, which takes less than 5 minutes. Yerbba then generates your health report automatically for you."
    },
      setFeature: setFourthSelectedFeature,
    },
    {
      title: "Product Live!",
      contributors: ['All'],
      text: {
        'subtitle':"Now let's tell the others", 
        'contents':"Yerbba is easy to use. All you have to do is create an account, which takes less than 5 minutes. Yerbba then generates your health report automatically for you."
    },
      setFeature: setFifthSelectedFeature,
    },
  ]

  return(
    <div>
      <Grid container direction='row' justify='center' alignItems='center' style={{backgroundColor:'#C2004D'}}>
        <Grid item xs={12} md={12} >
          <Box pt='10%' />
        </Grid>
        <Grid item xs={1} md={1}>
          <img src='/imgs/yerbba/yerbba.svg' alt='yerbba' />
        </Grid>
        <Grid item xs={12} md={12} >
          <Typography variant='h1' align='center' style={{color:'white'}}>YERBBA</Typography>
          <Box pt='5%' />
        </Grid>
        <Grid item xs={12} md={5}>
          <img src='/imgs/yerbba/banner.png' alt='example1' width='100%' />
        </Grid>
      </Grid>

      <Grid container direction='row' justify='center' alignItems='center' style={{background:'#424242'}}>
        <Grid item xs={10} className={classes.root}>
          <Box pt='5rem' />
          <Typography variant='h5' className={classes.projSummary} gutterBottom>I am a Design Lead and Frontend Developer at <Link href="https://www.yerbba.com/" >Yerbba</Link>, provides personalized healthcare information based on patient’s electronic medical records and standards of care.</Typography>
          <Box pt='2rem' />
          <Typography variant='h5' className={classes.projSummary} >I found the company Yerbba, clarified business idea, eirected design research process, designed user interactions and visual components, developed the product.</Typography>
          <Box pb='5rem' />
        </Grid>
        <Grid item xs={12} className={classes.root} style={{color:'rgba(255, 255, 255, 0.7)'}}>
          <Grid container direction='row' justify='center'>
            <Grid item xs={8} md={3} style={{ margin:theme.spacing(2)}}>
              <Typography variant='h6'>Role</Typography>
              <Typography variant='body2' gutterBottom>Service Designer, UX Researcher, UX Designer, Frontend Developer</Typography>
            </Grid>
            <Grid item xs={8} md={3} style={{ margin:theme.spacing(2)}}>
              <Typography variant='h6'>Timeline</Typography>
              <Typography variant='body2' gutterBottom>Apr. 2018 – On Going</Typography>
            </Grid>
            <Grid item xs={8} md={3} style={{ margin:theme.spacing(2)}}>
              <Typography variant='h6' >Collaborators</Typography>
              <Typography variant='subtitle2' className={classes.projsub2} style={{color:'rgba(255, 255, 255, 0.5)'}}>[Founding Members]</Typography>
              <Typography variant='body2' gutterBottom>Beltran Figueroa, Brian Chen</Typography>
              <Box pb='0.5rem' />
              <Typography variant='subtitle2' className={classes.projsub2}>[Design Team]</Typography>
              <Typography variant='body2' gutterBottom>Alexa Yi, Sally Lee, Carlo Sugatan</Typography>
              <Box pb='0.5rem' />
              <Typography variant='subtitle2' className={classes.projsub2}>[Development Team]</Typography>
              <Typography variant='body2' gutterBottom>Eddie Yoon, Brian Flaherty</Typography>
            </Grid>
            <Grid item xs={8} md={3} style={{ margin:theme.spacing(2)}}>
              <Chip variant='outlined' size='small' label='Healthcare' onClick={handleClick} color='primary' style={{ margin:theme.spacing(1) }} />
              <Chip variant='outlined' size='small' label='Platform' onClick={handleClick} color='primary' style={{ margin:theme.spacing(1) }} />
            </Grid>
          </Grid>
          <Box pb='5rem' />
        </Grid>
      </Grid>
      <Grid container direction='row' justify='center' alignItems='center' >
        <Grid item>
          <Box pb='5rem' />
          <Typography variant='subtitle1' style={{fontStyle: 'italic'}}>
            Disclaimer: This project is under NDA agreements. Only allowed contents will be revealed.
          </Typography>
          <Box pb='5rem' />
        </Grid>
      </Grid>
      <Grid container direction='row' justify='center' alignItems='center' >
        <Grid item>
          <Box pb='5rem' />
          {processContent.map(({title, text, contributors, setFeature }) => ( 
            <CustomizedExpansionPanels 
              key={title}
              text={{ 'title':title, 'sub1':text.subtitle, 'con1':text.contents }}
              contributors={contributors}
              setSelectedFeature={setFeature}
            />
          ))}
          <Box pb='5rem' />
        </Grid>
      </Grid>
    </div>
  )
}