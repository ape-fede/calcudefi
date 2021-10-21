export const style = {
  borders: {
    margin: '1em !important',
    borderRadius: '10px !important',
    boxShadow: '0px 0px 10px 5px grey !important',
  },
  input: {
    border: 'none !important',
    margin: '5px 0px',
    fontSize: 18,
    fontWeight: 500,
    '&:focus': {
      outline: 'none',
    },
    backgroundColor: 'transparent',
    width: '95%',
    textAlign: 'right',
  },
  container: {
    width: '100%',
    borderRadius: '10px !important',
    backgroundColor: 'rgb(158 167 170 / 8%)',
    boxShadow: 'rgb(158 167 170 / 60%) 0px 2px 2px -1px inset',
    padding: 5,
  },
  btn: {
    padding: 0,
    width: '100%',
    height: '100%',
    minWidth: 'unset',
  },
  datePicker: {
    border: 0,
    outline: 'unset',
    '&:focus': {
      outline: 'none',
      border: 0,
    },
    '&:hover': {
      outline: 'none !important',
      border: '0',
    },
    width: '100%',
  },
  removeBorder: {
    border: 0,
  },
  resultTitle: {
    fontSize: '35px',
    fontWeight: 800,
    margin: 0,
    lineHeight: 1,
    textAlign: 'center',
  },
  resultSub: {
    fontSize: '25px',
    fontWeight: 800,
    margin: 0,
    lineHeight: 1,
    textAlign: 'center',
  },
  resultUsd: {
    fontSize: '15px',
    fontWeight: 500,
    margin: 0,
    lineHeight: 1,
    textAlign: 'center',
  },
  centered: {
    justifyContent: 'center',
    textAlign: 'center',
  },
};
