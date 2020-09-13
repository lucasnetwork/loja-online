import React from 'react';
import Container, { Value, Image } from './styles';

interface ProductCartProps {
  name: string;
  price: number;
  quant: number;
}

const ProductCart: React.FC<ProductCartProps> = ({ name, price, quant }) => {
  return (
    <Container>
      <Image />
      <div className="values">
        <Value>{name}</Value>
        <Value>R${price.toString().replace('.', ',')}</Value>
        <Value>Quant {quant}</Value>
      </div>
    </Container>
  );
};

export default ProductCart;
