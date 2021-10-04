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
        background: theme === 'light' ? 'rgb(134 186 223 / 40%)' : '#303030',
        textShadow: '3px 3px 2px #c4c5c6',
      }}>
      <p
        style={{
          margin: 0,
          fontWeight: 800,
          fontSize: 60,
          fontFamily: 'kanit',
        }}>
        Calcu DeFi
      </p>
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
