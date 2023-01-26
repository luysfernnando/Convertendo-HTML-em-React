import './estilos/App.css';
import Menu from "./Menu";
import Cabecalho from "./Cabecalho";
import Portofolio from "./Portofolio";
import Sobre from "./Sobre";
import Contato from "./Contato";
import Rodape from "./Rodape";

function App() {
  return (
    <div className="App">
    <Menu />
    <Cabecalho />
    <Portofolio />
    <Sobre />
    <Contato />
    <Rodape />
    </div>
  );
}

export default App;
