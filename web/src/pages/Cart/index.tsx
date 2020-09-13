import React, { useContext } from 'react';
import Container, { Title } from './styles';
import ProductCart from '~/components/ProductCart';
import FinishedBuy from './components/FinishedBuy';
import { MyContext } from '~/services/context';

const Cart = () => {
  const { values, setValues } = useContext(MyContext);
  return (
    <Container>
      <Title>Carrinho</Title>
      <div>
        {values.map((value: { id: number; quant: number }) => (
          <ProductCart name="smartphone" price={99.99} quant={value.quant} />
        ))}
      </div>
      <FinishedBuy itemsCount={values.length} totalPrice={99} />
    </Container>
  );
};

export default Cart;
