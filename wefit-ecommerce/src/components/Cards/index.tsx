import { ProductData } from "../../types/interefaces";
import Button from "../Button";
import { Wrapper, MovieImg, Price, Title } from "./style";

interface ProductProps {
  product: ProductData;
}

const Card = ({ product }: ProductProps) => {
  return (
    <Wrapper>
      <MovieImg src={product.image} alt="" />
      <Title>{product.title}</Title>
      <Price>R$ {product.price.toFixed(2)}</Price>
      <Button text="Adicionar no Carrinho" type="Cart"/>
    </Wrapper>
  );
};

export default Card;
