import { ChangeEventHandler } from 'react';
import { TextField } from '@mui/material';
import { TMUIInputFieldVariant } from 'schemas/ui_d';

interface IInputProps {
  id: string;
  label: string;
  type?: string;
  variant?: TMUIInputFieldVariant;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  inputProps: {
    'data-testid': string;
  };
}

const Input: React.FC<IInputProps> = ({
  id,
  label,
  type = 'text',
  variant = 'standard',
  handleInputChange,
  value = '',
  inputProps,
}) => (
  <TextField
    id={id}
    label={label}
    type={type}
    variant={variant}
    onChange={handleInputChange}
    value={value}
    inputProps={inputProps}
  />
);

export default Input;
