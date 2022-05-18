import { useEffect, useState } from "react";
import styled from "styled-components";
import { REACT_KEY } from "../key";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const localPopular = localStorage.getItem("popular");
    if (localPopular) {
      setPopular(JSON.parse(localPopular));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${REACT_KEY}&number=9`
      );
      const data = await api.json();
      setPopular(data.recipes);
      localStorage.setItem("popular", JSON.stringify(data.recipes));
    }
  };

  return (
    <Wrapper>
      <h3 className="title">Popular Picks</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          breakpoints: {
            1024: { perPage: 3 },
            768: {
              perPage: 2,
            },
            500: { perPage: 1 },
          },
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {popular.map((e) => (
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
  min-height: 20rem;
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

export default Popular;
