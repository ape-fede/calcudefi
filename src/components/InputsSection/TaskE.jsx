import React from 'react';
import {Grid} from '@material-ui/core';
import TokensInput from '../TokensInput';
import TokenAPR from '../TokenAPR';
import NecessaryTime from '../NecessaryTime';

export const TaskE = props => {
  const {
    borderStyle,
    starterTokens,
    setStarterTokens,
    finalTokens,
    setFinalTokens,
    finalTokensDisabledState,
    apr,
    setApr,
    necessaryTime,
    setNecessaryTime,
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
            label={'Tokens necesarios'}
            disabledState={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{display: 'flex', justifyContent: 'center'}}>
          <TokensInput
            tokens={finalTokens}
            setTokens={setFinalTokens}
            label={'Tokens a juntar'}
            disabledState={finalTokensDisabledState}
            autoFocus={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{display: 'flex', justifyContent: 'center'}}>
          <TokenAPR apr={apr} setApr={setApr} aprDisabledState={false} />
        </Grid>
        <Grid item xs={12} sm={6} style={{display: 'flex', justifyContent: 'center'}}>
          <NecessaryTime
            necessaryTime={necessaryTime}
            setNecessaryTime={setNecessaryTime}
            label={'Tiempo (Días)'}
          />
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
