import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Grid, Paper, Avatar, Box, InputLabel, MenuItem, FormControl, Select, Accordion, AccordionDetails, AccordionSummary, Breadcrumbs, Link } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    "& li": {
        fontSize: 12,
    }
  }
}));

const useStyles1 = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  header:{
    backgroundColor: '#e4e6f5'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const ProfileCard = function ProfileCard() {
  return (
    <Paper style={{padding:"0.75em", maxWidth:'300px'}}>
      <Grid container alignItems="center" spacing={3}>
        <Grid item justify='center' xs={2}>
          <Avatar><AccountCircleOutlinedIcon /></Avatar>
        </Grid>
        <Grid item xs={6}>
          <Box style={{borderColor:"rgba(0, 0, 0, 0.12)"}} borderRight={1}>
            <Typography variant='subtitle2'>Hi,</Typography>
            <Typography variant='body1' style={{ fontWeight: 600 }}>Clair Jones</Typography>
            <Typography variant='caption'>Female, 40s</Typography>
          </Box>
        </Grid>
        
        <Grid item xs={3} style={{ textAlign:'center' }}>
          <Typography variant='subtitle2'>4/6</Typography>
          <Typography variant='caption' style={{ fontWeight: 600 }}>Active Problems</Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

const FormLayoutExample = function FormLayoutExample() {
  const [selectedValue, setselectedValue] = React.useState('first');

  const handleValue = (event, newselectedValue) => {
    setselectedValue(newselectedValue);
  };

  return (
    <Grid container alignItems='center'>
      <Grid item xs={3}>
        <Typography variant='body2' style={{ fontWeight: 500 }}>ER</Typography>
      </Grid>
      <Grid item xs={9}>
        <ToggleButtonGroup
          value={selectedValue}
          exclusive
          onChange={handleValue}
          aria-label="text alignment"
        >
          <ToggleButton value="first" aria-label="first value">
            <Typography variant='body2' style={{ fontWeight: 500 }}>Positive</Typography>
          </ToggleButton>
          <ToggleButton value="second" aria-label="second value">
            <Typography variant='body2' style={{ fontWeight: 500 }}>Negative</Typography>
          </ToggleButton>
          <ToggleButton value="third" aria-label="third value">
            <Typography variant='body2' style={{ fontWeight: 500 }}>Unknown</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
}

function SimpleSelect() {
  const classes = useStyles();
  const [size, setSize] = React.useState('');

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <Grid container alignItems='center'>
      <Grid item xs={4}>
        <Typography variant='body2' style={{ fontWeight: 500 }}>Tumor Size</Typography>
      </Grid>
      <Grid item xs={8}>
        <FormControl variant="outlined" size='small' className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Tumor Size</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={size}
            onChange={handleChange}
            MenuProps={{ classes: { paper: classes.select } }}
            label="Tumor Size"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>&#60; 1cm</MenuItem>
            <MenuItem value={2}>2cm ~ 5cm</MenuItem>
            <MenuItem value={3}>&#62; 5cm</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

function ControlledAccordions() {
  const classes = useStyles1();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.header}
        >
          <Typography className={classes.heading}>General settings</Typography>
          <Typography className={classes.secondaryHeading}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className={classes.header}
        >
          <Typography className={classes.heading}>Users</Typography>
          <Typography className={classes.secondaryHeading}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className={classes.header}
        >
          <Typography className={classes.heading}>Advanced settings</Typography>
          <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          className={classes.header}
        >
          <Typography className={classes.heading}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function breadcrumbsHandleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function CustomSeparator() {
  const classes = useStyles2();

  return (
    <div className={classes.root}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={breadcrumbsHandleClick}>
          Material-UI
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={breadcrumbsHandleClick}>
          Core
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
    </div>
  );
}

export const SecondIterate = function () {
  return (
    <Grid container spacing={3}>
      <Grid item md={4} xs={12}>
        <Typography variant='h6' gutterBottom>Card UI</Typography>
        <ProfileCard />
        <Box pb="5%" />
      </Grid>
      <Grid item md={4} xs={12}>
        <Typography variant='h6' gutterBottom>Form Controls</Typography>
        <FormLayoutExample />
        <SimpleSelect />
        <Box pb="5%" />
        <Typography variant='h6' gutterBottom>Breadcrumbs</Typography>
        <CustomSeparator />
        <Box pb="5%" />
      </Grid>
      <Grid item md={4} xs={12}>
        <Typography variant='h6' gutterBottom>Accordion UI</Typography>
        <ControlledAccordions />
      </Grid>
    </Grid>
  )
}