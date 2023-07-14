import Theme from "./Theme/Theme";
import HistorialPedidos from "./ui/components/HistorialPedidos/HistorialPedidos";
import Preferences from "./ui/components/Preferences/Preferences";
import NavMenu from "./ui/components/navMenu/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import Cliente from "./Cliente"

function App() {
  return (
    <Theme>
      <HistorialPedidos/>
    <NavMenu />
   <Cliente/>
    </Theme>
  );
}

export default App
