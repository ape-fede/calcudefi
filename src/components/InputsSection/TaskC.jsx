import React, {useContext, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import TokenCombo from './TokenCombo';
import DateAndTimePickers from '../DateAndTimePickers';
import TokenAPR from '../TokenAPR';
import {makeStyles} from '@material-ui/core';
import {style} from './styles';
import {round} from '../TasksFunctions';
import PricesContext from '../context/PricesContext';
const useStyles = makeStyles(style);

export const TaskC = props => {
  const {
    starterTokens,
    setStarterTokens,
    setStartDate,
    finalTokens,
    setFinalDate,
    apr,
    setApr,
    theme,
  } = props;
  const classes = useStyles();
  const {currentPrices} = useContext(PricesContext);

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
            label={'Tokens Iniciales'}
            autoFocus={true}
            theme={theme}
          />
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent={'center'}>
          <DateAndTimePickers id={'start'} setStartDate={setStartDate} />
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent={'center'}>
          <TokenAPR apr={apr} setApr={setApr} aprDisabledState={false} />
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent={'center'}>
          <DateAndTimePickers id={'final'} setFinalDate={setFinalDate} />
        </Grid>
        <Grid
          container
          item
          xs={12}
          className={classes.centered}
          direction={'row'}
          style={{marginBottom: 15, padding: 0}}>
          <Grid container item xs={6} className={classes.centered} direction='column'>
            <p className={classes.resultTitle}>TOTAL</p>
            <p className={classes.resultSub}>
              {finalTokens} {currentPrices.selectedToken}s
            </p>
            <p className={classes.resultUsd}>
              ({finalTokens ? `${round(finalTokens * currentPrices.selectedPrice)} usd` : '0 USD'})
            </p>
          </Grid>
          <Grid container item xs={6} className={classes.centered} direction='column'>
            <p className={classes.resultTitle}>PROFIT</p>
            <p className={classes.resultSub}>
              {finalTokens && starterTokens ? round(finalTokens - starterTokens) : 0}{' '}
              {currentPrices.selectedToken}s
            </p>
            <p className={classes.resultUsd}>
              (
              {finalTokens && starterTokens
                ? round((finalTokens - starterTokens) * currentPrices.selectedPrice)
                : 0}{' '}
              USD)
            </p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
