import React from 'react';
import { ErrorMsg } from './ErrorMessage.styles';

const ErrorMessage: React.FC = ({ children }) => {
  return <ErrorMsg>{children}</ErrorMsg>;
};

export default ErrorMessage;
