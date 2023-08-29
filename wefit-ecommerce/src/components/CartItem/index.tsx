import { useState } from "react";
import {
  Img,
  Title,
  Wrapper,
  Price,
  QuantityDiv,
  Subtotal,
  RemoveButton,
  SubtotalText,
  Quantity,
  QuantityButton,
  TitleDiv,
} from "./style";
import remove from "../../assets/remove.svg";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Wrapper>
      <Img src="https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png" alt="" />

      <TitleDiv>
        <Title>Homem Aranha</Title>
        <Price>R$ 10,99</Price>
      </TitleDiv>

      <QuantityDiv>
        <QuantityButton
          onClick={() => {
            quantity > 1 && setQuantity(quantity - 1);
          }}
        >
          <img src={minus} alt="botão para remover item do carrinho"></img>
        </QuantityButton>
        <Quantity>{quantity}</Quantity>
        <QuantityButton
          onClick={() => {
            setQuantity(quantity + 1);
          }}
        >
          <img src={plus} alt="botão para remover item do carrinho"></img>
        </QuantityButton>
      </QuantityDiv>

      <Subtotal>
        <SubtotalText>Subtotal</SubtotalText>
        <Price>R$ 10,99</Price>
      </Subtotal>
      
      <RemoveButton>
        <img src={remove} alt="botão para remover item do carrinho"></img>
      </RemoveButton>
    </Wrapper>
  );
};

export default CartItem;
