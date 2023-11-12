import './App.css';
import CarrinhoCompras from './Components/CarrinhoCompras';
import FooterContainer from './Components/FooterContainer';
import HeaderComponent from './Components/HeaderComponent';
import MainComponent from './Components/MainComponent';
import {ContainerGeral} from "./Components/StyleComponents/ContainerGeral.style"

function App() {
  return (
      <ContainerGeral>
        <HeaderComponent/>
            <MainComponent/>
        <FooterContainer/>
      </ContainerGeral>
  );
}

export default App;
