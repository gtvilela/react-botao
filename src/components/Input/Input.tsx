import React, { FC, InputHTMLAttributes } from 'react';
import { InputContainer } from './StyledComponents/index';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    type: string
}
const Input: FC<IProps> = ({ type, label }) => (

  <>
    {label}
    <InputContainer type={type} />
  </>
);

export default Input;
