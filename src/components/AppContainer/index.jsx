import { Header } from "../Header";
import * as S from "./styles";

import logo from "../../images/logo.png";
import { TextButton } from "../TextButton";

import problem1 from "../../images/problem1.png";
import problem2 from "../../images/problem2.png";
import problem3 from "../../images/problem3.png";

import solveSVG from "../../images/solve2.svg";

const data = {
  images: [
    { id: 1, image: problem1 },
    { id: 2, image: problem2 },
    { id: 3, image: problem3 },
  ],
};

export const AppContainer = () => {
  return (
    <>
      <S.HomeSection>
        <Header srcLogo={logo} />

        <S.HomeBrand>
          <S.BrandLogo src={logo} />
          <S.BrandTitle>URBAN FLOW</S.BrandTitle>
        </S.HomeBrand>
        <S.HomeDescription>
          O transporte publico como você nunca viu.
        </S.HomeDescription>
        <TextButton onClick={() => {}}>Saiba mais</TextButton>
      </S.HomeSection>

      <S.ProblemSection>
        <S.Description>
          Urban Flow melhora o transporte público em São Paulo, monitorando e
          rastreando ônibus para reduzir lotação e tempo de espera, tornando a
          cidade mais sustentável.
        </S.Description>
        <S.ProblemImagesContainer>
          {data.images.map((item) => {
            return <S.ProblemImage src={item.image} />;
          })}
        </S.ProblemImagesContainer>
      </S.ProblemSection>

      <S.SolveSection>
        <S.Description>
          Urban Flow melhora o transporte público em São Paulo, monitorando e
          rastreando ônibus para reduzir lotação e tempo de espera, tornando a
          cidade mais sustentável.
        </S.Description>

        <S.SolveSVG src={solveSVG} />
      </S.SolveSection>

      <S.formSection>
        <S.form>
          <S.formTitle>CADASTRE-SE PARA NOVIDADES</S.formTitle>
          <S.formDiv>
            <S.formInput placeholder="nome:"></S.formInput>
            <S.formInput placeholder="email:"></S.formInput>
            <S.formButton>CONFIRMAR</S.formButton>
          </S.formDiv>
        </S.form>
      </S.formSection>

      <S.footerSection>
        <S.footerContatos>
          <S.contatos>
            <S.contatosImg></S.contatosImg>
            <S.contatosText>URBANFLOW@GMAIL.COM</S.contatosText>
          </S.contatos>
          <S.contatos>
            <S.contatosImg></S.contatosImg>
            <S.contatosText>(11)99999-9999</S.contatosText>
          </S.contatos>
          <S.contatos>
            <S.contatosImg></S.contatosImg>
            <S.contatosText>@URBAN_FLOW</S.contatosText>
          </S.contatos>
        </S.footerContatos>
      </S.footerSection>
    </>
  );
};
