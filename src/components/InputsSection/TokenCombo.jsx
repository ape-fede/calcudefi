import React, {useEffect, useState, useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import NumberFormat from 'react-number-format';
import {style} from './styles';
import {round} from '../TasksFunctions';
import {Button} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowsAltV} from '@fortawesome/free-solid-svg-icons';
import PricesContext from '../context/PricesContext';

const useStyles = makeStyles(style);

export default function TokenCombo(props) {
  const classes = useStyles();
  const {tokens, setTokens, label, autoFocus, theme} = props;
  const [usd, setUsd] = useState(0);
  const [mainToken, setMainToken] = useState(true);
  const {currentPrices} = useContext(PricesContext);

  useEffect(() => {
    if (mainToken === true) setUsd(round(tokens * currentPrices.selectedPrice));
  }, [tokens, mainToken, currentPrices.selectedPrice]);

  useEffect(() => {
    if (mainToken === false) {
      setTokens(round(usd / currentPrices.selectedPrice));
    }
    // eslint-disable-next-line
  }, [usd, mainToken, currentPrices.selectedPrice]);

  const handleTokensChange = event => {
    if (mainToken === true) {
      if (event.target.value) {
        setTokens(prevState => {
          if (prevState === 0) {
            return event.target.value.split('0')[1];
          } else {
            return event.target.value;
          }
        });
        event.preventDefault();
      } else {
        setTokens(undefined);
      }
    } else {
      if (event.target.value) {
        setUsd(prevState => {
          if (prevState === 0) {
            return event.target.value.split('0')[1];
          } else return event.target.value;
        });
        event.preventDefault();
      } else {
        setUsd(undefined);
      }
    }
  };

  const changeUnit = event => {
    setMainToken(!mainToken);
  };

  return (
    <Grid container direction='row' style={{width: 240}}>
      <Grid item xs={12}>
        <p style={{margin: 0, padding: '0px 10px'}}>{label}</p>
      </Grid>
      <Grid container className={classes.container}>
        <Grid item xs={11}>
          <Grid container direction={'row'}>
            <Grid
              container
              direction={'row'}
              justifyContent={'flex-end'}
              style={{flexWrap: 'initial', marginRight: 5}}>
              <Grid item>
                <form noValidate autoComplete='off'>
                  <NumberFormat
                    value={mainToken ? tokens : usd}
                    onChange={event => {
                      handleTokensChange(event);
                    }}
                    autoFocus={autoFocus}
                    className={classes.input}
                    placeholder={'0.00'}
                    style={theme === 'light' ? {color: '#000'} : {color: '#fff'}}
                  />
                </form>
              </Grid>
              <Grid
                item
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: 'fit-content',
                }}>
                <p style={{margin: 0, padding: 0, fontSize: 18, fontWeight: 400}}>
                  {mainToken ? currentPrices.selectedToken : 'USD'}
                </p>
              </Grid>
            </Grid>
            <Grid xs={12}>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  textAlign: 'right',
                  marginRight: 5,
                }}>
                {tokens
                  ? mainToken
                    ? usd.toLocaleString('es-ES', {
                        minimumFractionDigits: 2,
                      })
                    : tokens
                  : '0.00'}{' '}
                {mainToken ? 'USD' : currentPrices.selectedToken}
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Button className={classes.btn} onClick={e => changeUnit()}>
            <FontAwesomeIcon
              icon={faArrowsAltV}
              style={{
                fontSize: '1.4em',
              }}
            />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
