import { createMuiTheme, responsiveFontSizes, makeStyles, withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


const initTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#41B3A3",
        },
        secondary: {
            main: "#E27D60"
        },
    },
    typography: {
      fontFamily: ['"Merriweather"', 'serif', 'Open Sans', 'Work Sans'].join(','),
      h1: {
        fontFamily: 'Merriweather',
        fontSize: '6rem',
        fontWeight: 400,
        letterSpacing: -1.5
      },
      h2: {
        fontFamily: 'Merriweather',
        fontSize:'4rem',
        fontWeight: 300,
        letterSpacing: -0.5
      },
      h3: {
        fontFamily: 'Open Sans',
        fontSize: '3rem',
        fontWeight: 400,
        letterSpacing: 0
      },
      h4: {
        fontFamily: "Open Sans",
        fontSize: '2rem',
        fontWeight: 400,
        letterSpacing: 0.25
      },
      h5: {
        fontFamily: 'Open Sans',
        fontSize: '1.5rem',
        fontWeight: 400,
        letterSpacing: 0
      },
      h6: {
        fontFamily: 'Open Sans',
        fontSize: '1.25rem',
        fontWeight: 600,
        letterSpacing: 0.25
      },
      body1: {
        fontFamily: 'Open Sans',
        fontSize: '1.125rem',
        fontWeight: 400,
        letterSpacing: 0.5
      },
      body2: {
        fontFamily: 'Open Sans',
        fontSize: '0.875rem',
        fontWeight: 300,
        letterSpacing: 0.25
      },
      subtitle1: {
        fontFamily: 'Merriweather',
        fontSize: '1rem',
        fontWeight: 400,
        letterSpacing: 0.15
      },
      subtitle2: {
        fontFamily: 'Merriweather',
        fontSize: '0.875rem',
        fontWeight: 400,
        letterSpacing: 0
      },
      button: {
        fontFamily: 'Open Sans',
        fontSize: '1rem',
        fontWeight: 400,
        letterSpacing: 0.75
      },
      selected:{
          color: 'rgba(0,0,0,0.87)'
      },
      notSelected:{
          color: 'rgba(0,0,0,0.38)'
      },
      caption: {
        fontFamily: 'Open Sans',
        fontSize: '0.75rem',
        fontWeight: 400,
        letterSpacing: 0.4
      },
      overline: {
        fontFamily: 'Open Sans',
        fontSize: '0.625rem',
        fontWeight: 400,
        letterSpacing: 1.5
      },
    }
})
export const theme = responsiveFontSizes(initTheme);

export const useStyles = makeStyles (theme => ({
    root: {
        maxWidth:"1000px",
        margin:'0 auto'
    },
    header: {
        position: 'relative',
        padding: '1em',
        height: '64px',
    },
    mainBanner: {
        maxWidth:"1000px",
        margin:'0 auto'
    },
    socialSpacing: {
        paddingTop:'1em',
        display:'flex',
        alignItems: 'center',
        '& > * + *': {
            marginLeft: theme.spacing(5),
        },
    },
    linkedInIcon: {
        transition: '0.3s',
        fontSize:36,
        color:'#D3D3D3',
        '&:hover': {
            color:'#0077B5'
        }
    },
    githubIcon: {
        transition: '0.3s',
        fontSize:30,
        color:'#D3D3D3',
        '&:hover': {
            color:'#5C6BC0'
        }
    },
    emailIcon: {
        transition: '0.3s',
        fontSize:30,
        color:'#D3D3D3',
        '&:hover': {
            color:'#797979'
        }
    },
    featureSection: {
        height: '800px'
    },
    tagArea:{
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    projCard: {
        display: 'flex',
        justifyContent:'center'
    },
    projOverTxt: {
        color:'#212121',
        transition: '0.25s'
    },
    projOverImg: {
        // maxWidth:'50%',
        transition: '0.25s'
    },
    projOutTxt: {
        color: '#9e9e9e',
        transition: '0.25s',
        opacity:'0%'
    },
    projOutImg: {
        // maxWidth:'50%',
        transition: '0.25s',
        filter: 'grayscale(100%)',
        opacity:'20%'
    },
    button: {
        width: "140px",
        height: "36px"
    },
    buttonRounded: {
        width: "140px",
        height: "36px",
        borderRadius:"20px",
    },
    buttonRoundedOutlined: {
        height: "36px",
        borderRadius:"20px",
        background:"white",
    },
    fabStyle: {
        width: "140px",
        margin: theme.spacing(1)
    },
    test:{
        background: `url('/imgs/photoEJ2.png')`,
        width: 541,
        height: 1066,
        transition: '0.2s',
        '&:hover': {
            background:`url(/imgs/decoEJ.png)`,
        }
    },
    footer: {
        position: 'relative',
        maxWidth: '1280px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        //width: '1280px',
        height: '60px',
        margin: "auto",
        background: "#4c4c4c",
    },
    footerNav: {
        display: "grid",
        gridTemplateColumns: "repeat(7, auto)",
        gridGap: '5%',
        alignItems: "center",
        justifyItems: "stretch",
        background: "#4c4c4c",
    },
    large: {
        width: theme.spacing(9),
        height: theme.spacing(9),
        margin:"0 auto"
    },
    caption: {
        fontFamily: 'Open Sans',
        fontSize: '0.75rem',
        fontWeight: 400,
        letterSpacing: 0.4
    },
}))

export const ExpansionPanel = withStyles({
    root: {
        background: "rgb(250, 250, 250)",
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

export const ExpansionPanelSummary = withStyles({
    root: {
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        padding: "0 24px 0 0",
        minHeight: 48,
        '&$expanded': {
            minHeight: 48,
        },
    },
    content: {
        '&$expanded': {
            margin: '0px 0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

export const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiExpansionPanelDetails);
