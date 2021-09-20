import React, {useState, useEffect} from 'react';
import {Grid, Box} from '@material-ui/core';
import TaskSelector from './TaskSelector';
import {
  calculateAPR,
  calculateFutureTokens,
  calculateTime,
  calculateNecessaryTokens,
} from './TasksFunctions';
import Footer from './Footer';
import {TaskA} from './InputsSection/TaskA';
import {TaskC} from './InputsSection/TaskC';
import {TaskD} from './InputsSection/TaskD';
import {TaskE} from './InputsSection/TaskE';

const IstarterTokens = {
  amount: 0,
  price: Number,
};
const IfinalTokens = {
  amount: 0,
  price: Number,
};

const IAPR = {
  TAPR: 0, // Tokens APR
  USDAPR: Number, // Dolars APR
};

const borderStyle = {
  marginTop: '1.3em',
  borderRadius: '10px',
  boxShadow: '10px 11px 10px grey',
};

const Main = props => {
  const {theme} = props;

  const [starterTokens, setStarterTokens] = useState(IstarterTokens);
  const [finalTokens, setFinalTokens] = useState(IfinalTokens);
  const [finalTokensDisabledState, setFinalTokensDisabledState] = useState(false);
  const [apr, setApr] = useState(IAPR);
  const [startDate, setStartDate] = useState(null);
  const [finalDate, setFinalDate] = useState(null);
  const [task, setTask] = useState(null);
  const [necessaryTime, setNecessaryTime] = useState(null);

  const resetValues = () => {
    setStarterTokens(0);
    setFinalTokens(0);
    setFinalTokensDisabledState(false);
    setApr(prevState => {
      return {TAPR: 0};
    });
    setNecessaryTime(0);
  };

  useEffect(() => {
    if (task === 'A') {
      let apr2 = calculateAPR(starterTokens, finalTokens, startDate, finalDate);
      setApr(prevState => {
        return {TAPR: apr2};
      });
    }
  }, [task, starterTokens, finalTokens, startDate, finalDate]);

  useEffect(() => {
    if (task === 'C') {
      let futureTokens = calculateFutureTokens(starterTokens, startDate, finalDate, apr.TAPR);
      setFinalTokens(() => {
        return {amount: futureTokens};
      });
      setFinalTokensDisabledState(true);
    }
  }, [task, starterTokens, startDate, finalDate, apr.TAPR]);

  useEffect(() => {
    if (task === 'D') {
      let time = calculateTime(starterTokens.amount, finalTokens.amount, apr.TAPR);
      setNecessaryTime(time);
    }
  }, [task, starterTokens, finalTokens, apr.TAPR]);

  useEffect(() => {
    if (task === 'E') {
      let necessaryTokens = calculateNecessaryTokens(finalTokens.amount, apr.TAPR, necessaryTime);
      setStarterTokens(() => {
        return {amount: necessaryTokens};
      });
    }
  }, [task, finalTokens, apr.TAPR, necessaryTime]);

  return (
    <div style={{fontFamily: 'kanit'}}>
      <div style={borderStyle}>
        <Grid container justifyContent='center'>
          <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{marginBottom: 0}}>Paso 1: ¿Qué deseas calcular?</p>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box style={{margin: '1em'}}>
              <TaskSelector task={task} setTask={setTask} resetValues={resetValues} theme={theme} />
            </Box>
          </Grid>
        </Grid>
      </div>

      {/* PASO 2 */}

      {task === 'A' ? (
        <TaskA
          borderStyle={borderStyle}
          starterTokens={starterTokens}
          setStarterTokens={setStarterTokens}
          setStartDate={setStartDate}
          finalTokens={finalTokens}
          setFinalTokens={setFinalTokens}
          finalTokensDisabledState={finalTokensDisabledState}
          setFinalDate={setFinalDate}
          apr={apr}
          setApr={setApr}
        />
      ) : null}
      {task === 'C' ? (
        <TaskC
          borderStyle={borderStyle}
          starterTokens={starterTokens}
          setStarterTokens={setStarterTokens}
          setStartDate={setStartDate}
          finalTokens={finalTokens}
          setFinalTokens={setFinalTokens}
          finalTokensDisabledState={finalTokensDisabledState}
          setFinalDate={setFinalDate}
          apr={apr}
          setApr={setApr}
        />
      ) : null}
      {task === 'D' ? (
        <TaskD
          borderStyle={borderStyle}
          starterTokens={starterTokens}
          setStarterTokens={setStarterTokens}
          finalTokens={finalTokens}
          setFinalTokens={setFinalTokens}
          finalTokensDisabledState={finalTokensDisabledState}
          apr={apr}
          setApr={setApr}
          necessaryTime={necessaryTime}
        />
      ) : null}
      {task === 'E' ? (
        <TaskE
          borderStyle={borderStyle}
          starterTokens={starterTokens}
          setStarterTokens={setStarterTokens}
          finalTokens={finalTokens}
          setFinalTokens={setFinalTokens}
          finalTokensDisabledState={finalTokensDisabledState}
          apr={apr}
          setApr={setApr}
          necessaryTime={necessaryTime}
          setNecessaryTime={setNecessaryTime}
        />
      ) : null}
      <Grid item xs={12}>
        <Footer theme={theme} />
      </Grid>
    </div>
  );
};

export default Main;
