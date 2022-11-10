import React from 'react';

type Props = {
  label: string;
};

const ButtomText = (props: Props): JSX.Element => {
  return <>{props.label}</>;
};

export default ButtomText;
