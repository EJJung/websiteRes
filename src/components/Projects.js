import React, { useEffect, useState } from 'react';

import { Typography, Grid, Box, Button, Divider } from '@material-ui/core';
import { useStyles } from '../style/designScheme';

class PollCard extends React.Component {
  render() {
    return (
      <div>{`${this.props.poll.name} - ${this.props.poll.type}`}</div>
    )
  }
}

const dpolls = [
  {
    id: 4,
    type: ['C', 'A'],
    name: 'Test 1'
  },
  {
    id:5,
    type: ['B'],
    name: 'Test 110'
  },
  {
    id: 6,
    type: ['A','B','C'],
    name: 'Test 2'
  },
  {
    id: 7,
    type: ['A'],
    name: 'Test 3'
  },
  {
    id: 8,
    type: ['A'],
    name: 'Test 9'
  },
  {
    id: 10,
    type: ['C'],
    name: 'Test 24'
  },
  {
    id: 17,
    type: ['B'],
    name: 'Test 39'
  }
]

const Projects = () => {
  const classes = useStyles();
  const [polls, setPolls] = useState(null);
  const [filteredPolls, setfilteredPolls] = useState(null)
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState('All')
  const range = 30

  console.log(filteredPolls);

  async function fetchMyAPI() {
    let response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=1')
    const json = await response.json()
    // var data = json.filter(e => Date.parse(e.endDate) >= Date.parse(dateRange))
    setPolls(dpolls);
    setfilteredPolls(dpolls.filter(e => e.type === "A"));
    setLoading(true);
  }

  useEffect(() => {
    fetchMyAPI();
  }, [])

  if (!loading) {
    return ("Loading...")
  }

  var A = polls.filter(e => e.type.includes("A"))
  var B = polls.filter(e => e.type.includes("B"))
  var C = polls.filter(e => e.type.includes("C"))

  function showA() {
    setfilteredPolls(A)
    setCurrent('A')
  }

  function showB() {
    setfilteredPolls(B)
    setCurrent('B')
  }

  function showC() {
    setfilteredPolls(C)
    setCurrent('C')
  }
  
  function removeFiter() {
    setfilteredPolls(polls);
    setCurrent('All')
  }

  return (
    <div className={classes.root}>
      <Box pt="20%" />
      <Grid container direction="row" justify="flex-start" alignItems="center" spacing={3}>
        <Grid item xs={12} md={12}>
          <Typography variant='h2' align='center' gutterBottom>Projects</Typography>
        </Grid>
        <Box pb="10%" />
        <Grid item xs={12} md={12}>
          <Button className={classes.notSelected} onClick={() => showA()}>Button A</Button>
          <Button onClick={() => showB()}>Button B</Button>
          <Button onClick={() => showC()}>Button C</Button>
          <Button onClick={() => removeFiter()}>Remove Filter</Button>
        </Grid>
        {filteredPolls && filteredPolls.map((poll) => (
          <Grid item xs={12} md={4} key={poll.id}>
            <PollCard poll={poll} />
            <Divider />
          </Grid>
          )
        )}
      </Grid>
      <Box pt="20%" />
    </div>
  )
}

export default Projects;