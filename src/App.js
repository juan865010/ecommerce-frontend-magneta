import Theme from "./Theme/Theme";
import ScreenFr from "./ui/components/ScreenFr/ScreenFr";
import { MyContextProvider } from "./ui/components/Contexto/MyContext";
function App() {
  return (
    <Theme>
      <MyContextProvider>
      <ScreenFr></ScreenFr>
        </MyContextProvider> 
    </Theme>
  );
}

export default App;
