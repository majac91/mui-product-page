import {makeStyles} from "@material-ui/core";

export const pulseStyles = (props) => makeStyles({
  pulse: {
    '& .MuiBadge-badge': {
      animation: props.isClicked ? "$pulse 2s forwards" : null,
      position: 'absolute',
      right: '-5px',
      top: '-11px',
      transformOrigin: '50% 50%',
      transform: 'scale(100%, 100%)'
    },
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(0)",
      transformOrigin: 'bottom',
    },
    "40%": {
      transform: "scale(1)",
    },
    "70%": {
      transform: "scale(.5)",
    },
    "80%": {
      transform: "scale(1.25)",
    },
    "100%": {
      transform: "scale(1)",
    },
  }
});
