import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderSearch from './HeaderSearch';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('<HeaderSearch />', () => {
  test('it should mount', () => {
    useRouter.mockImplementationOnce(() => ({
      query: { q: 'tenis' },
    }));

    render(<HeaderSearch />);

    const headerSearch = screen.getByTestId('HeaderSearch');

    expect(headerSearch).toBeInTheDocument();
  });
});
