import React, { FC, useContext } from 'react';

const ErrorForm: FC = (props) => {
  return <div style={{ color: 'red' }}>{props.children}</div>;
};

export default ErrorForm;
