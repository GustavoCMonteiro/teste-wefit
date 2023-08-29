import styled from "styled-components";
import theme from "../../styles/theme";

export const Btn = styled.button`
  display: grid;
  grid-template-columns: 25px 1fr;
  gap: 0.5rem;
  background-color: ${theme.bg.secondary};
  color: ${theme.text.default};
  padding: 0.688rem 4rem;
  border-radius: 0.25rem;
  width: 100%;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #008cdd;
    transition: 0.3s;
  }

  @media (min-width: 768px) {
    padding: 0.688rem 3rem;
  }
`;

export const BtnSmall = styled(Btn)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 40px;
`;

export const BtnLarge = styled(Btn)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;

  @media (min-width: 768px) {
    width: 235px;
  }
`;

export const CartContainer = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const CartQuantity = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
`;

export const BtnText = styled.p`
  justify-self: center;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1rem;
  text-transform: uppercase;
`;

export const BtnTextLarge = styled(BtnText)`
  font-size: 0.875rem;
  line-height: 1.2rem;
`;
