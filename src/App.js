import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import SearchInput from "./components/SearchInput";
import styled from "styled-components";
import logo from "./images/logo.svg";

function App() {
  return (
    <div className="App">
      <Router>
        <Logo to={`/`}>
          <img src={logo} alt={logo} />
        </Logo>
        <SearchInput />
        <Category />
        <Pages />
      </Router>
    </div>
  );
}

const Logo = styled(NavLink)`
width: 60px;
height: 60px;
  font-size: 2rem;
  font-weight: 600;
  display: block;
`;

export default App;
