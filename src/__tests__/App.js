import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

it('Should match snapshot', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toMatchSnapshot();
});
