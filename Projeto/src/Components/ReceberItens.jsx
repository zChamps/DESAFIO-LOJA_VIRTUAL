import React, {useState} from 'react'
import AdicionarItensCarrinho from './AdicionarItensCarrinho'

const ReceberItens = (dadosRecebidos) => {  
  const todosDados = dadosRecebidos.listaProdutos
  
  return <AdicionarItensCarrinho todosDados={todosDados} />

}
export default ReceberItens

