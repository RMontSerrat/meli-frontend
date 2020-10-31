import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Breadcrumb from './Breadcrumb';

describe('<Breadcrumb />', () => {
  test('it should mount', () => {
    render(<Breadcrumb />);

    const breadcrumb = screen.getByTestId('Breadcrumb');

    expect(breadcrumb).toBeInTheDocument();
  });
});
