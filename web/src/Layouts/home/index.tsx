import React, { FC } from 'react';
import Container from './styles';

interface HomeProps {
  children: React.ReactNode;
}

const HomeLayout: FC<HomeProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default HomeLayout;
