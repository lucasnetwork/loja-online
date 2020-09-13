import React, { useContext } from 'react';
import Container from './styles';
import Card from '~/components/Card';
import { MyContext } from '~/services/context';

const Home = () => {
  const { values, setValues } = useContext(MyContext);
  return (
    <Container>
      <Card
        values={values}
        setValue={setValues}
        id={1}
        className="card"
        title="smartphone"
        price={99.99}
        image="fjsl"
      />
      <Card
        values={values}
        setValue={setValues}
        id={2}
        className="card"
        title="smartphone"
        price={99.99}
        image="fjsl"
      />
      <Card
        values={values}
        setValue={setValues}
        id={3}
        className="card"
        title="smartphone"
        price={99.99}
        image="fjsl"
      />
    </Container>
  );
};

export default Home;
