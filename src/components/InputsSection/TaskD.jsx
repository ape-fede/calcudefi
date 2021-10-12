import React from 'react';
import {Grid} from '@material-ui/core';
import TokenCombo from './TokenCombo';
import TokenAPR from '../TokenAPR';
import {makeStyles} from '@material-ui/core';
import {style} from './styles';
const useStyles = makeStyles(style);

export const TaskD = props => {
  const {
    starterTokens,
    setStarterTokens,
    finalTokens,
    setFinalTokens,
    apr,
    setApr,
    necessaryTime,
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
        <Grid container item xs={12} sm={6} justifyContent='center'>
          <TokenCombo
            tokens={starterTokens}
            setTokens={setStarterTokens}
            label={'Tokens depositados'}
            autoFocus={true}
            theme={theme}
          />
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent='center'>
          <TokenCombo
            tokens={finalTokens}
            setTokens={setFinalTokens}
            label={'Tokens a juntar'}
            autoFocus={false}
            theme={theme}
          />
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent='center'>
          <TokenAPR apr={apr} setApr={setApr} aprDisabledState={false} />
        </Grid>
        <Grid
          item
          xs={12}
          style={{display: 'flex', justifyContent: 'center', marginBottom: 15}}
          direction={'column'}
          alignItems={'center'}>
          <p className={classes.resultTitle}>DÍAS</p>
          <p className={classes.resultSub}>{necessaryTime}</p>
        </Grid>
      </Grid>
    </div>
  );
};
