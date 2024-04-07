import { HomeContextProvider } from "./contexts/context";
import Home from "./pages/home";

const App = () => (
  <HomeContextProvider>
    <Home />
  </HomeContextProvider>
)

export default App;
