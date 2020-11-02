import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ProductCard, List } from '~/components/molecules';
import { Card } from '~/components/atoms';

const ProductsList = () => {
  const route = useRouter();
  const { result: { items = [] } = {} } = useSelector((state) => state.search);

  const handleClickProduct = (id) => {
    route.push(`/items/${id}`);
  };

  return (
    <Card>
      <List>
        {items.map((item) => (
          <ProductCard
            cityName={item.address.city_name}
            key={item.id}
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
  );
};
export default ProductsList;
