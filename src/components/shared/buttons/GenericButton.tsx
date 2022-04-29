import { ReactNode } from 'react';
import { Button } from '@mui/material';
import { TMUIButtonType, TMUIButtonVariant } from 'schemas/ui_d';

interface IGenericButtonProps {
  variant?: TMUIButtonVariant;
  type?: TMUIButtonType;
  children: ReactNode;
  disabled?: boolean;
}

const GenericButton: React.FC<IGenericButtonProps> = ({
  variant = 'contained',
  type = 'button',
  children,
  disabled,
}) => (
  <Button variant={variant} type={type} disabled={disabled}>
    {children}
  </Button>
);

export default GenericButton;
