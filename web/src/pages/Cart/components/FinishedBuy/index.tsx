import React from 'react';
import Container, { Text, ButtonSave } from './styles';

interface FinishedBuyProps {
  itemsCount: number;
  totalPrice: number;
}

const FinishedBuy: React.FC<FinishedBuyProps> = ({
  itemsCount,
  totalPrice,
}) => {
  return (
    <Container>
      <Text>Itens: {itemsCount}</Text>
      <Text>Valor total: R${totalPrice.toString().replace('.', ',')}</Text>
      <ButtonSave save>Fechar Pedido</ButtonSave>
    </Container>
  );
};

export default FinishedBuy;
