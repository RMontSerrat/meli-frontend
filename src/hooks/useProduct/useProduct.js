import useSWR from 'swr';
import { fetchProduct, getUrlProduct } from '~/services';

const useProduct = (id, initialData) => {
  const url = getUrlProduct(id);
  const fetcher = () => fetchProduct(id);

  const response = useSWR(url, fetcher, {
    initialData,
  });

  return response;
};

export default useProduct;
