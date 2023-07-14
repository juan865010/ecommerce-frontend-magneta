import Theme from "./Theme/Theme";
import NavMenu from "./ui/components/navMenu/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import Cliente from "./Cliente";
import Opinions from './ui/components/opinions/List_opinion';
function App() {
  return (
    <Theme>
     <NavMenu />
     <Cliente/>
     <Opinions />
    </Theme>
    
  );
}

export default App
