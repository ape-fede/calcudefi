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
        <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
          <p>Paso 2: Complete los campos indicados</p>
        </Grid>
      </Grid>
      <Grid container direction='row' justifyContent='center' spacing={3}>
        <Grid item xs={12} sm={6} style={{display: 'flex', justifyContent: 'center'}}>
          <TokenCombo
            tokens={starterTokens}
            setTokens={setStarterTokens}
            label={'Tokens depositados'}
            autoFocus={true}
            theme={theme}
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{display: 'flex', justifyContent: 'center'}}>
          <DateAndTimePickers id={'start'} setStartDate={setStartDate} />
        </Grid>
        <Grid item xs={12} sm={6} style={{display: 'flex', justifyContent: 'center'}}>
          <TokenCombo
            tokens={finalTokens}
            setTokens={setFinalTokens}
            label={'Tokens Finales'}
            autoFocus={false}
            theme={theme}
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{display: 'flex', justifyContent: 'center'}}>
          <DateAndTimePickers id={'final'} setFinalDate={setFinalDate} />
        </Grid>
        <Grid
          item
          xs={12}
          style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}
          direction={'column'}>
          <p style={{fontFamily: 'mandhor', fontSize: '50px', margin: 0}}>APR</p>
          <p style={{fontFamily: 'mandhor', fontSize: '40px', margin: 0}}>{apr.TAPR}%</p>
        </Grid>
      </Grid>
    </div>
  );
};
