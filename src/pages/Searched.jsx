import { motion } from "framer-motion";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { REACT_KEY } from "../key";
import { useEffect, useState } from "react";

function Searched() {
  const { searchs } = useParams();
  const [search, setSearch] = useState([]);

  useEffect(() => {
    getSearched(searchs);
  }, [searchs]);
  const getSearched = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_KEY}&number=9&query=${name}`
    );
    const data = await api.json();
    setSearch(data.results);
  };

  return (
    <Grid>
      {search.map((e) => (
        <Card key={e.id}>
          <Link to={'/repice/' + e.id}>
          <img src={e.image} alt={e.title} />
          <p>{e.title}</p>
          </Link>
        </Card>
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
