export const getDesignTokens = mode => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // light mode
          primary: {
            light: '#3f50b5',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
          },
          divider: '#9d9d9d',
          background: {
            default: '#efefef',
            paper: '#efefef',
          },
          bgHeader: 'linear-gradient(90deg, rgb(151, 151, 165) 0%, rgba(255, 255, 255, 0.04) 100%)',
          bgSidebar:
            'linear-gradient(151deg, rgb(151, 151, 165) 0%, rgba(255, 255, 255, 0.04) 100%)',
          text: {
            primary: '#000',
            secondary: '#000',
          },
        }
      : {
          // dark mode
          primary: {
            light: '#fff',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
          },
          divider: '#9d9d9d',
          background: {
            default: '#424242',
            paper: '#424242',
          },
          bgHeader: 'linear-gradient(90deg, rgb(27, 27, 27), rgb(66, 66, 66))',
          bgSidebar: 'linear-gradient(151deg, rgb(27, 27, 27), rgb(66, 66, 66))',
          text: {
            primary: '#fff',
            secondary: '#fff',
          },
        }),
  },
});
