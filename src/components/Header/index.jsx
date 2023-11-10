import * as S from "./styles";

const data = {
  links: [
    { id: 1, label: "problema" },
    { id: 2, label: "solução" },
    { id: 3, label: "aplicativo" },
    { id: 4, label: "pros e contras" },
    { id: 5, label: "novidades" },
    { id: 6, label: "contato" },
  ],
};

export const Header = ({ srcLogo }) => {
  return (
    <S.HeaderContainer>
      <S.Brand>
        <S.HeaderLogo src={srcLogo} />
        <S.BrandTitle>URBAN FLOW</S.BrandTitle>
      </S.Brand>
      <S.NavBar>
        {data.links.map((item) => (
          <S.NavBarLink key={item.id}>{item.label}</S.NavBarLink>
        ))}
      </S.NavBar>
    </S.HeaderContainer>
  );
};
