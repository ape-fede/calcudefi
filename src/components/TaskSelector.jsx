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
          label='APR'
          classes={{label: classes.body}}
        />
      ) : null}
      {task === 'A' ? (
        <p>Te permite calcular cuál ha sido el rendimiento de los tokens depositados en un Pool.</p>
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
          label='Rendimiento'
          classes={{label: classes.body}}
        />
      ) : null}
      {task === 'C' ? (
        <p>
          Te permite calcular cuál sería el rendimiento de los tokens que se depositen en un Pool.
        </p>
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
          label='Tiempo necesario'
          classes={{label: classes.body}}
        />
      ) : null}
      {task === 'D' ? (
        <p>Te permite calcular cuánto tiempo demoraría juntar una cierta cantidad de Tokens.</p>
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
          label='Tokens necesarios'
          classes={{label: classes.body}}
        />
      ) : null}
      {task === 'E' ? (
        <p>
          Te permite calcular cuántos Tokens serían necesarios para juntar una cierta cantidad de
          Tokens en un determinado período de tiempo.
        </p>
      ) : null}
    </FormGroup>
  );
}
