/* eslint-disable react/no-array-index-key */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import List from './List';

describe('<List />', () => {
  test('it should mount', () => {
    render(
      <List>
        {[...Array(4)].map((_, i) => <div key={i} />)}
      </List>,
    );

    const list = screen.getByTestId('List');
    expect(list).toBeInTheDocument();
  });
  test('it should mount with custom item class', () => {
    render(
      <List classes={{ item: 'itemClass' }}>
        {[...Array(4)].map((_, i) => <div key={i} />)}
      </List>,
    );

    const list = screen.getAllByTestId('List-item');
    expect(list[0].className).toContain('itemClass');
  });
});
