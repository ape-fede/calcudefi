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

  useEffect(() => {
    console.log(currentPrices);
    // eslint-disable-next-line
  }, []);

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
            label={'Tokens Iniciales'}
            autoFocus={true}
            theme={theme}
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{display: 'flex', justifyContent: 'center'}}>
          <DateAndTimePickers id={'start'} setStartDate={setStartDate} />
        </Grid>
        <Grid item xs={12} sm={6} style={{display: 'flex', justifyContent: 'center'}}>
          <TokenAPR apr={apr} setApr={setApr} aprDisabledState={false} />
        </Grid>
        <Grid item xs={12} sm={6} style={{display: 'flex', justifyContent: 'center'}}>
          <DateAndTimePickers id={'final'} setFinalDate={setFinalDate} />
        </Grid>
        <Grid
          item
          xs={12}
          style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}
          direction={'row'}>
          <Grid item xs={6}>
            <p style={{fontFamily: 'mandhor', fontSize: '45px', margin: 0}}>total</p>
            <p style={{fontFamily: 'mandhor', fontSize: '25px', margin: '10px 0px'}}>
              {finalTokens.amount} {currentPrices.selectedToken}s
            </p>
            <p style={{fontFamily: 'mandhor', fontSize: '15px', margin: '10px 0px'}}>
              {finalTokens.amount
                ? `${round(finalTokens.amount * currentPrices.selectedPrice)} usd`
                : '0 USD'}
            </p>
          </Grid>
          <Grid item xs={6}>
            <p style={{fontFamily: 'mandhor', fontSize: '45px', margin: 0}}>profit</p>
            <p style={{fontFamily: 'mandhor', fontSize: '20px', margin: '10px 0px'}}>
              {finalTokens.amount && starterTokens.amount
                ? round(finalTokens.amount - starterTokens.amount)
                : 0}{' '}
              {currentPrices.selectedToken}s
            </p>
            <p style={{fontFamily: 'mandhor', fontSize: '15px', margin: '10px 0px'}}>
              {finalTokens.amount && starterTokens.amount
                ? round((finalTokens.amount - starterTokens.amount) * currentPrices.selectedPrice)
                : 0}{' '}
              usd
            </p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
