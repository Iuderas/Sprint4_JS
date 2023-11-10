import styled from "styled-components";

export const TextButtonContainer = styled.button`
  display: flex;
  border: none;
  width: fit-content;
  background-color: #61e786;
  box-shadow: none;
  color: #fff;
  padding: 16px 32px;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  font-family: "Inter";
  font-size: 24px;
  font-style: italic;
  border-radius: 10px;
  z-index: 2;

  :hover {
    cursor: pointer;
  }
`;
