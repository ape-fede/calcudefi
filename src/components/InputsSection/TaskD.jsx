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
          <TokenCombo
            tokens={finalTokens}
            setTokens={setFinalTokens}
            label={'Tokens a juntar'}
            autoFocus={false}
            theme={theme}
          />
        </Grid>
        <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
          <TokenAPR apr={apr} setApr={setApr} aprDisabledState={false} />
        </Grid>
        <Grid
          item
          xs={12}
          style={{display: 'flex', justifyContent: 'center'}}
          direction={'column'}
          alignItems={'center'}>
          <p style={{fontFamily: 'mandhor', fontSize: '45px', margin: 0}}>tiempo necesario</p>
          <p style={{fontFamily: 'mandhor', fontSize: '25px', margin: '10px 0px'}}>
            {necessaryTime} días
          </p>
        </Grid>
      </Grid>
    </div>
  );
};
