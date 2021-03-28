import useSWR from 'swr';
import { fetchProducts, getUrlProducts } from '~/services';

const useProducts = (q, initialData) => {
  const url = getUrlProducts(q);
  const fetcher = () => fetchProducts(q);

  const response = useSWR(url, fetcher, {
    initialData,
  });

  return response;
};

export default useProducts;
