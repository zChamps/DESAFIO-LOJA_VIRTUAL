import React from 'react'
import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import styled from 'styled-components';

import ReceberItens from './ReceberItens';
import { addProductToCart } from '../redux/cart/actions';
import { useQuery } from 'react-query';
import { queryClient } from './queryClientConfig';



const ContainerMain = styled.div`
    /* background-color:red; */
    /* min-height: 720px; */
    height:70%;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(4, 250px);
    gap: 15px;
    align-items: center;
    justify-content: center;
    padding-top:50px;
    margin-bottom:50px;
`




const ContainerProdutos = styled.div`
    /* background-color: aqua; */
    height: 330px;
    width: 250px;
    border-radius: 8px;
    /* background-color: #FFF; */
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
    display:flex;
    flex-direction: column;
    align-items:center;
    box-sizing: border-box;
    padding: 0px 25px 0 25px;
    position:relative;

    & img{
        width: 111px;
        height: 138px;
        flex-shrink: 0;
        margin: 0;
    }

    p{
        color: #2C2C2C;
        font-family: Montserrat;
        font-size: 10px;
        font-style: normal;
        font-weight: 300;
        line-height: 18px;
        text-align: justify;
    }
`

const ContainerPrecoNome = styled.div`
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1 ;   */
    display:flex;
    align-items:center;
    gap:7px;
    box-sizing: border-box;
    padding: 18px 0px 0 25px;
    width: 100%;
    margin:0;
    
    & h3{
        color: #2C2C2C;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        width:50%;
        margin: 0;
    }
    
    p{
        width: 64px;
        height: 26px;
        border-radius: 5px;
        background: #373737;
        color: #FFF;
        font-family: Montserrat;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: 15px;
        text-align:center;
        padding-top:6px;
        box-sizing:border-box;
        margin: 0;
    }

`
const BuyButton = styled.div`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    border-radius: 0px 0px 8px 8px;
    background-color: #0F52BA;
    height: 31.907px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    position:absolute;
    bottom:0;
    cursor:pointer;
`

const fetchApiData = async () => {
    const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');
    const data = await response.json();
    return data;
  };


const MainComponent = () => {

    const [valorProduto, setValorProduto] = useState(0)
    const [listaProdutos, setListaProdutos] = useState([]);
    const url = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
    // console.log(listaProdutos)

    



    const dispatch = useDispatch()
    const handleProductClick = (dado) => {
        dispatch(addProductToCart(dado))
    }

    
    const { data, isLoading, isError } = useQuery('apiData', fetchApiData, { client: queryClient });

    if (isLoading) {
        return <p>Carregando...</p>;
      }
    
      if (isError) {
        return <p>Ocorreu um erro ao buscar os dados.</p>;
      }
      const produtosCarregados = data.products

    return (<>
        <ContainerMain>

            {produtosCarregados.map(dado => {
                
                return (
                    <ContainerProdutos key={dado.id}>
                        <img src={dado.photo} alt={dado.name} />
                        <ContainerPrecoNome>
                            <h3>{dado.name}</h3>
                            <p>{dado.price}</p>
                        </ContainerPrecoNome>
                        <p>{dado.description}</p>
                        <BuyButton onClick={() => {
                            handleProductClick(dado)
                            setValorProduto(valorProduto + dado.price)
                            }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none"><path opacity="0.737212" fillRule="evenodd" clipRule="evenodd" d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path opacity="0.737212" d="M1 4.375H13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path opacity="0.737212" d="M10 7C10 8.24264 8.82475 9.25 7.375 9.25C5.92525 9.25 4.75 8.24264 4.75 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        COMPRAR
                        </BuyButton>
                    </ContainerProdutos>
                )
            })}
            

        </ContainerMain>
        {<ReceberItens listaProdutos={listaProdutos}/>}
    </>)

}

export default MainComponent