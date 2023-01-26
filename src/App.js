import './estilos/App.css';
import Menu from "./modulos/1-Menu";
import Cabecalho from "./modulos/2-Cabecalho";
import Portofolio from "./modulos/3-Portofolio";
import Sobre from "./modulos/4-Sobre";
import Contato from "./modulos/5-Contato";
import Rodape from "./modulos/6-Rodape";

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
