import { useEffect, useState } from "react";
import styled from "styled-components";
import { REACT_KEY } from "../key";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {Link} from 'react-router-dom'
import "@splidejs/react-splide/css";

function Vaget() {
  const [veget, setVeget] = useState([]);
  useEffect(() => {
    getVeget();
  }, []);

  const getVeget = async () => {
    const localVeget = localStorage.getItem("veget");
    if (localVeget) {
      setVeget(JSON.parse(localVeget));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${REACT_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      setVeget(data.recipes);
      localStorage.setItem("veget", JSON.stringify(data.recipes));
    }
  };

  return (
    <Wrapper>
      <h3>Our Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {veget.map((e) => (
          <SplideSlide key={e.id}>
            <Card>
              <Link to={"/repice/" + e.id}>
                <p>{e.title}</p>
                <img src={e.image} alt={e.title} />
              </Link>
              <Gradient />
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 0;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    color: white;
    transform: translate(-50%, 0%);
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 40%;
  }
`;

const Gradient = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0) rgba(0, 0, 0, 0.5));
`;

export default Vaget;
