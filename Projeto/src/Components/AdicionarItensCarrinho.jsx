import React from 'react'
import styled from 'styled-components';
import {listaProdutos} from "./MainComponent"
import ReceberItens from './ReceberItens';

const containerProduto = styled.div`


`



const AdicionarItensCarrinho = ({product}) => {
    console.log(product)
    
    // console.log(listaPrZodutos)
    return (
        <containerProduto>
      {product &&
        product.map((produto) => (
          <div key={produto[0]}>
            <img src={produto[1]} alt={produto[2]} />
            <p>{produto[2]}</p>
            {/* Adicione mais informações conforme necessário */}
          </div>
        ))}
    </containerProduto>
    )
}

export default AdicionarItensCarrinho





/* <img src="" alt="" />
            <p></p>
            <div className='adicionarExcluirProdutos'><p>-</p><p>1</p><p>+</p></div>
            <p></p>
            </div>) */