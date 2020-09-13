import React from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Container, { Title } from './styles';

const Header = () => (
  <Container>
    <Title>Logo</Title>
    <Link to="/cart">
      <GiShoppingCart size={60} color="#fff" />
    </Link>
  </Container>
);

export default Header;
