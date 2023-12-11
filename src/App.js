import { Outlet } from "react-router-dom";
import Header from "./layout/Header";
import Wrapper from "./layout/Wrapper";
import FavoriteContextProvider from "./store/favourites-context";

function App() {
  return (
    <div className="App">
      <FavoriteContextProvider>
        <Header />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </FavoriteContextProvider>
    </div>
  );
}

export default App;
