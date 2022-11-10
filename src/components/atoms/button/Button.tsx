import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import ButtonText from 'components/atoms/button/ButtomText';
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
    <button className={style.aButton}>
      <ButtonText label="click here"></ButtonText>
    </button>
  </div>
);

export default withDatasourceCheck()<ButtonProps>(Button);
