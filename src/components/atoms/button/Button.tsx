import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import style from './Button.module.scss';

type ButtonProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const Button = (props: ButtonProps): JSX.Element => (
  <div>
    <p>Button Component</p>
    <Text field={props.fields.heading} />
    <button className={style.aButton}>click</button>
  </div>
);

export default withDatasourceCheck()<ButtonProps>(Button);
