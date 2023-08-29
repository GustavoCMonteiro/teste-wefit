import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem auto;
  gap: 1rem;

  @media (min-width: 768px) {
    margin: 1.5rem auto;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 150px);
  color: #fff;
  font-weight: ${theme.text.default};
`;

export const TryAgain = styled.div`
  cursor: pointer;
  color: #009edd;
`;
