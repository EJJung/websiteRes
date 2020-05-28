import React, { useEffect, useState } from 'react';

import { Typography, Grid, Box, Button, Grow, Divider } from '@material-ui/core';
import { useStyles } from '../../style/designScheme';
import ProjCard, { CardContents } from './ProjCard';

const Projects = () => {
  const classes = useStyles();
  const [contents, setContents] = useState(null);
  const [filteredContents, setfilteredContents] = useState(null)
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState('All')

  async function fetchMyAPI() {
    setContents(CardContents);
    setfilteredContents(CardContents);
    setLoading(true);
  }

  useEffect(() => {
    fetchMyAPI();
  }, [])

  if (!loading) {
    return ("Loading...")
  }

  var UX = contents.filter(e => e.type.includes("UX"))
  var UI = contents.filter(e => e.type.includes("UI"))
  var Development = contents.filter(e => e.type.includes("Dev"))
  var Data = contents.filter(e => e.type.includes("Data"))

  function showUX() {
    setfilteredContents(UX)
    setCurrent('UX')
  }

  function showUI() {
    setfilteredContents(UI)
    setCurrent('UI')
  }

  function showDev() {
    setfilteredContents(Development)
    setCurrent('Dev')
  }

  function showDat() {
    setfilteredContents(Data)
    setCurrent('Data')
  }
  
  function removeFilter() {
    setfilteredContents(contents);
    setCurrent('All')
  }

  return (
    <div className={classes.root}>
      <Box pt="20%" />
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={6}>
        <Grid item xs={12} md={12}>
          <Typography variant='h2' align='center' gutterBottom>Projects</Typography>
        </Grid>
        <Box pb="10%" />
        <Grid item xs={12} md={12}>
          <Button style={(current ==='All' ? {color:'#212121'}:{color:'#9e9e9e'})} onClick={() => removeFilter()}>All</Button>
          <Button style={(current ==='UX' ? {color:'#212121'}:{color:'#9e9e9e'})} onClick={() => showUX()}>UX</Button>
          <Button style={(current ==='UI' ? {color:'#212121'}:{color:'#9e9e9e'})} onClick={() => showUI()}>UI</Button>
          <Button style={(current ==='Dev' ? {color:'#212121'}:{color:'#9e9e9e'})} onClick={() => showDev()}>Development</Button>
          <Button style={(current ==='Data' ? {color:'#212121'}:{color:'#9e9e9e'})} onClick={() => showDat()}>Data Analysis</Button>
        </Grid>
        {filteredContents && filteredContents.map((content) => (
          <Grow 
            in={true}
            key={content.id+content.type}
            style={{ transformOrigin: '0 0 0' }}
            {...(current ? { timeout: 1000 } : {})}
          >
            <Grid item xs={12} md={4} key={content.id}>
              <ProjCard content={content} />
              <Box pb="10%" />
            </Grid>
            
          </Grow>
          )
        )}
      </Grid>
      <Box pt="20%" />
    </div>
  )
}

export default Projects;