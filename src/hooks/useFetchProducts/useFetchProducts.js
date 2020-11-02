import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useSWR from 'swr';
import fetch from 'isomorphic-fetch';
import config from '~/config';
import { search } from '~/store/actions';

const useFetchProducts = (q, initialData) => {
  const url = `${config.apiUrl}/items?q=${q}`;
  const dispatch = useDispatch();
  const fetcher = (fetchUrl) => fetch(fetchUrl).then((r) => r.json());

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
  });

  return response;
};

export default useFetchProducts;
