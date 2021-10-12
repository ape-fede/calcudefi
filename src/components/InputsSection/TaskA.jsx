import React from 'react';
import {Grid} from '@material-ui/core';
import TokenCombo from './TokenCombo';
import DateAndTimePickers from '../DateAndTimePickers';
import {makeStyles} from '@material-ui/core';
import {style} from './styles';
const useStyles = makeStyles(style);

export const TaskA = props => {
  const {
    starterTokens,
    setStarterTokens,
    setStartDate,
    finalTokens,
    setFinalTokens,
    setFinalDate,
    apr,
    theme,
  } = props;

  const classes = useStyles();

  return (
    <div className={classes.borders}>
      <Grid container>
        <Grid container item xs={12} className={classes.centered}>
          <p>Paso 2: Complete los campos indicados</p>
        </Grid>
      </Grid>
      <Grid container direction='row' justifyContent='center' spacing={3}>
        <Grid container item xs={12} sm={6} justifyContent={'center'}>
          <TokenCombo
            tokens={starterTokens}
            setTokens={setStarterTokens}
            label={'Tokens depositados'}
            autoFocus={true}
            theme={theme}
          />
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent={'center'}>
          <DateAndTimePickers id={'start'} setStartDate={setStartDate} />
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent={'center'}>
          <TokenCombo
            tokens={finalTokens}
            setTokens={setFinalTokens}
            label={'Tokens Finales'}
            autoFocus={false}
            theme={theme}
          />
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent={'center'}>
          <DateAndTimePickers id={'final'} setFinalDate={setFinalDate} />
        </Grid>
        <Grid
          container
          item
          xs={12}
          className={classes.centered}
          direction='column'
          style={{marginBottom: 15, padding: 0}}>
          <p className={classes.resultTitle}>APR</p>
          <p className={classes.resultSub}>{apr.TAPR}%</p>
        </Grid>
      </Grid>
    </div>
  );
};
