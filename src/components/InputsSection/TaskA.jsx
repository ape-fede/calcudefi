import React from 'react';
import {Grid} from '@material-ui/core';
import TokensInput from '../TokensInput';
import DateAndTimePickers from '../DateAndTimePickers';
import TokenAPR from '../TokenAPR';

export const TaskA = props => {
  const {
    borderStyle,
    starterTokens,
    setStarterTokens,
    setStartDate,
    finalTokens,
    setFinalTokens,
    finalTokensDisabledState,
    setFinalDate,
    apr,
    setApr,
  } = props;

  return (
    <div style={borderStyle}>
      <Grid container>
        <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
          <p>Paso 2: Complete los campos indicados</p>
        </Grid>
      </Grid>
      <Grid container direction='row' justifyContent='center' spacing={3}>
        <Grid item xs={12} sm={6} style={{display: 'flex', justifyContent: 'center'}}>
          <TokensInput
            tokens={starterTokens}
            setTokens={setStarterTokens}
            label={'Tokens Iniciales'}
            disabledState={false}
            autoFocus={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{display: 'flex', justifyContent: 'center'}}>
          <DateAndTimePickers id={'start'} setStartDate={setStartDate} />
        </Grid>
        <Grid item xs={12} sm={6} style={{display: 'flex', justifyContent: 'center'}}>
          <TokensInput
            tokens={finalTokens}
            setTokens={setFinalTokens}
            label={'Tokens Finales'}
            disabledState={finalTokensDisabledState}
            autoFocus={false}
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{display: 'flex', justifyContent: 'center'}}>
          <DateAndTimePickers id={'final'} setFinalDate={setFinalDate} />
        </Grid>
        <Grid item xs={12} sm={6} style={{display: 'flex', justifyContent: 'center'}}>
          <TokenAPR apr={apr} setApr={setApr} aprDisabledState={true} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
          <p>Nota: utilizar el punto como separador decimal</p>
        </Grid>
      </Grid>
    </div>
  );
};
