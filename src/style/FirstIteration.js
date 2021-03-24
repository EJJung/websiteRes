import { createMuiTheme, responsiveFontSizes, makeStyles, withStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles ({
  root: {
    maxWidth:"1000px",
    margin:'0 auto'
  },
  label: {
    transform: 'perspective(1000px) translate(-50%, -50%)',
    transformStyle: 'preserve-3d',
    display: 'block',
    width: '300px',
    height: '200px',
    position: 'absolute',
    left: '50%',
    top: '50%',
    cursor: 'pointer',
    "&:hover > card": {
      transform: 'rotateX(20deg)',
      boxShadow: '0 20px 20px rgba(50, 50, 50, 0.2)'
    },
    "& :hover :checked > card": {
      transform: 'rotateX(160deg)',
      boxShadow: '0 20px 20px rgba(255, 255, 255, 0.2)'
    }
  },
  card: {
    position: 'relative',
    height: '100%',
    width: '100%',
    transformStyle: 'preserve-3d',
    transition: 'all 600 ms',
    zIndex: 20,
    "& div": {
      position: 'absolute',
      height: '100%',
      width: '100%',
      background: '#fff',
      textAlign: 'center',
      lineHeight: '200px',
      backfaceVisibility: 'hidden',
      borderRadius: '2px'
    },
    "& back": {
      background: '#222',
      color: '#fff',
      transform: "rotateX(180deg)"
    },
    "& :checked > card": {
      transform: "rotateX(180deg)"
    },
  },
  input: {
    display: 'none'
  }
})

