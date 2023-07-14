import Theme from "./Theme/Theme";
import ordersHistory from "./ui/components/ordersHistory/ordersHistory";
import Preferences from "./ui/components/orderPreferences/orderPreferences";
import NavMenu from "./ui/components/navMenu/NavMenu";
import PurchaseConfirmation from "./ui/components/PurchaseConfirmation/PurchaseConfirmation";

import InfoFacSend from "./ui/components/infoFacSend/InfoFacSend";
import SendInitialOrder from "./ui/components/sendInitialOrder/SendInitialOrder";
import OptSend from "./ui/components/optSend/OptSend";
import ConfirmOrder from "./ui/components/confirmOrder/ConfirmOrder";
import "bootstrap/dist/css/bootstrap.min.css";
import Cliente from "./Cliente"
function App() {
  return (
    <Theme>
      <ordersHistory/>
      <NavMenu />
      <SendInitialOrder />
      <OptSend />
      <InfoFacSend />
      <ConfirmOrder />
      <Cliente/>
    <PurchaseConfirmation/>
    </Theme>
  );
}

export default App
