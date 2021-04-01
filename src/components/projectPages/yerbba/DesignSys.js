import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  theme,
  useStyles,
  MyAccordion,
  MyAccordionSummary,
  MyAccordionDetails
} from "../../../style/YerbbaSample";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Box,
  Divider,
  Paper,
  Button,
  IconButton,
  Fab,
  Radio,
  RadioGroup,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  Switch,
  Tabs,
  Tab,
  AppBar
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NavigationIcon from "@material-ui/icons/Navigation";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const Styles1 = makeStyles({
  labelEdit: {
    height: 'auto',
    left: 'auto',
    transform: 'none'
  },
});

function RadioButtonsGroup() {
  const classes = Styles1();
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="female"
          control={<Radio color="primary" />}
          label="Female"
          className={classes.labelEdit}
        />
        <FormControlLabel
          value="male"
          control={<Radio color="primary" />}
          label="Male"
          className={classes.labelEdit}
        />
        <FormControlLabel
          value="other"
          control={<Radio color="primary" />}
          label="Other"
          className={classes.labelEdit}
        />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="(Disabled option)"
          className={classes.labelEdit}
        />
      </RadioGroup>
    </FormControl>
  );
}

function CheckboxLabels() {
  const classes = Styles1();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
          />
        }
        className={classes.labelEdit}
        label="Secondary"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        className={classes.labelEdit}
        label="Primary"
      />
      <FormControlLabel
        control={<Checkbox name="checkedC" />}
        label="Uncontrolled"
        className={classes.labelEdit}
      />
      <FormControlLabel
        disabled
        control={<Checkbox name="checkedD" />}
        label="Disabled"
        className={classes.labelEdit}
      />
      <FormControlLabel
        disabled
        control={<Checkbox checked name="checkedE" />}
        label="Disabled"
        className={classes.labelEdit}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedF}
            onChange={handleChange}
            name="checkedF"
            indeterminate
            
          />
        }
        className={classes.labelEdit}
        label="Indeterminate"
      />
    </FormGroup>
  );
}

function SwitchLabels() {
  const classes = Styles1();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
          />
        }
        className={classes.labelEdit}
        label="Secondary"
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        className={classes.labelEdit}
        label="Primary"
      />
      <FormControlLabel control={<Switch />} label="Uncontrolled" className={classes.labelEdit} />
      <FormControlLabel className={classes.labelEdit} disabled control={<Switch />} label="Disabled" />
      <FormControlLabel
        disabled
        control={<Switch checked />}
        label="Disabled"
        className={classes.labelEdit}
      />
    </FormGroup>
  );
}

const CustomizedAccordions = ({ text, setFeature }) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <MyAccordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <MyAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography variant="body1">{text["sub1"]}</Typography>
        </MyAccordionSummary>
        <MyAccordionDetails>
          <Typography variant="body1">{text["con1"]}</Typography>
        </MyAccordionDetails>
      </MyAccordion>
      <MyAccordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <MyAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography variant="body1">{text["sub2"]}</Typography>
        </MyAccordionSummary>
        <MyAccordionDetails>
          <Typography variant="body1">{text["con2"]}</Typography>
        </MyAccordionDetails>
      </MyAccordion>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
  value: PropTypes.any.isRequired
};

function BasicTabs() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Paper style={{ flexGrow: "1" }}>
      <AppBar position="static" color="default">
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          aria-label="disabled tabs example"
        >
          <Tab label="Tab1" />
          <Tab label="Disabled" disabled />
          <Tab label="Tab2" />
        </Tabs>
      </AppBar>
      <TabPanel value={selectedTab} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
        Item Three
      </TabPanel>
    </Paper>
  );
}

export const DesignSys = function() {
  const classes = useStyles();
  const [feature, setFeature] = useState("panel1");

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={6}>
          <Typography
            variant="h5"
            className={classes.h5}
            color="textSecondary"
            gutterBottom
          >
            Typography Scale
          </Typography>
          <Divider />
          <Typography variant="h1" className={classes.h1} gutterBottom>
            h1. Heading
          </Typography>
          <Typography variant="h2" className={classes.h2} gutterBottom>
            h2. Heading
          </Typography>
          <Typography variant="h3" className={classes.h3} gutterBottom>
            h3. Heading
          </Typography>
          <Typography variant="h4" className={classes.h4} gutterBottom>
            h4. Heading
          </Typography>
          <Typography variant="h5" className={classes.h5} gutterBottom>
            h5. Heading
          </Typography>
          <Typography variant="h6" className={classes.h6} gutterBottom>
            h6. Heading
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.subtitle1}
            gutterBottom
          >
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography
            variant="subtitle2"
            className={classes.subtitle2}
            gutterBottom
          >
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography variant="body1" className={classes.body1} gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="body2" className={classes.body2} gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="button" className={classes.button} gutterBottom>
            Button Text
          </Typography>
          <Typography
            variant="caption"
            className={classes.caption}
            display="block"
            gutterBottom
          >
            Caption Text
          </Typography>
          <Typography
            variant="overline"
            className={classes.overline}
            gutterBottom
            display="block"
          >
            Overline Text
          </Typography>
          <Box pb="4em" />
          <Typography
            variant="h5"
            className={classes.h5}
            color="textSecondary"
            gutterBottom
          >
            Buttons and Other Graphics
          </Typography>
          <Divider />
          <div>
            <div>
              <Button size="small" className={classes.ButtonUI}>
                Small
              </Button>
              <Button size="medium" className={classes.ButtonUI}>
                Medium
              </Button>
              <Button size="large" className={classes.ButtonUI}>
                Large
              </Button>
            </div>
            <div>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                className={classes.ButtonUI}
              >
                Small
              </Button>
              <Button
                variant="outlined"
                size="medium"
                color="primary"
                className={classes.ButtonUI}
              >
                Medium
              </Button>
              <Button
                variant="outlined"
                size="large"
                color="primary"
                className={classes.ButtonUI}
              >
                Large
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                size="small"
                color="primary"
                className={classes.ButtonUI}
              >
                Small
              </Button>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                className={classes.ButtonUI}
              >
                Medium
              </Button>
              <Button
                variant="contained"
                size="large"
                color="primary"
                className={classes.ButtonUI}
              >
                Large
              </Button>
            </div>
            <div>
              <IconButton
                aria-label="delete"
                className={classes.ButtonUI}
                size="small"
              >
                <ArrowDownwardIcon fontSize="inherit" />
              </IconButton>
              <IconButton aria-label="delete" className={classes.ButtonUI}>
                <DeleteIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="delete" className={classes.ButtonUI}>
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="delete" className={classes.ButtonUI}>
                <DeleteIcon fontSize="large" />
              </IconButton>
            </div>
            <div className={classes.fab}>
              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>
              <Fab color="secondary" aria-label="edit">
                <EditIcon />
              </Fab>
              <Fab variant="extended">
                <NavigationIcon className={classes.extendedIcon} />
                Navigate
              </Fab>
              <Fab disabled aria-label="like">
                <FavoriteIcon />
              </Fab>
            </div>
            <Box pb="24px" />
            <div>
              <RadioButtonsGroup />
            </div>
            <Box pb="24px" />
            <div>
              <CheckboxLabels />
            </div>
            <Box pb="24px" />
            <div>
              <SwitchLabels />
            </div>
          </div>
        </Grid>
        <Grid item md={6} xs={6}>
          <Typography
            variant="h5"
            className={classes.h5}
            color="textSecondary"
            gutterBottom
          >
            Color Palette
          </Typography>
          <Divider />
          <Box className={classes.box} style={{ background: "#ffffff" }}>
            <Typography variant="body2">Background</Typography>
            <Typography variant="body2">#ffffff</Typography>
          </Box>
          <Box className={classes.box} bgcolor="background.default">
            <Typography variant="body2">Light gray Background</Typography>
            <Typography variant="body2">#fafafa</Typography>
          </Box>
          <Box className={classes.box} bgcolor="action.hover">
            <Typography variant="body2">gray Background</Typography>
            <Typography variant="body2">#e8e8e8</Typography>
          </Box>
          <Box
            className={classes.box}
            bgcolor="background.paper"
            color="text.primary"
          >
            <Typography variant="body2">
              Typography High Emphasis / Black 87%
            </Typography>
          </Box>
          <Box
            className={classes.box}
            bgcolor="background.paper"
            color="text.secondary"
          >
            <Typography variant="body2">
              Typography Medium Emphasis / Black 60%
            </Typography>
          </Box>
          <Box
            className={classes.box}
            bgcolor="background.paper"
            color="text.disabled"
          >
            <Typography variant="body2">
              Typography Disabled / Black 38%
            </Typography>
          </Box>
          <Box className={classes.box} bgcolor="background.paper" />
          <Box
            className={classes.box}
            bgcolor="primary.main"
            color="info.contrastText"
          >
            <Typography variant="body2">Primary</Typography>
            <Typography variant="body2">#c2004d</Typography>
          </Box>
          <Grid container direction="column" style={{ maxHeight: "200px" }}>
            <Grid item xs={6}>
              <Box
                className={classes.box}
                style={{ background: "#4b001e" }}
                color="info.contrastText"
              >
                <Typography variant="body2">900</Typography>
                <Typography variant="body2">#4b001e</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className={classes.box}
                style={{ background: "#68002a" }}
                color="info.contrastText"
              >
                <Typography variant="body2">800</Typography>
                <Typography variant="body2">#68002a</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className={classes.box}
                style={{ background: "#890037" }}
                color="info.contrastText"
              >
                <Typography variant="body2">700</Typography>
                <Typography variant="body2">#890037</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className={classes.box}
                style={{ background: "#ac0045" }}
                color="info.contrastText"
              >
                <Typography variant="body2">600</Typography>
                <Typography variant="body2">#ac0045</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className={classes.box}
                style={{ background: "#c2004d" }}
                color="info.contrastText"
              >
                <Typography variant="body2">500</Typography>
                <Typography variant="body2">#c2004d</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className={classes.box}
                style={{ background: "#d2286c" }}
                color="info.contrastText"
              >
                <Typography variant="body2">400</Typography>
                <Typography variant="body2">#d2286c</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className={classes.box}
                style={{ background: "#dd5a8f" }}
                color="info.contrastText"
              >
                <Typography variant="body2">300</Typography>
                <Typography variant="body2">#dd5a8f</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className={classes.box}
                style={{ background: "#f296bb" }}
                color="text.primary"
              >
                <Typography variant="body2">200</Typography>
                <Typography variant="body2">#f296bb</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className={classes.box}
                style={{ background: "#f7bdd4" }}
                color="text.primary"
              >
                <Typography variant="body2">100</Typography>
                <Typography variant="body2">#f7bdd4</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className={classes.box}
                style={{ background: "#fde5ee" }}
                color="text.primary"
              >
                <Typography variant="body2">50</Typography>
                <Typography variant="body2">#fde5ee</Typography>
              </Box>
            </Grid>
          </Grid>

          <Box className={classes.box} bgcolor="background.paper" />
          <Box
            className={classes.box}
            bgcolor="secondary.main"
            color="text.primary"
          >
            <Typography variant="body2">Secondary</Typography>
            <Typography variant="body2">#36e89e</Typography>
          </Box>
          <Grid container direction="column" style={{ maxHeight: "200px" }}>
            <Grid item xs={6}>
              <Box
                className={classes.box}
                style={{ background: "#025E37" }}
                color="info.contrastText"
              >
                <Typography variant="body2">900</Typography>
                <Typography variant="body2">#025E37</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className={classes.box}
                style={{ background: "#06824D" }}
                color="info.contrastText"
              >
                <Typography variant="body2">800</Typography>
                <Typography variant="body2">#06824d</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className={classes.box}
                style={{ background: "#16AE6D" }}
                color="info.contrastText"
              >
                <Typography variant="body2">700</Typography>
                <Typography variant="body2">#16Ae6d</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className={classes.box}
                style={{ background: "#24CF86" }}
                color="info.contrastText"
              >
                <Typography variant="body2">600</Typography>
                <Typography variant="body2">#24cf86</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className={classes.box}
                style={{ background: "#36E89E" }}
                color="text.primary"
              >
                <Typography variant="body2">500</Typography>
                <Typography variant="body2">#36e89e</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className={classes.box}
                style={{ background: "#58EEB0" }}
                color="text.primary"
              >
                <Typography variant="body2">400</Typography>
                <Typography variant="body2">#58eeb0</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className={classes.box}
                style={{ background: "#86F0C4" }}
                color="text.primary"
              >
                <Typography variant="body2">300</Typography>
                <Typography variant="body2">#86f0c4</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className={classes.box}
                style={{ background: "#A7F4D5" }}
                color="text.primary"
              >
                <Typography variant="body2">200</Typography>
                <Typography variant="body2">#a7f4d5</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className={classes.box}
                style={{ background: "#D6FBEC" }}
                color="text.primary"
              >
                <Typography variant="body2">100</Typography>
                <Typography variant="body2">#d6fbec</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className={classes.box}
                style={{ background: "#EDFAF5" }}
                color="text.primary"
              >
                <Typography variant="body2">50</Typography>
                <Typography variant="body2">#edfaf5</Typography>
              </Box>
            </Grid>
          </Grid>
          <Box pb="4em" />
          <Typography
            variant="h5"
            className={classes.h5}
            color="textSecondary"
            gutterBottom
          >
            Elevation
          </Typography>
          <Divider />
          <Box className={classes.elevation}>
            <Paper elevation={0}>
              <Typography variant="caption" className={classes.caption}>
                0dp
              </Typography>
            </Paper>
            <Paper elevation={1}>
              <Typography variant="caption" className={classes.caption}>
                1dp
              </Typography>
            </Paper>
            <Paper elevation={2}>
              <Typography variant="caption" className={classes.caption}>
                2dp
              </Typography>
            </Paper>
            <Paper elevation={3}>
              <Typography variant="caption" className={classes.caption}>
                3dp
              </Typography>
            </Paper>
            <Paper elevation={4}>
              <Typography variant="caption" className={classes.caption}>
                4dp
              </Typography>
            </Paper>
            <Paper elevation={6}>
              <Typography variant="caption" className={classes.caption}>
                6dp
              </Typography>
            </Paper>
            <Paper elevation={8}>
              <Typography variant="caption" className={classes.caption}>
                8dp
              </Typography>
            </Paper>
            <Paper elevation={9}>
              <Typography variant="caption" className={classes.caption}>
                9dp
              </Typography>
            </Paper>
            <Paper elevation={12}>
              <Typography variant="caption" className={classes.caption}>
                12dp
              </Typography>
            </Paper>
            <Paper elevation={16}>
              <Typography variant="caption" className={classes.caption}>
                16dp
              </Typography>
            </Paper>
            <Paper elevation={24}>
              <Typography variant="caption" className={classes.caption}>
                24dp
              </Typography>
            </Paper>
          </Box>
          <Box pb="4em" />
          <Typography
            variant="h5"
            className={classes.h5}
            color="textSecondary"
            gutterBottom
          >
            Bar, Tabs, Expansion Panels
          </Typography>
          <Divider />
          <Box pb="24px" />
          <div>
            <BasicTabs />
          </div>
          <Box pb="24px" />
          <Paper>
            <CustomizedAccordions
              text={{
                sub1: "Panel Title 1",
                con1: "Expansion Panel 1 Contents",
                sub2: "Panel Title 2",
                con2: "Expansion Panel 2 Contents"
              }}
              setFeature={feature}
            />
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
