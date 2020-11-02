import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useFetchProducts } from '~/hooks';
import { fetchProducts } from '~/services';
import { Screen } from '~/components/templates';
import { Breadcrumb } from '~/components/molecules';
import { ProductsList } from '~/components/organisms';
import { Loading } from '~/components/atoms';

const Items = ({ initialData }) => {
  const route = useRouter();
  const { query: { q } = {} } = route;
  const { loading = true, result } = useSelector((state) => state.search);

  useFetchProducts(q, initialData);

  return (
    <Screen title="Mercado Livre - Resultado de busca">
      <>
        {loading && <Loading />}
        {!loading && (result.items.length > 0 ? (
          <>
            {result.categories && <Breadcrumb items={result.categories} />}
            <ProductsList />
          </>
        ) : (
          <h3>Sem resultados de busca</h3>
        ))}
      </>
    </Screen>
  );
};

Items.propTypes = {
  initialData: PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.string),
    items: PropTypes.arrayOf(PropTypes.shape({
      address: PropTypes.shape({
        state_id: PropTypes.string,
        state_name: PropTypes.string,
        city_id: PropTypes.string,
        city_name: PropTypes.string,
      }).isRequired,
      condition: PropTypes.string.isRequired,
      description: PropTypes.string,
      sold_quantity: PropTypes.number,
      free_shipping: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      price: PropTypes.shape({
        currency: PropTypes.string,
        amount: PropTypes.number,
        decimals: PropTypes.number,
      }).isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export async function getServerSideProps({ query: { q } }) {
  const data = await fetchProducts(q);
  return { props: { initialData: data } };
}

export default Items;
