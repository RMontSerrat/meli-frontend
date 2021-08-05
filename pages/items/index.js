/* global window */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useProducts } from '~/hooks';
import { withTranslation } from '~/i18n';
import { fetchProducts } from '~/services';
import { Screen } from '~/components/templates';
import { Breadcrumb } from '~/components/molecules';
import { ProductsList } from '~/components/organisms';
import { Loading } from '~/components/atoms';

const Items = ({ initialData, t }) => {
  const route = useRouter();
  const { query: { q } = {} } = route;
  const { loading, data } = useProducts(q, initialData);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window?.localStorage?.setItem('currentSearch', q);
    }
  }, [q]);

  return (
    <Screen title={t('h1')}>
      <>
        {loading && <Loading />}
        {!loading && (data.items.length > 0 ? (
          <>
            {data?.categories && <Breadcrumb items={data.categories} />}
            <ProductsList items={data.items} />
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
  t: PropTypes.func.isRequired,
};

export async function getServerSideProps({ query: { q } }) {
  const data = await fetchProducts(q);
  return { props: { initialData: data } };
}

export default withTranslation('common')(Items);
