import styled from "styled-components";

import homeBackground from "../../images/homebackground.jpeg";
import { TextButton } from "../TextButton";

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-image: url(${homeBackground});
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const StyledButton = styled(TextButton)`
  margin-bottom: 148px;
`;

export const HomeBackgroundShadow = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.35;
  position: absolute;
  z-index: 1;
`;

export const HomeBrand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 145px;
  z-index: 2;
`;

export const BrandLogo = styled.img`
  height: 100px;
  width: 100px;
  z-index: 2;
`;

export const BrandTitle = styled.span`
  font-size: 56px;
  font-style: italic;
  color: #61e786;
  z-index: 2;
`;

export const Description = styled.span`
  font-size: 36px;
  font-style: italic;
  color: #edffec;
  text-align: center;
  margin: 114px 0;
  z-index: 2;
`;

export const ProblemSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
  background-color: #48435c;
`;
