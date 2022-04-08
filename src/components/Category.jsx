import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Category() {
  return (
    <List>
      <TabLink to={"/cuisine/italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </TabLink>
      <TabLink to={"/cuisine/american"}>
        <FaHamburger />
        <h4>American</h4>
      </TabLink>
      <TabLink to={"/cuisine/indian"}>
        <GiNoodles />
        <h4>Indian</h4>
      </TabLink>
      <TabLink to={"/cuisine/korean"}>
        <GiChopsticks />
        <h4>Korean</h4>
      </TabLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 20px;
`;
const TabLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  margin-right: 2rem;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  h4{
      color: white;
      font-size: 0.8rem;
  }

  svg{
      color: white;
      font-size: 1.5rem;
  }

  &.active{
      background: linear-gradient( to right, #f27121, #e94057);
      
  }
`;

export default Category;
