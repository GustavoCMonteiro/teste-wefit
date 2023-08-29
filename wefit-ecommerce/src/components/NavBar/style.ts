import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.125rem 0.625rem;
`;

export const Title = styled.h1`
  color: ${theme.text.default};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.7rem;
  cursor: pointer;
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const CartText = styled.p`
  display: none;
  color: ${theme.text.default};
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.2rem;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const CartQuantity = styled.p`
  color: ${theme.text.secondary};
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  text-align: end;
`;

export const CartImg = styled.img`
  width: 1.833rem;
  height: 1.5rem;
`;

export const MainContent = styled.main`
  max-width: 960px;
  margin: 0 auto;
`;
