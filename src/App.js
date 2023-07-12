import Theme from "./Theme/Theme";
import NavMenu from "./ui/components/navMenu/NavMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Orders";
import Addproduct from "./pages/Addproduct";
import Cliente from "./pages/Client";
import Addclient from "./pages/Addclient";
import Historyclient from "./pages/Historyclient";
import Opiniones from "./pages/Opiniones";
import DetallOpinion from "./pages/DetalOpinion"
function App() {
  /*return (
    <Theme>
      <NavMenu />
    </Theme>
  );*/
	
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedidos" element={<Order />} />
        <Route path="/add-product" element={<Addproduct />} />
        <Route path="/client" element={<Cliente />} />
        <Route path="/add-client" element={<Addclient />} />
        <Route path="/history-client" element={<Historyclient />} />
        <Route path="/comentario-opiniones" element={<Opiniones />} />
        <Route path="/detalle-opinion" element={<DetallOpinion />} />
      </Routes>
    </Router>
  );
}

export default App;
