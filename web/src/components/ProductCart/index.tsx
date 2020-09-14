import React from 'react';
import Container, { Value, Image } from './styles';

interface ProductCartProps {
  image:string;
  name: string;
  price: number;
  quant: number;
}

const ProductCart: React.FC<ProductCartProps> = ({ image,name, price, quant }) => {
  return (
    <Container>
      <Image src={image}/>
      <div className="values">
        <Value>{name}</Value>
        <Value>R${price.toString().replace('.', ',')}</Value>
        <Value>Quant {quant}</Value>
      </div>
    </Container>
  );
};

export default ProductCart;
