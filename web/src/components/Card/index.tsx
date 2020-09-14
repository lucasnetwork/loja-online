import React, { useEffect } from 'react';
import Container, { Title, Price, ContentContainer, Image } from './styles';
import Button from '~/components/Button';

interface CardProps {
  title: string;
  image: string;
  price: number;
  className: string;
  id: number;
  values: Array<{id:number;quant:number}>;
  setValue(values: Array<{id:number;quant:number}>): any;
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
    if(values.length !== 0){
      const existProduct = values.find(value => value.id === index)
      if(existProduct){
        const newProducts = values.map(value => {
          if(value.id == index){
            return {id:index,quant:++value.quant}
          }else{
            return value
          }
        })
        setValue(newProducts)
      }else{
        setValue([...values,{id:index,quant:1}])
      }
    }else{
      setValue([{id:index,quant:1}])
    }
  }
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Image src={image} />
      <ContentContainer>
        <Price>R${price.toString().replace('.', ',')}</Price>
        <Button save onClick={() => handleProduct(id)}>
          Comprar
        </Button>
      </ContentContainer>
    </Container>
  );
};

export default Card;
