import React, { FC, InputHTMLAttributes } from 'react';
import { InputContainer, LabelContainer } from './StyledComponents/index';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    type?: string
}
const Input: FC<IProps> = ({ type, label, ...rest }) => (

  <>
    <label>
      <LabelContainer>{label}</LabelContainer>
      <InputContainer type={type} {...rest} />
    </label>
  </>
);

export default Input;
