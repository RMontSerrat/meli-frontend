import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchBar from './SearchBar';

const stories = storiesOf('SearchBar', module);

stories.add('default', () => (
  <SearchBar />
));
