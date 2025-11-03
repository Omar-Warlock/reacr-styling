import { styled } from "styled-components";
import { useState } from "react";
import logo from "../assets/logo.png";
const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  header img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }

  header h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: "Pacifico", cursive;
    margin: 0;
  }

  header p {
    text-align: center;
    color: #a39191;
    margin: 0;
  }

  @media (min-width: 768px) {
    header {
      margin-bottom: 4rem;
    }

    header h1 {
      font-size: 2.25rem;
    }
  }
`;
export default function Header() {
  const [condition, setCondition] = useState(false);
  return (
    <StyledHeader>
      <img src={logo} alt="A canvas" />
      <h1
      // style={{
      //   color: condition === true ? "red" : "yellow",
      // }}
      >
        ReactArt
      </h1>
      <p>A community of artists and art-lovers.</p>
    </StyledHeader>
  );
}
