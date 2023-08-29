import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FinishDiv,
  ImgDiv,
  Price,
  Title,
  TitleProduct,
  TitleQtd,
  TitleSubtotal,
  TitlesDiv,
  TotalDiv,
  TotalText,
  Wrapper,
  WrapperCart,
  WrapperItens,
} from "./style";

import Empty from "../../assets/empty.svg";
import Button from "../../components/Button";
import CartItem from "../../components/CartItem";

const Cart = () => {
  const [array, setArray] = useState(true);
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/home");
  };

  const handleClickPurchase = () => {
    navigate("/purchase");
  };

  if (!array) {
    return (
      <Wrapper>
        <Title>Parece que não há nada por aqui :(</Title>
        <ImgDiv>
          <img src={Empty} alt="imagem de carrinho vazio" />
        </ImgDiv>
        <Button onClick={handleClickHome} text="Voltar" size="small" />
      </Wrapper>
    );
  }

  return (
    <WrapperCart>
      <WrapperItens>
        <TitlesDiv>
          <TitleProduct>Protudo</TitleProduct>
          <TitleQtd>Qtd</TitleQtd>
          <TitleSubtotal>Subtotal</TitleSubtotal>
        </TitlesDiv>

        <CartItem />
      </WrapperItens>

      <FinishDiv>
        <TotalDiv>
          <TotalText>Total</TotalText>
          <Price>R$ 10,99</Price>
        </TotalDiv>

        <Button onClick={handleClickPurchase} text="Finalizar Pedido" size="large" />
      </FinishDiv>
    </WrapperCart>
  );
};

export default Cart;
