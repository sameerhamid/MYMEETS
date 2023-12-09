import { Outlet } from "react-router-dom";
import Header from "./layout/Header";
import Wrapper from "./layout/Wrapper";

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>

    </div>
  );
}

export default App;
