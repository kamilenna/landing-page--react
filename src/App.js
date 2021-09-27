/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import './responsivo.css';
import Header from './componentes/Header';
import Slide from './componentes/Slide';
import NavProdutos from './componentes/navProdutos';
import Produtos from './componentes/Produtos'
import Footer from './componentes/Footer';
import { ExpandLess } from '@material-ui/icons';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slide/>
      <NavProdutos/>
      <Produtos/>
      <Footer/>
      <a id="back-top" href="#"><ExpandLess id="icon-back"/></a>
    </div>
  );
}

export default App;
