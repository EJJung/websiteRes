import {
  createMuiTheme,
  responsiveFontSizes,
  makeStyles,
  withStyles
} from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";
// import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
// import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

export const MyAccordion = withStyles({
  root: {
    background: "#fff",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(Accordion);

export const MyAccordionSummary = withStyles({
  root: {
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    background: "#fafafa",
    minHeight: 48,
    "&$expanded": {
      minHeight: 48
    }
  },
  content: {
    "&$expanded": {
      margin: "0px 0"
    }
  },
  expanded: {}
})(AccordionSummary);

export const MyAccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(AccordionDetails);

const initTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#C2004D"
    },
    secondary: {
      main: "#36E89E"
    }
  },
  typography: {
    fontFamily: "Mukta, sans-serif, Roboto, sans-serif"
  }
});
export const theme = responsiveFontSizes(initTheme);

export const useStyles = makeStyles((theme) => ({
  rootDiv: {
    width: "100%",
    maxWidth: 500
  },
  h1: {
    fontFamily: "Mukta, sans-serif",
    fontSize: "6em",
    fontWeight: 300,
    letterSpacing: -1.5
  },
  h2: {
    fontFamily: "Roboto",
    fontSize: "3.75em",
    fontWeight: 300,
    letterSpacing: -0.5
  },
  h3: {
    fontFamily: "Mukta, sans-serif",
    fontSize: "3em",
    fontWeight: 400
  },
  h4: {
    fontFamily: "Roboto",
    fontSize: "2.125em",
    letterSpacing: 0.25,
    fontWeight: 400,
    color: "rgba(0,0,0,0.87)"
  },
  h5: {
    fontFamily: "Roboto",
    fontSize: "1.5em",
    fontWeight: 400,
    color: "rgba(0,0,0,0.87)"
  },
  h6: {
    fontFamily: "Roboto",
    fontSize: "1.125em",
    letterSpacing: 0.15
  },
  subtitle1: {
    fontSize: "1em",
    letterSpacing: 0.15
  },
  subtitle2: {
    fontSize: "0.875em",
    letterSpacing: 0.1
  },
  a: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "1.25em",
    letterSpacing: 0.15,
    color: "#535353",
    textDecoration: "none",
    minWidth: "100px"
  },
  body1: {
    fontFamily: "Roboto,Helvetica Neue,Arial",
    fontSize: "1.125em",
    lineHeight: "28px",
    letterSpacing: 0.25,
    color: "rgba(0,0,0,0.6)"
  },
  body2: {
    fontFamily: "Roboto",
    fontSize: "0.875em",
    lineHeight: "20px",
    letterSpacing: 0.25
  },
  button: {
    fontFamily: "Roboto",
    fontSize: "0.875em",
    letterSpacing: 1.25,
    color: "#C2004D"
  },
  overline: {
    fontWeight: 500,
    fontSize: "0.625em",
    lineHeight: "16px",
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "rgba(0,0,0,0.6)"
  },
  caption: {
    fontFamily: "Roboto",
    fontSize: "0.75em",
    letterSpacing: 0.4,
    color: "rgba(0,0,0,0.6)"
  },
  box: {
    padding: "8px",
    display: "flex",
    justifyContent: "space-between"
  },
  elevation: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      width: theme.spacing(8),
      height: theme.spacing(8)
    }
  },
  ButtonUI: {
    margin: theme.spacing(1),
    borderRadius: "22px"
  },
  fab: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  profileCardRoot: {
    maxWidth: 345,
    height: 'auto'
  },
  profileImg: {
    position: 'relative',
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: '50%'
  }
}));
