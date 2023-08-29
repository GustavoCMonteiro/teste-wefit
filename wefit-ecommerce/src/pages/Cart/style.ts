import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 0.5rem 1rem;
  height: 532.8px;
  background-color: ${theme.bg.primary};
  border-radius: 0.25rem;

  @media (min-width: 768px) {
    margin: 1.5rem auto;
  }
`;

export const Title = styled.h1`
  color: ${theme.text.tertiary};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.7rem;
  text-align: center;
  padding: 0 4rem;
`;

export const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1.5px solid #3f3d56;
  width: 100%;

  @media (min-width: 768px) {
    width: 447px;
  }
`;

export const WrapperCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  margin: 0.5rem 1rem;
  padding: 1rem;
  min-height: calc(100vh - 86px);
  background-color: ${theme.bg.primary};
  border-radius: 0.25rem;

  @media (min-width: 768px) {
    margin: 1.5rem auto;
    padding: 1.5rem;
    min-height: 100%;
  }
`;

export const WrapperItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

export const TitlesDiv = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: grid;
    column-gap: 0.5rem;
    grid-template-columns: minmax(120px, 1fr) minmax(300px, 1fr) 150px 100px minmax(15px, 1fr);
  }
`;

export const TitleProduct = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.2rem;
  text-transform: uppercase;
  color: ${theme.text.secondary};
  grid-area: 1/1/1/2;
`;

export const TitleQtd = styled(TitleProduct)`
  grid-area: 1/3/1/4;
`;

export const TitleSubtotal = styled(TitleProduct)`
  grid-area: 1/4/1/5;
`;

export const FinishDiv = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  padding-top: 1.3rem;
  border-top: 1px solid #999999;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

export const TotalDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const TotalText = styled.p`
  color: ${theme.text.secondary};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.2rem;
  text-transform: uppercase;
`;

export const Price = styled.p`
  color: ${theme.text.tertiary};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  margin-right: 1rem;
`;
