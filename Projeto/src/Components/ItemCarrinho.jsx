import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {listaProdutos} from "./MainComponent"
import ReceberItens from './ReceberItens';

import { removeProductFromCart } from '../redux/cart/actions';
import {useDispatch, useSelector} from "react-redux"


const ContainerProduto = styled.div`
  display:flex;
  flex-direction:column;
  position: relative;
  

  & div{
    display:flex;
    color: black;
    border-radius: 8px;
    background: #FFF;
    box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
    align-items: center;
    padding: 10px 25px;
    justify-content: space-between;
    border-radius: 4px;
    border: 0.1px solid #BFBFBF;
    background: #FFF; 
  }
  
  
  
  
  div img{
    width: 46px;
    height: 57px;
    /* flex-shrink: 0; */
  }

  div .productName{
    color: #2C2C2C;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px; /* 130.769% */
    width: 115px;
  }

  div .productPrice{
    color: #000;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px; /* 121.429% */
    
  }



  div .containerQuantidade .quantidadeProduto{
    padding: 0 5px


  }
  div .containerQuantidade p{
    font-size: 20px;
    
  }

  div .containerQuantidade p:first-of-type{
    /* background-color: aqua; */
    border-right: 0.1px solid #BFBFBF;
    padding-right: 5px;
    cursor: pointer;
    font-weight: bold;
  }

  div .containerQuantidade p:last-of-type{
    /* background-color: aqua; */
    border-left: 0.1px solid #BFBFBF;
    padding-left: 5px;
    cursor: pointer;
    font-weight: bold;
  }

  div .containerQuantidade{
    display:flex;
    padding: 0;
    /* background-color: aqua; */
    width: 80px;
    height: 40px;
    box-sizing: border-box;
    padding: 0 10px;
  }

  .closeIcon{
    padding: 5px;
    border-radius: 50%;
    background-color: black;
    color: white;
    font-size: 10px;
    position: absolute;
    top: -12px;
    right: -0px;
    cursor:pointer;
  }
`



const ItemCarrinho = ({product, setValorProdutos, valorProdutos}) => {

  const [quantProdutos, setQuantProdutos] = useState(1)
  

    product && console.log(product.name)
    // console.log(product.name)
    
    // useEffect(() => {
    //   if (product && !isNaN(product.price)) {
    //     setValorProdutos((prevValor) => prevValor + Number(product.price) * Number(quantProdutos));
    //   }
    // }, [quantProdutos, product]);

    const dispatch = useDispatch()
    const handleProductClick = (dado) => {
        dispatch(removeProductFromCart(dado))
    }


    return (
        <ContainerProduto>
      {product &&
          <div key={product.id}>
 
            
            <img src={product.photo} alt={product.name} />
            <p className='productName'>{product.name}</p>
            <div className='containerQuantidade'><p onClick={() => {
              if ( quantProdutos > 1) {setQuantProdutos(
                quantProdutos - 1)
                setValorProdutos((prevValor) => prevValor - Number(product.price))}
            }}>-</p><span className='quantidadeProduto'>{quantProdutos}</span><p onClick={
              () => {
                setQuantProdutos(quantProdutos + 1)
                setValorProdutos((prevValor = product.price) => prevValor + Number(product.price))}
            }>+</p></div>
            
            <p className='productPrice'>R$ {product.price * quantProdutos}</p>
            <p className='closeIcon' onClick={() => { handleProductClick(product) }}>X</p>
          </div>
          
          }     
    </ContainerProduto>
    )
}

export default ItemCarrinho





/* <img src="" alt="" />
            <p></p>
            <div className='adicionarExcluirProdutos'><p>-</p><p>1</p><p>+</p></div>
            <p></p>
            </div>) */