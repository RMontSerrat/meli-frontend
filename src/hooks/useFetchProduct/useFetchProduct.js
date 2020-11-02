import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useSWR from 'swr';
import fetch from 'isomorphic-fetch';
import config from '~/config';
import { item } from '~/store/actions';

const useFetchProduct = (id, initialData) => {
  const url = `${config.apiUrl}/items/${id}`;
  const dispatch = useDispatch();
  const fetcher = (fetchUrl) => fetch(fetchUrl).then((r) => r.json());

  const handleSuccess = ({ item: data }) => {
    dispatch(item.getItemSuccess(data));
  };

  const handleError = () => {
    dispatch(item.getItemError());
  };

  useEffect(() => {
    if (!initialData) {
      dispatch(item.getItemPending());
    } else {
      dispatch(item.getItemSuccess(initialData));
    }
    return () => {
      dispatch(item.clearItem());
    };
  }, [initialData, dispatch]);

  const response = useSWR(url, fetcher, {
    onSuccess: handleSuccess,
    onError: handleError,
    initialData,
  });

  return response;
};

export default useFetchProduct;
