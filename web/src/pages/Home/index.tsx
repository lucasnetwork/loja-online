import React, {useContext,useEffect,useState } from 'react';
import Container from './styles';
import Card from '~/components/Card';
import { MyContext } from '~/services/context';
import api from '~/services/api'

const Home = () => {
  const { values, setValues } = useContext(MyContext);
  const [products,setProducts] = useState<Array<any>>([])

  useEffect(() =>{
    async function getProducts(setValues: (values:Array<any>) => any){
      const response = await api.get("/products")
      setValues(response.data)
    }
    getProducts(setProducts)
  },[])
  return (
    <Container>
      {products.map((value: {id:number;title:string;price:number;image:string}) => (
        <Card
        values={values}
        setValue={setValues}
        id={value.id}
        className="card"
        title={value.title}
        price={value.price}
        image={value.image}
      />
      ))}
    </Container>
  );
};

export default Home;
