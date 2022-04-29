import { FormEventHandler, ReactNode } from 'react';
import './Form.css';

interface IFormProps {
  children: ReactNode[];
  handleFormSubmit: FormEventHandler<HTMLFormElement>;
}

const Form: React.FC<IFormProps> = ({ children, handleFormSubmit }) => (
  <form onSubmit={handleFormSubmit} className="form-container-flex">
    {children}
  </form>
);

export default Form;
