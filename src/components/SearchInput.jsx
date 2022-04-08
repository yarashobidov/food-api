import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchInput() {

    const [value, setValue] = useState('')
    const navigation = useNavigate()
    const onSubmitHandler = (e) => {
        e.preventDefault()
        navigation('/searched/' + value)
        setValue('')
    }
  return (
    <div>
      <FormStyle onSubmit={onSubmitHandler}>
        <div>
          <FaSearch></FaSearch>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
      </FormStyle>
    </div>
  );
}

const FormStyle = styled.form`
  margin: 0rem 20rem;
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
`;

export default SearchInput;
