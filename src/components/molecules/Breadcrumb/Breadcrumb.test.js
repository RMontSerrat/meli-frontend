import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Breadcrumb from './Breadcrumb';

const defaultItems = ['Vestuário Masculino', 'Calçados', 'Tênis'];

describe('<Breadcrumb />', () => {
  test('it should mount', () => {
    render(<Breadcrumb items={defaultItems} />);

    const breadcrumb = screen.getByTestId('Breadcrumb');

    expect(breadcrumb).toBeInTheDocument();
  });

  test('snapshot', () => {
    const { asFragment } = render(
      <Breadcrumb items={defaultItems} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
