import { FormControl, InputBaseProps, TextFieldProps } from '@material-ui/core'
import InputLabel from './InputLabel'
import InputBase from './InputBase'

export type TextInputProps = InputBaseProps & {
  name: string
  label?: string
  helperText?: React.ReactNode
}

const TextInput: React.FC<TextInputProps> = ({ 
  label,
  error,
  helperText,
  ...props
}) => {
  return (
    <FormControl fullWidth error={Boolean(error)}>
      <InputLabel shrink focused={false}>
        {label}
        {helperText && (
          <span style={{ fontStyle: 'italic' }}>
          {''} - {helperText}
          </span>
        )}
      </InputLabel>
      <InputBase fullWidth {...props} />
    </FormControl>
  )
}
export default TextInput
