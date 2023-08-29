import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Purchase from "./pages/Purchase";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <NavBar>
        <Routes>
          <Route path="/*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchase" element={<Purchase />} />
        </Routes>
      </NavBar>
    </Router>
  );
};

export default App;
