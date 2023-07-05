import Theme from "./Theme/Theme";
import NavMenu from "./ui/components/navMenu/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";

import Cliente from "./Cliente"

function App() {
  return (
    <Theme>
    <NavMenu />
   <Cliente/>
    </Theme>
    
  );
}

export default App
