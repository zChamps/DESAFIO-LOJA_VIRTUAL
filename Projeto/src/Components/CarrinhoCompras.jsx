import React from 'react'
import styled from 'styled-components';
import AdicionarItensCarrinho from './AdicionarItensCarrinho';
import {useSelector} from "react-redux"
import rootReducer from '../redux/root-reducer';

const ContainerCarrinho = styled.div`

    width:36vw;
    height: 100%;
    background-color: #0F52BA;
    position: absolute;
    right: 0;
    top:0;
    z-index: 1;
    box-sizing:border-box;
    padding: 35px 30px 0 55px;
    color:white;
`

const ContainerTextoFechar = styled.div`
    display:flex;
    align-items: baseline;
    justify-content: space-between;

    & > p{
        color: white;
        padding: 12px;
        background-color: black;
        border-radius: 50%;
        cursor: pointer;
    }

    h1{
        color: #FFF;
        font-family: Montserrat;
        font-size: 27px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`


const ContainerProdutos = styled.div`
    display:flex;
    align-items: center;
    


    & 
    .adicionarExcluirProdutos{
        display:flex;
    }
`





const CarrinhoCompras = ({setMostrarCarrinho, mostrarCarrinho}) => {

    const {products} = useSelector(rootReducer => rootReducer.cartReducer)
    console.log(products)
  return (
    <div>

        <ContainerCarrinho>
            <ContainerTextoFechar>
                <h1>Carrinho de Compras</h1>
                <p onClick={() => {
                    setMostrarCarrinho(!mostrarCarrinho)
                    const containerCarrinho = document.querySelector(".containerCarrinhoCompras")
                    containerCarrinho.style.display = "flex"
                }}>X</p>
            </ContainerTextoFechar>

            <ContainerProdutos>
                {products.map(product => <AdicionarItensCarrinho product={product}/>)}
            </ContainerProdutos>
        </ContainerCarrinho>

    </div>
  )
}

export default CarrinhoCompras