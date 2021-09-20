import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  body: {
    fontFamily: 'kanit',
  },
});

export default function TaskSelector(props) {
  const classes = useStyles();
  const {task, setTask, resetValues, theme} = props;

  const handleChange = event => {
    if (task === event.target.name) {
      setTask(null);
      resetValues();
    } else setTask(event.target.name);
  };

  return (
    <FormGroup row={false}>
      {!task || task === 'A' ? (
        <FormControlLabel
          control={
            <Checkbox
              checked={task === 'A'}
              onChange={handleChange}
              name='A'
              color={theme === 'light' ? 'primary' : 'common'}
            />
          }
          label='APR pasado'
          classes={{label: classes.body}}
        />
      ) : null}
      {!task || task === 'B' ? (
        <FormControlLabel
          style={{fontFamily: 'kanit'}}
          control={
            <Checkbox
              checked={task === 'B'}
              onChange={handleChange}
              name='B'
              color={theme === 'light' ? 'primary' : 'common'}
              disabled={true}
            />
          }
          label='Rendimiento en USD (proximamente...)'
          classes={{label: classes.body}}
        />
      ) : null}
      {!task || task === 'C' ? (
        <FormControlLabel
          control={
            <Checkbox
              checked={task === 'C'}
              onChange={handleChange}
              name='C'
              color={theme === 'light' ? 'primary' : 'common'}
            />
          }
          label='Cuántos Tokens tendré'
          classes={{label: classes.body}}
        />
      ) : null}
      {!task || task === 'D' ? (
        <FormControlLabel
          control={
            <Checkbox
              checked={task === 'D'}
              onChange={handleChange}
              name='D'
              color={theme === 'light' ? 'primary' : 'common'}
            />
          }
          label="Cuánto demoraría juntar 'x' cantidad de Tokens"
          classes={{label: classes.body}}
        />
      ) : null}
      {!task || task === 'E' ? (
        <FormControlLabel
          control={
            <Checkbox
              checked={task === 'E'}
              onChange={handleChange}
              name='E'
              color={theme === 'light' ? 'primary' : 'common'}
            />
          }
          label="Tokens necesarios para juntar 'x' cantidad de Tokens en un período de tiempo dado"
          classes={{label: classes.body}}
        />
      ) : null}
    </FormGroup>
  );
}
