import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  border-bottom: 4px solid #61e786;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 2;
`;

export const HeaderLogo = styled.img`
  height: 70px;
  width: 70px;
`;

export const Brand = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 15px;
`;

export const BrandTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #61e786;
`;

export const NavBar = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px;
`;

export const NavBarLink = styled.a`
  font-size: 20px;
  font-style: italic;
  text-transform: uppercase;
  color: #61e786;
  text-decoration: none;
`;
