import React from 'react'
import '../App.css';
import FooterContainer from '../Components/FooterContainer';
import HeaderComponent from '../Components/HeaderComponent';
import MainComponent from '../Components/MainComponent';
import { ContainerGeral } from "../Components/StyleComponents/ContainerGeral.style"
import { queryClient, QueryClientProvider, ReactQueryDevtools } from '../Components/queryClientConfig';


const Home = () => {
  return (
    <ContainerGeral>
    <HeaderComponent />
    <QueryClientProvider client={queryClient}>
      <MainComponent />
      <ReactQueryDevtools />
    </QueryClientProvider>
    <FooterContainer />
  </ContainerGeral>
  )
}

export default Home