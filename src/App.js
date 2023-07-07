import Theme from "./Theme/Theme";
import HistorialPedidos from "./ui/components/HistorialPedidos/HistorialPedidos";
import Preferences from "./ui/components/Preferences/Preferences";
import NavMenu from "./ui/components/navMenu/NavMenu";
function App() {
  return (
    <Theme>
      {/* <NavMenu /> */}
      <HistorialPedidos/>
      <Preferences/>
    </Theme>
  );
}

export default App;
