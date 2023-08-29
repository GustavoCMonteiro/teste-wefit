import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  display: grid;
  column-gap: 0.5rem;

  @media (min-width: 768px) {
    grid-template-columns: minmax(120px, 1fr) minmax(300px, 1fr) 150px 100px minmax(15px, 1fr);
    align-items: center;
  }
`;

export const Img = styled.img`
  width: 4rem;
  grid-area: 1/1/3/1;

  @media (min-width: 768px) {
    width: 5.6rem;
    grid-area: 1/1/1/2;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  grid-area: 1/2/1/4;

  @media (min-width: 768px) {
    display: block;
    grid-area: 1/2/1/3;
  }
`;

export const Title = styled.h1`
  flex-basis: 120px;
  color: ${theme.text.tertiary};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.2rem;
`;

export const Price = styled.p`
  color: ${theme.text.tertiary};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.375rem;
`;

export const QuantityDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  grid-area: 2/2/3/3;

  @media (min-width: 768px) {
    grid-area: 1/3/1/4;
  }
`;

export const Quantity = styled.div`
  width: 3.8rem;
  border: 1px solid #d9d9d9;
  border-radius: 0.25rem;
  padding: 0.13rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${theme.text.tertiary};
`;

export const QuantityButton = styled.button`
  border: none;
  background-color: transparent;
  height: 1.125rem;
  cursor: pointer;
`;

export const Subtotal = styled.div`
  justify-self: end;
  grid-area: 2/3/3/5;

  @media (min-width: 768px) {
    justify-self: start;
    grid-area: 1/4/1/5;
  }
`;

export const SubtotalText = styled.p`
  color: ${theme.text.secondary};
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1rem;
  text-transform: uppercase;
  text-align: end;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const RemoveButton = styled.div`
  justify-self: end;
  grid-area: 1/4/2/5;

  @media (min-width: 768px) {
    grid-area: 1/5/1/6;
  }
`;
