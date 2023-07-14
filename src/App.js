import Theme from "./Theme/Theme";
import ordersHistory from "./ui/components/ordersHistory/ordersHistory";
import Preferences from "./ui/components/orderPreferences/orderPreferences";
import NavMenu from "./ui/components/navMenu/NavMenu";
// import "bootstrap/dist/css/bootstrap.min.css";
import Cliente from "./Cliente"

function App() {
  return (
    <Theme>
      <ordersHistory/>
      <NavMenu />
      <Cliente/>
    </Theme>
  );
}

export default App
