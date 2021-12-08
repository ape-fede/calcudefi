import React, {createContext, useState, useMemo} from 'react';
import Header from './components/Header';
import {Grid, ThemeProvider, createTheme} from '@mui/material';
import Main from './components/Main';
import SideBar from './components/SideBar/SideBar';
import {PricesProvider} from './components/context/PricesContext';
import './position.css';
import {getDesignTokens} from './components/utils/ThemeStyles';

export const ColorModeContext = createContext({toggleColorMode: () => {}});

function App() {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <PricesProvider>
          <Grid sx={{minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary'}}>
            <Header />
            <Grid container direction='row' justifyContent='center' alignItems='flex-start'>
              <Grid container item xs={11} md={2} xl={1} justifyContent={'center'}>
                <SideBar />
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='center' alignItems='flex-start'>
              <Grid container item xs={11} md={7} justifyContent={'center'}>
                <Main />
              </Grid>
            </Grid>
          </Grid>
        </PricesProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
