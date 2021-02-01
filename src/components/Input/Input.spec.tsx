import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

const propsInput = {
  label: 'teste_label',
};

describe('<Input>', () => {
  it('Deve renderizar o input', () => {
    render(<Input {...propsInput} />);
  });
});
