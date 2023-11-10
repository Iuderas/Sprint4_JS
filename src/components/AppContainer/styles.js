import styled from "styled-components";

import homeBackground from "../../images/homebackground.png";
import solveBackground from "../../images/solve1.png";

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: url(${homeBackground}), rgb(0, 0, 0, 0.35);
  background-size: cover;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-bottom: 79px;
`;

export const HomeBrand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 145px;
`;

export const BrandLogo = styled.img`
  height: 100px;
  width: 100px;
`;

export const BrandTitle = styled.span`
  font-size: 56px;
  font-style: italic;
  color: #61e786;
`;

export const HomeDescription = styled.span`
  font-size: 36px;
  font-style: italic;
  color: #edffec;
  text-align: center;
  margin: 114px 0;
`;

export const ProblemSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #48435c;
`;

export const Description = styled.span`
  max-width: 850px;
  font-size: 20px;
  font-style: italic;
  color: #edffec;
  text-align: center;
  margin: 114px 0;
`;

export const ProblemImagesContainer = styled.div`
  display: flex;
  height: 100%;
  gap: 40px;
  padding-bottom: 80px;
`;

export const ProblemImage = styled.img`
  width: 30vh;
  height: 30vh;
  border-radius: 35px;
  border: 4px solid #61e786;
  object-fit: cover;
`;

export const SolveSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${solveBackground}), lightgray 50% / cover no-repeat !important;
  padding: 100px;
`;

export const SolveSVG = styled.img`
  max-width: 100%;
  min-width: 30%;
  padding-bottom: 110px;
`;

export const formSection = styled.div`
  height: 80vh;
  background-color: #48435c;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const form = styled.form`
  border: 3px solid #61e786;
  border-radius: 15px;
  padding: 20px 55px 20px 55px;
  display: flex;
  flex-direction: column;
`;

export const formTitle = styled.h2`
  text-align: center;
  color: #61e786;
  border-bottom: 3px solid #61e786;
`;

export const formDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;
export const formInput = styled.input`
  margin-top: 1rem;
  color: #fff;
  width: 100%;
  padding: 10px;
  background-color: #48435c;
  border: None;
  border-bottom: 3px solid #61e786;
`;

export const formButton = styled.button`
  margin-top: 3rem;
  color: #fff;
  padding: 20px 40px 20px 40px;
  background-color: #61e786;
  border-radius: 10px;
  border: None;
`;

export const footerSection = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #000;
`;

export const footerContatos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
`;

export const contatos = styled.div`
  display: flex;
  align-items: center;
`;

export const contatosImg = styled.img``;

export const contatosText = styled.p`
  margin-left: 10px;
  margin-top: 15px;
`;
