import * as S from "./styles";

export const TextButton = ({ onClick, children }) => {
  return (
    <S.TextButtonContainer onClick={onClick}>{children}</S.TextButtonContainer>
  );
};
