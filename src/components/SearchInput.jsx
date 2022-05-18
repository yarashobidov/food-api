import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const [value, setValue] = useState("");
  const navigation = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigation("/searched/" + value);
    setValue("");
  };
  return (
    <div>
      <FormStyle onSubmit={onSubmitHandler}>
        <div>
          <FaSearch></FaSearch>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </FormStyle>
    </div>
  );
}

const FormStyle = styled.form`
  margin: 1rem 20rem;
  div {
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
  @media screen and (max-width: 1200px) {
    margin: 1rem 18rem;
  }
  @media screen and (max-width: 1024px) {
    margin: 1rem 15rem;
  }

  @media screen and (max-width: 768px) {
    margin: 1rem 8rem;
  }

  @media screen and (max-width: 500px) {
    margin: 1rem 3rem;
    input {
      padding: 0.7rem 3rem;
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 375px) {
    margin: 1rem ;
    input {
      padding: 0.7rem 3rem;
    }
  }
`;

export default SearchInput;
