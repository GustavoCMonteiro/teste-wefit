import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 0.5rem 1rem;
  height: 574px;
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
  padding: 0 5rem;
`;
