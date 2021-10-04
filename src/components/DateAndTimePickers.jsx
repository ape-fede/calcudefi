import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Grid} from '@material-ui/core';
import {style} from './InputsSection/styles';

const useStyles = makeStyles(style);

export default function DateAndTimePickers(props) {
  const classes = useStyles();
  const {setStartDate, setFinalDate, id} = props;
  const [error, setError] = useState(false);

  const handleTimeChange = event => {
    let time = event.target.value;
    if (time === '') {
      setError(true);
    } else {
      setError(false);
    }
    if (id === 'start') {
      setStartDate(time);
    }
    if (id === 'final') {
      setFinalDate(time);
    }
  };

  let tiempo = new Date();
  let minActual = tiempo.getMinutes(); //  devuelve mins en 60
  let horaActual = tiempo.getHours(); //  devuelve hora en 24
  let diaActual = tiempo.getDate(); // devuelve num = (9 =9)
  let mesActual = tiempo.getMonth() + 1; // devuelve num (0=Jan)
  let anioActual = tiempo.getFullYear(); // devuelve anio

  const corregirFormato = () => {
    if (minActual < 10) {
      minActual = `0${minActual}`;
    }
    if (horaActual < 10) {
      horaActual = `0${horaActual}`;
    }
    if (diaActual < 10) {
      diaActual = `0${diaActual}`;
    }
    if (mesActual < 10) {
      mesActual = `0${mesActual}`;
    }
  };
  corregirFormato();

  const defaultValue = `${anioActual}-${mesActual}-${diaActual}T${horaActual}:${minActual}`;

  useEffect(() => {
    if (id === 'start') {
      setStartDate(defaultValue);
    }
    if (id === 'final') {
      setFinalDate(defaultValue);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Grid container direction='row' style={{width: 240}}>
      <Grid item xs={12}>
        <p style={{margin: 0, padding: '0px 10px'}}>
          {id === 'start' ? 'Tiempo inicial' : 'Tiempo final'}
        </p>
      </Grid>
      <Grid container>
        <form noValidate>
          <TextField
            id='datetime-local'
            type='datetime-local'
            defaultValue={defaultValue}
            error={error}
            onChange={event => {
              handleTimeChange(event);
            }}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{classes: {root: classes.datePicker, notchedOutline: classes.removeBorder}}}
            variant='outlined'
          />
        </form>
      </Grid>
    </Grid>
  );
}
