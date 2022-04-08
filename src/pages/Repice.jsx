import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { REACT_KEY } from "../key";

function Repice() {
  const [repice, setRepice] = useState({});
  const [active, setActive] = useState("Instructions");
  const { name } = useParams();
  const getRepice = async (id) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${REACT_KEY}`
    );
    const data = await api.json();
    setRepice(data);
    console.log(data);
  };

  useEffect(() => {
    getRepice(name);
  }, [name]);
  return (
    <DetailWrapper>
      <div>
        <h2>{repice.title}</h2>
        <img src={repice.image} alt={repice.title} />
      </div>
      <Info>
        <Button
          className={active === "Instructions" ? "active" : ""}
          onClick={() => setActive("Instructions")}
        >
          Instructions
        </Button>
        <Button
          className={active === "Ingredients" ? "active" : ""}
          onClick={() => setActive("Ingredients")}
        >
          Ingredients
        </Button>
        {active === "Instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: repice.summary }}></h3>
            {/* <h3 dangerouslySetInnerHTML={{ __html: repice.instructions }}></h3> */}
          </div>
        )}

        {active === "Ingredients" && (
          <ul>
            {repice.extendedIngredients.map((e) => (
              <li key={e.id}>{e.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;
const Info = styled.div`
  margin-left: 10rem;
`;

export default Repice;
