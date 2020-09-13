import React, { useEffect } from 'react';
import Container, { Title, Price, ContentContainer, Image } from './styles';
import Button from '~/components/Button';

interface CardProps {
  title: string;
  image: string;
  price: number;
  className: string;
  id: number;
  values: Array<number>;
  setValue(values: Array<number>): any;
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  price,
  id,
  values,
  setValue,
  ...rest
}) => {
  function handleProduct(index: number) {
    const newValues = values.map((value: { id: number; quant: number }) =>
      value.id === index ? { id: value.id, quant: ++value.quant } : value
    );
    setvalues(newValues);
  }
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Image src={image} />
      <ContentContainer>
        <Price>R${price.toString().replace('.', ',')}</Price>
        <Button save onClick={() => setValue([...values])}>
          Comprar
        </Button>
      </ContentContainer>
    </Container>
  );
};

export default Card;
