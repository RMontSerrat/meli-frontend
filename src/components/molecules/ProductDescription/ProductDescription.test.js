import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductDescription from './ProductDescription';

describe('<ProductDescription />', () => {
  test('it should mount', () => {
    render(<ProductDescription description="Description text" />);

    const productDescription = screen.getByTestId('ProductDescription');

    expect(productDescription).toBeInTheDocument();
  });

  test('snapshot', () => {
    const { asFragment } = render(
      <ProductDescription description="Description text" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render with classes', () => {
    render(
      <ProductDescription classes={{ root: 'rootClass', title: 'titleClass', content: 'contentClass' }} description="Description text" />,
    );
    const productDescription = screen.getByTestId('ProductDescription');
    const productDescriptionTitle = screen.getByTestId('ProductDescription-title');
    const productDescriptionContent = screen.getByTestId('ProductDescription-content');
    expect(productDescription.classList).toContain('rootClass');
    expect(productDescriptionTitle.classList).toContain('titleClass');
    expect(productDescriptionContent.classList).toContain('contentClass');
  });
});
