import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useFetchProducts } from '~/hooks';
import { fetchProducts } from '~/services';
import { Container, Screen } from '~/components/templates';
import { HeaderSearch } from '~/components/organisms';
import { Breadcrumb, ProductCard } from '~/components/molecules';
import List from '~/components/organisms/List/List';
import { Card } from '~/components/atoms';

const Items = ({ initialData }) => {
  const route = useRouter();
  const { query: { q } = {} } = route;
  const { loading = true, result } = useSelector((state) => state.search);

  useFetchProducts(q, initialData);

  const handleClickProduct = (id) => {
    route.push(`/items/${id}`);
  };

  return (
    <Screen>
      <HeaderSearch />
      <Container variant="column">
        {loading || !result ? (
          <span>Carregando....</span>
        ) : (
          <div>
            {result.categories && <Breadcrumb items={result.categories} />}
            <Card>
              <List>
                {result.items.map((item) => (
                  <ProductCard
                    cityName={item.address.city_name}
                    condition={item.condition}
                    freeShipping={item.free_shipping}
                    onClick={() => handleClickProduct(item.id)}
                    imgUrl={item.picture}
                    name={item.title}
                    price={{
                      currency: item.price.currency,
                      amount: item.price.amount,
                      decimals: item.price.decimals,
                    }}
                  />
                ))}
              </List>
            </Card>
          </div>
        )}
      </Container>
    </Screen>
  );
};

export async function getServerSideProps({ query: { q } }) {
  const data = await fetchProducts(q);
  return { props: { initialData: data } };
}

export default Items;
