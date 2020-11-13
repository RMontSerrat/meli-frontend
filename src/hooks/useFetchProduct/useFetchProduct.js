import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useSWR from 'swr';
import { fetchProduct, getUrlProduct } from '~/services';
import { item } from '~/store/actions';

const useFetchProduct = (id, initialData) => {
  const url = getUrlProduct(id);
  const dispatch = useDispatch();
  const fetcher = () => fetchProduct(id);

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
