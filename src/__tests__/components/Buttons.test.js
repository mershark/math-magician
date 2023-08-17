import React from 'react';
import { render } from '@testing-library/react';
import Button from '../../components/Buttons';

test('Button component renders correctly', () => {
  const { container } = render(<Button onClick={() => {}}>Click Me</Button>);
  expect(container).toMatchSnapshot();
});
