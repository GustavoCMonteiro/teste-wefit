import { Wrapper, MovieImg, Price, Title } from "./style";
import { ProductData } from "../../types/interefaces";
import Button from "../Button";

interface ProductProps {
  product: ProductData;
}

const Card = ({ product }: ProductProps) => {
  return (
    <Wrapper>
      <MovieImg src={product.image} alt="" />
      <Title>{product.title}</Title>
      <Price>R$ {product.price.toFixed(2)}</Price>
      <Button text="Adicionar no Carrinho" variant="Cart"/>
    </Wrapper>
  );
};

export default Card;
