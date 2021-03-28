/* global window */

import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useProduct, useProducts } from '~/hooks';
import { fetchProduct } from '~/services';
import { Screen } from '~/components/templates';
import { ProductDetails } from '~/components/organisms';
import { Breadcrumb } from '~/components/molecules';
import { getProductCondition } from '~/utils';
import { Loading } from '~/components/atoms';

const Items = ({ initialData }) => {
  const route = useRouter();
  const { query: { id } = {} } = route;
  const { loading, data: { item } = {} } = useProduct(id, initialData);
  const { data: { categories } = {} } = useProducts(typeof window !== 'undefined' ? window?.localStorage?.getItem('currentSearch') : null);

  return (
    <Screen title={`Mercado Livre - ${(item?.title) || 'Detalhes do produto'}`}>
      <>
        {loading && <Loading />}
        {(!loading && item?.id) ? (
          <>
            {categories && <Breadcrumb items={categories} />}
            <ProductDetails
              condition={getProductCondition(item.condition)}
              freeShipping={item.free_shipping}
              imgUrl={item.picture}
              description={item.description}
              soldQuantity={item.sold_quantity}
              name={item.title}
              price={{
                currency: item.price.currency,
                amount: item.price.amount,
                decimals: item.price.decimals,
              }}
            />
          </>
        ) : (
          <h3>Produto não encontrado</h3>
        )}
      </>
    </Screen>
  );
};

Items.propTypes = {
  initialData: PropTypes.shape({
    item: PropTypes.shape({
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
    }),
  }).isRequired,
};

export async function getServerSideProps({ query: { id } }) {
  const data = await fetchProduct(id);
  return { props: { initialData: data } };
}

export default Items;
