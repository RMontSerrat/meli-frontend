import fetch from 'isomorphic-fetch';
import config from '~/config';

const fetchProduct = async (id) => {
  if (!id) return null;

  const url = `${config.apiUrl}/items/${id}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};

const fetchProducts = async (q) => {
  if (!q) return null;
  const url = `${config.apiUrl}/items?q=${q}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};

export {
  fetchProduct,
  fetchProducts,
};
