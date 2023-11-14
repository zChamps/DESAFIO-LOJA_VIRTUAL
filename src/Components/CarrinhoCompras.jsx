import React, {useState} from 'react'
import styled from 'styled-components';
import ItemCarrinho from './ItemCarrinho';
import {useSelector} from "react-redux"
import rootReducer from '../redux/root-reducer';

const ContainerCarrinho = styled.div`

    width:450px;
    height: 100%;
    background-color: #0F52BA;
    box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
    position: fixed;
    right: 0;
    top:0;
    z-index: 1;
    box-sizing:border-box;
    padding: 20px 30px 0 55px;
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
        padding-bottom: 50px
    }
`


const ContainerProdutos = styled.div`
    display:flex;
    /* align-items: center; */
    flex-direction: column;
    gap: 35px;
    /* background-color: aqua; */
    height: 330px;
    overflow-y: auto;

`

const ContainerFinalizarPedido = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    & .finalizarCompra{
        padding: 15px 0;
        background: #000;
        height: 50px;
        text-align: center;
        width: 100%;
        color: #FFF;
        font-family: Montserrat;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 15px;
        display:flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;}

        .totalItens{
            display: flex;
            color: #FFF;
            font-family: Montserrat;
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 15px;
            padding: 15px 45px;
            justify-content: space-between;
            /* background-color: red; */
            width: 100%;
            box-sizing: border-box;
        }

        
    
    
`   





const CarrinhoCompras = ({setMostrarCarrinho, mostrarCarrinho}) => {
    const [valorProdutos, setValorProdutos] = useState(0)
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
                {products.map(product => <ItemCarrinho product={product} valorProdutos={valorProdutos} setValorProdutos={setValorProdutos}/>)}
            </ContainerProdutos>

            <ContainerFinalizarPedido>
                <div className='totalItens'>
                    <p>Total:</p>
                    <p>R$ {Number(valorProdutos)}</p>
                </div>
                <div className='finalizarCompra'><p>Finalizar Compra</p></div>
            </ContainerFinalizarPedido>
        </ContainerCarrinho>

    </div>
  )
}

export default CarrinhoCompras