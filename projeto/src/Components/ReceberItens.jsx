import React, {useState} from 'react'
import AdicionarItensCarrinho from './ItemCarrinho'

const ReceberItens = (dadosRecebidos) => {  
  const todosDados = dadosRecebidos.listaProdutos
  
  return <AdicionarItensCarrinho todosDados={todosDados} />

}
export default ReceberItens

