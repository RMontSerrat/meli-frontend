import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderSearch from './HeaderSearch';

describe('<HeaderSearch />', () => {
  test('it should mount', () => {
    render(<HeaderSearch />);

    const headerSearch = screen.getByTestId('HeaderSearch');

    expect(headerSearch).toBeInTheDocument();
  });
});
