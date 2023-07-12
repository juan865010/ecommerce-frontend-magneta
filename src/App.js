import Theme from "./Theme/Theme";
import NavMenu from "./ui/components/navMenu/NavMenu";
//import Opinions from "./ui/components/opinions/Opiniones"
import Opinions from "./ui/components/opinions/Listaopinion"
function App() {
  return (
    <Theme>
      {/*<NavMenu />*/}
      <Opinions />
    </Theme>
  );
}

export default App;
