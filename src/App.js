import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import SearchInput from "./components/SearchInput";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Router>
        <Logo to={`/`}>Home</Logo>
        <SearchInput />
        <Category />
        <Pages />
      </Router>
    </div>
  );
}

const Logo = styled(NavLink)`
  font-size: 2rem;
  font-weight: 600;
  display: block;
`;

export default App;
