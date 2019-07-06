import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button.js';

describe('<Button/>', () => {
  const { container, rerender } = render(<Button />);

  it('Should match snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should allow to pass custom CSS classes', () => {
    rerender(<Button className="addition classes here" />);
    expect(container.firstChild.getAttribute('class')).toContain(
      'addition classes here',
    );
  });
});
