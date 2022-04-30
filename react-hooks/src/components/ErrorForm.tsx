import React, { FC, useContext } from 'react';
import { ContextCard } from '../service/context';

const ErrorForm: FC = (props) => {
  const { card } = useContext(ContextCard);
  console.log(card);

  return <div style={{ color: 'red' }}>{props.children}</div>;
};

export default ErrorForm;
