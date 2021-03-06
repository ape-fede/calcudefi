import React, {useContext} from 'react';
import {Grid} from '@material-ui/core';
import TokenCombo from './TokenCombo';
import TokenAPR from '../TokenAPR';
import NecessaryTime from './NecessaryTime';
import {makeStyles} from '@material-ui/core';
import {style} from './styles';
import PricesContext from '../context/PricesContext';
import {round} from '../TasksFunctions';

const useStyles = makeStyles(style);

export const TaskE = props => {
  const {
    starterTokens,
    finalTokens,
    setFinalTokens,
    apr,
    setApr,
    necessaryTime,
    setNecessaryTime,
    theme,
  } = props;
  const classes = useStyles();
  const {currentPrices} = useContext(PricesContext);

  return (
    <div className={classes.borders}>
      <Grid container>
        <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
          <p>Paso 2: Complete los campos indicados</p>
        </Grid>
      </Grid>
      <Grid container direction='row' justifyContent='center' spacing={3}>
        <Grid container item xs={12} sm={6} justifyContent='center'>
          <TokenCombo
            tokens={finalTokens}
            setTokens={setFinalTokens}
            label={'Tokens a juntar'}
            autoFocus={true}
            theme={theme}
          />
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent='center'>
          <TokenAPR apr={apr} setApr={setApr} aprDisabledState={false} />
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent='center'>
          <NecessaryTime
            necessaryTime={necessaryTime}
            setNecessaryTime={setNecessaryTime}
            label={'Tiempo (Días)'}
            theme={theme}
          />
        </Grid>
        <Grid
          item
          xs={12}
          style={{display: 'flex', justifyContent: 'center'}}
          direction={'column'}
          alignItems={'center'}>
          <p className={classes.resultTitle}>TOKENS NECESARIOS</p>
          <p className={classes.resultSub}>
            {starterTokens
              ? round(starterTokens).toLocaleString('es-ES', {
                  minimumFractionDigits: 2,
                })
              : '0'}{' '}
            {currentPrices.selectedToken}s
          </p>
        </Grid>
      </Grid>
    </div>
  );
};
