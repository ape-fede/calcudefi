import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {style} from './InputsSection/styles';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles(style);

export default function TokenAPR(props) {
  const classes = useStyles();
  const {apr, setApr} = props;

  const handleAPRChange = event => {
    let value = event.target.value;
    if (value) {
      setApr(prevState => {
        if (prevState.TAPR === 0) {
          return {TAPR: value.split('0')[1]};
        } else {
          return {...prevState, TAPR: value};
        }
      });
      event.preventDefault();
    } else {
      setApr(() => {
        return {TAPR: 0};
      });
    }
  };

  return (
    <Grid container direction='row' style={{width: 240}}>
      <Grid item xs={12}>
        <p style={{margin: 0, padding: '0px 10px'}}>APR</p>
      </Grid>
      <Grid container className={classes.container}>
        <form noValidate autoComplete='off' style={{width: '100%'}}>
          <TextField
            id='standard-basic'
            value={apr.TAPR}
            onChange={event => {
              handleAPRChange(event);
            }}
            placeholder={'0 %'}
            variant='outlined'
            InputProps={{classes: {root: classes.datePicker, notchedOutline: classes.removeBorder}}}
            inputProps={{style: {textAlign: 'right'}}}
            style={{width: '100%'}}
          />
        </form>
      </Grid>
    </Grid>
  );
}
