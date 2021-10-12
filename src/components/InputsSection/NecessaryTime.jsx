import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';
import {style} from './styles';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles(style);

export default function NecessaryTime(props) {
  const classes = useStyles();
  const {necessaryTime, setNecessaryTime, theme, label} = props;

  const handleTimeChange = event => {
    console.log(event.target.value);
    let value = event.target.value;
    if (value) {
      setNecessaryTime(prevState => {
        if (prevState === 0) {
          return value.split('0')[1];
        } else {
          return value;
        }
      });
      event.preventDefault();
    } else {
      setNecessaryTime(0);
    }
  };

  return (
    <Grid container direction='row' style={{width: 240}}>
      <Grid item xs={12}>
        <p style={{margin: 0, padding: '0px 10px'}}>{label}</p>
      </Grid>
      <form className={classes.container} noValidate autoComplete='off'>
        <NumberFormat
          value={necessaryTime}
          onChange={event => handleTimeChange(event)}
          placeholder={'0'}
          style={theme === 'light' ? {color: '#000'} : {color: '#fff'}}
          className={classes.input}
        />
      </form>
    </Grid>
  );
}
