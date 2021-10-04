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
    borderRadius: '10px !important',
    backgroundColor: 'rgb(134 186 223 / 8%)',
    boxShadow: 'rgb(134 186 223 / 60%) 0px 2px 2px -1px inset',
    padding: 5,
  },
  btn: {
    padding: 0,
    width: '100%',
    height: '100%',
    minWidth: 'unset',
  },
  datePicker: {
    borderRadius: '10px !important',
    backgroundColor: 'rgb(134 186 223 / 8%)',
    boxShadow: 'rgb(134 186 223 / 60%) 0px 2px 2px -1px inset',
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
};
