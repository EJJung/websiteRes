import React from 'react';
import PropTypes from "prop-types";

import { Typography, Grid, ThemeProvider, Tabs, Tab, Paper, Box, Avatar, Card, CardHeader, CardContent } from "@material-ui/core";
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import AdjustOutlinedIcon from '@material-ui/icons/AdjustOutlined';
import AccessibilityNewOutlinedIcon from '@material-ui/icons/AccessibilityNewOutlined';

import { Chart } from "react-google-charts";

import '../../../../style/FirstIteration.css';
import {
  theme,
  useStyles
} from "../../../../style/YerbbaSample";
import ProfileImg from '../../../../images/portfolios/YerbbaRes/profilephoto1.jpeg';
import {FlipCard} from './FlipCard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export const FirstIterate = function() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container direction='row' justify='center' spacing={2} style={{maxWidth:'1000px', margin: '0px auto 0px 4em'}} >
        <Grid item xs={5}>
          <Typography variant='body2' className={classes.body2}>* Dashboard Summary with Flip Card</Typography>
          <FlipCard />
        </Grid>
        <Grid item xs={7}>
          <Typography variant='body2' className={classes.body2} gutterBottom>* Tab Use</Typography>
          <Paper square className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              aria-label="icon label tabs example"
            >
              <Tab {...a11yProps(0)} icon={<LocalHospitalOutlinedIcon />} label="BREAST REMOVAL + RADIATION" />
              <Tab {...a11yProps(1)} icon={<AdjustOutlinedIcon />} label="HORMONAL THERAPY" />
              <Tab {...a11yProps(2)} icon={<AccessibilityNewOutlinedIcon />} label="RECOVERY" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Typography variant='body1' className={classes.body1}>Breast Removal and reconstruction surgery, and radiation therapy</Typography>
              <Typography variant='body2' className={classes.body2}>This addresses treatment of the breasts and lymph nodes. Assessment of the lymph nodes should be done with a sentinel lymph node biopsy. Further lymph node assessment depends on whether or sentinel lymph node is positive or not. Sentinel lymph node (and additional lymph node) assessment should be done regardless of the type of breast surgery she decides to have.</Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Typography variant='body1' className={classes.body1}>Hormonal therapy and radiation therapy</Typography>
              <Typography variant='body2' className={classes.body2}>The type of surgery you have is preference-based in your case. This is because you have a small tumor and a favorable breast-to-tumor ratio. In other words, your breast is large enough to accommodate breast conserving surgery (a lumpectomy) and to have a cosmetically-acceptable result.</Typography>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <Typography variant='body1' className={classes.body1}>Recovery</Typography>
              <Typography variant='body2' className={classes.body2}>If you choose to have breast conserving surgery, radiation therapy is part of the treatment plan to reduce the risk of a recurrence in the breast. If you are not interested in radiation therapy, you should not have breast conserving surgery…</Typography>
            </TabPanel>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' className={classes.body2}>* Interactive Charts</Typography>
          <Chart
            width={'100%'}
            height={'500px'}
            chartType="BubbleChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['ID', 'Date', 'Total Score', 'Care Note'],
              ['', new Date(2019, 11, 12, 3, 24), 1.67, 'Breast Cancer Diagnosis'],
              ['', new Date(2019, 3, 11, 7, 43), 2.78, 'Lab Test'],
              ['', new Date(2019, 8, 23, 11, 11), 2, 'Mammogram'],
              ['', new Date(2019, 3, 9, 18, 28), 1.7, 'Lab Test'],
              ['', new Date(2018, 8, 15, 17, 30), 1.54, 'Genomic Test'],
              ['', new Date(2020, 1, 27, 10, 54), 2.05, 'Lab Test']
            ]}
            options={{
              title: '',
              legend: 'none',
              hAxis: {
                title: '',
                viewWindow: {
                  min: new Date(2018, 5, 31, 18),
                  max: new Date(2020, 11, 3, 1)
                },
                gridlines: {
                  units: {
                    years: {
                      format: ['yyyy']
                    },
                    months: {
                      format: ['MM']
                    },
                  }
                }
              },
              vAxis: {
                title: '',
                textPosition: 'none',
                format: 'long'
              },
              sizeAxis: {
                minValue: 0,
                maxSize: 8
              },
              bubble: {
                textStyle: {
                  fontSize: 10
                }
              }
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}