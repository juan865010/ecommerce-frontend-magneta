import Theme from "./Theme/Theme";
import ordersHistory from "./ui/components/ordersHistory/ordersHistory";
import Preferences from "./ui/components/orderPreferences/orderPreferences";
import NavMenu from "./ui/components/navMenu/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import Cliente from "./Cliente"
import PurchaseConfirmation from "./ui/components/PurchaseConfirmation/PurchaseConfirmation";

function App() {
  return (
    <Theme>
      <ordersHistory/>
      <NavMenu />
      <Cliente/>
    <PurchaseConfirmation/>
    </Theme>
  );
}

export default App
