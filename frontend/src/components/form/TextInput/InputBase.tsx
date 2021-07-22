import { InputBase as MuiInputBase, withStyles } from '@material-ui/core'

const InputBase = withStyles(theme => ({
  root: {
    'label + &': {
      position: 'relative',
      marginTop: theme.spacing(3),
    },
    borderRadius: 3,
    backgroundColor: '#303338',
    color: theme.palette.text.normal,
    transition: 'border-color .2s ease-in-out',
    border: '1px solid',
    borderColor: 'rgba(0,0,0,0.3)',
    '&:hover': {
      borderColor: '#040405',
    },
  },
  focused: {
    borderColor: `${theme.palette.text.link} !important`,
  },
  input: {
    padding: 14,
    height: 20,
    '&:-webkit-autofill': {
      '-webkit-box-shadow': '0 0 0 40px #303338 inset !important',
      '-webkit-text-fill-color': '#dcddde !important',
    },
    '&:-webkit-autofill:hover': {
      '-webkit-box-shadow': '0 0 0 40px #303338 inset !important',
    },
    '&:-webkit-autofill:focus': {
      '-webkit-box-shadow': '0 0 0 40px #303338 inset !important',
    },
    '&:-webkit-autofill:active': {
      '-webkit-box-shadow': '0 0 0 40px #303338 inset !important',
    },
  },
  error: {
    '& > input': {
      borderColor: `${theme.palette.error.main} !important`,
    }
  }
}))(MuiInputBase)

export default InputBase