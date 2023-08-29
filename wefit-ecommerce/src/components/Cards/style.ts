import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 0.625rem 0.688rem;
  border-radius: 0.25rem;
  margin: 0 auto;
  background-color: ${theme.bg.primary};
  min-width: 343px;
  height: 305px;

  @media (min-width: 768px) {
    min-width: 309px;
  }
`;

export const MovieImg = styled.img`
  width: 9.1rem;
  object-fit: contain;
`;

export const Title = styled.h2`
  color: ${theme.text.primary};
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1rem;
`;

export const Price = styled.p`
  color: ${theme.text.tertiary};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.375rem;
`;
