import Theme from "./Theme/Theme";
import NavMenu from "./ui/components/navMenu/NavMenu";
import Opinions from "./ui/components/opinions/Opiniones"
function App() {
  return (
    <Theme>
      <NavMenu />
      <Opinions />
    </Theme>
  );
}

export default App;
