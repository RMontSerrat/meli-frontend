import fetch from 'isomorphic-fetch';
import config from '~/config';

const getUrlProduct = (id) => `${config.apiUrl}/items/${id}`;
const getUrlProducts = (q) => `${config.apiUrl}/items?q=${q}`;

const fetchProduct = async (id) => {
  if (!id) return null;

  const url = getUrlProduct(id);

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
  const url = getUrlProducts(q);

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};

export {
  getUrlProduct,
  getUrlProducts,
  fetchProduct,
  fetchProducts,
};
