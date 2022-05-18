import { motion } from "framer-motion";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { REACT_KEY } from "../key";
import { useEffect, useState } from "react";

function Cuisine() {
  const { type } = useParams();
  const [cuisine, setCuisine] = useState([]);

  useEffect(() => {
    getCuisine(type);
  }, [type]);

  const getCuisine = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_KEY}&number=9&cuisine=${name}`
    );
    const data = await api.json();
    setCuisine(data.results);
    console.log(cuisine);
  };

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((e) => (
        <Card key={e.id}>
          <Link to={"/repice/" + e.id}>
            <img src={e.image} alt={e.title} />
            <p>{e.title}</p>
          </Link>
        </Card>
      ))}
    </Grid>
  );
}

const Grid = styled(motion.div)`
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

export default Cuisine;
