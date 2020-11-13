import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useSWR from 'swr';
import { fetchProducts, getUrlProducts } from '~/services';
import { search } from '~/store/actions';

const useFetchProducts = (q, initialData) => {
  const url = getUrlProducts(q);
  const dispatch = useDispatch();
  const fetcher = () => fetchProducts(q);

  useEffect(() => {
    if (!initialData) {
      dispatch(search.getProductsPending());
    } else {
      dispatch(search.getProductsSuccess(initialData));
    }
    return () => {
      dispatch(search.clearSearch());
    };
  }, [initialData, dispatch]);

  const handleSuccess = (data) => {
    dispatch(search.getProductsSuccess(data));
  };

  const handleError = () => {
    dispatch(search.getProductsError());
  };

  const response = useSWR(url, fetcher, {
    onSuccess: handleSuccess,
    onError: handleError,
    initialData,
  });

  return response;
};

export default useFetchProducts;
