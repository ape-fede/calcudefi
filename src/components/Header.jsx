import React from 'react';
import {Button, Box} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLightbulb, faMoon} from '@fortawesome/free-solid-svg-icons';

const Header = props => {
  const {theme, setTheme} = props;

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <Box
      style={{
        textAlign: 'center',
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
      }}
      sx={
        theme === 'light'
          ? {
              background:
                'linear-gradient(90deg, hsl(240deg 7% 62%) 0%, rgb(255 255 255 / 4%) 100%);',
            }
          : {
              background: 'linear-gradient(90deg, #1b1b1b, #424242);',
            }
      }>
      <h1
        style={{
          margin: 0,
          fontWeight: 800,
          fontSize: '3em',
          fontFamily: 'kanit',
        }}>
        Calcu DeFi
      </h1>
      <p style={{margin: 0, display: 'flex', alignItems: 'flex-end', textShadow: 'none'}}>(Beta)</p>
      <Button
        style={{
          padding: '25px 0px',
          position: 'absolute',
          left: '80vw',
        }}
        onClick={changeTheme}>
        {theme === 'light' ? (
          <FontAwesomeIcon icon={faMoon} style={{fontSize: '2em'}} />
        ) : (
          <FontAwesomeIcon icon={faLightbulb} style={{fontSize: '2em'}} />
        )}
      </Button>
    </Box>
  );
};

export default Header;
