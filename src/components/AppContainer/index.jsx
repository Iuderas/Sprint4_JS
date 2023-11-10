import { Header } from "../Header";
import * as S from "./styles";

import logo from "../../images/logo.png";
import { TextButton } from "../TextButton";

export const AppContainer = () => {
  return (
    <>
      <S.HomeSection>
        <S.HomeBackgroundShadow />
        <Header srcLogo={logo} />

        <S.HomeBrand>
          <S.BrandLogo src={logo} />
          <S.BrandTitle>URBAN FLOW</S.BrandTitle>
        </S.HomeBrand>
        <S.Description>O transporte publico como você nunca viu.</S.Description>
        <S.StyledButton onClick={() => {}}>Saiba mais</S.StyledButton>
      </S.HomeSection>

      <S.ProblemSection>
        <S.Description>
          Urban Flow melhora o transporte público em São Paulo, monitorando e
          rastreando ônibus para reduzir lotação e tempo de espera, tornando a
          cidade mais sustentável.
        </S.Description>
      </S.ProblemSection>
    </>
  );
};
