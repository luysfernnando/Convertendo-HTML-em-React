import './estilos/App.css';
import Menu from "./Menu";
import Cabecalho from "./Cabecalho";
import Portofolio from "./Portofolio";
import Sobre from "./Sobre";
//import Site from "./Site";

function App() {
  return (
    <div className="App">
    <Menu />
    <Cabecalho />
    <Portofolio />
    <Sobre />
    </div>
  );
}

export default App;
