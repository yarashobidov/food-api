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
            <div
              className="text"
              dangerouslySetInnerHTML={{ __html: repice.summary }}
            ></div>
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
  display: grid;
  grid-template-columns: 44% 47%;
  justify-content: space-between;
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
  img {
    max-width: 100%;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 7rem;
    margin-bottom: 3rem;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 46% 49%;
    h2 {
      margin-bottom: 1.6rem;
    }
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 90%;
    margin-top: 5rem;
    justify-content: center;
    margin-bottom: 1rem;
    img {
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 375px) {
    grid-template-columns: 95%;
    h2 {
      font-size: 1.2em;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    margin-right: 1rem;
  }
  @media screen and (max-width: 800px) {
    padding: 1rem 1.5rem;
  }
  @media screen and (max-width: 375px) {
    padding: 0.5rem 1rem;
  }
`;
const Info = styled.div`
  .text {
    font-size: 1.5rem;
    color: rgb(56, 56, 56);
    line-height: 2.5rem;
    margin: 2rem 0;
  }
  @media screen and (max-width: 800px) {
    .text {
      margin: 1.6rem 0;
      font-size: 1.2rem;
      line-height: 2rem;
    }
  }
  @media screen and (max-width: 375px) {
    .text {
      margin: 1.2rem 0 1.6rem;
      font-size: 1rem;
      line-height: 1.7rem;
    }
  }
`;

export default Repice;
