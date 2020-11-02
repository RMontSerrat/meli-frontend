import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useFetchProduct } from '~/hooks';
import { fetchProduct } from '~/services';
import { Container, Screen } from '~/components/templates';
import { HeaderSearch, ProductDetails } from '~/components/organisms';

const Items = ({ initialData }) => {
  const route = useRouter();
  const { query: { id } = {} } = route;
  const { loading = true, item } = useSelector((state) => state.item);

  useFetchProduct(id, initialData);

  return (
    <Screen>
      <HeaderSearch />
      <Container variant="column">
        {loading || !item ? (
          <span>Carregando....</span>
        ) : (
          <div>
            <ProductDetails
              condition={item.condition}
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
          </div>
        )}
      </Container>
    </Screen>
  );
};

export async function getServerSideProps({ query: { id } }) {
  const { item: data } = await fetchProduct(id);
  return { props: { initialData: data } };
}

export default Items;
