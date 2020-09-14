import React, { useContext,useState,useEffect } from 'react';
import Container, { Title } from './styles';
import ProductCart from '~/components/ProductCart';
import FinishedBuy from './components/FinishedBuy';
import { MyContext } from '~/services/context';
import api from '~/services/api'

const Cart = () => {
  const { values, setValues } = useContext(MyContext);
  const [products,setProducts] = useState<Array<any>>([])

  useEffect(() =>{
    async function getProducts(setValues: (values:Array<any>) => any){
      const response = await api.get("/products")
      let filterProducts:Array<any> = []
       response.data.filter((product:{id:number}) => {
        let newProduct = {}
        values.forEach((value:{id:number,quant:number}) => {
          if(value.id === product.id){
            newProduct = {...product,quant:value.quant}
            return
          }
        })
        if(Object.keys(newProduct).length !== 0){
          filterProducts = [...filterProducts,newProduct]
        }else{
          return false
        }
      })
      setValues(filterProducts)
    }
    getProducts(setProducts)
  },[])
  return (
    <Container>
      <Title>Carrinho</Title>
      <div>
        {products.map((value: { id: number; quant: number,price:number,title:string;image:string }) => (
          <ProductCart 
            image={value.image} name={value.title} price={value.price} quant={value.quant} />
        ))}
      </div>
      <FinishedBuy itemsCount={products.reduce((prevProduct,product) => prevProduct + product.quant,0)} totalPrice={products.reduce((prevProduct,product) => prevProduct + product.price*product.quant,0)} />
    </Container>
  );
};

export default Cart;
