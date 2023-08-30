import { useContext, useEffect, useState } from "react";
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
import { GlobalContext } from "../../components/GlobalContext";

import Empty from "../../assets/empty.svg";
import Button from "../../components/Button";
import CartItem from "../../components/CartItem";
import { ProductData } from "../../types/interefaces";

const Cart = () => {
  const global = useContext(GlobalContext);
  const [array, setArray] = useState<ProductData[]>([]);
  const [total, setTotal] = useState<number>(0);
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/home");
  };

  const handleClickPurchase = () => {
    localStorage.removeItem("cart");
    global?.setCartList([]);
    navigate("/purchase");
  };

  useEffect(() => {
    if (global) {
      setTotal(global.totalValue);
      setArray(global.cartList);
    }
  }, [global]);

  if (array.length === 0) {
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

        {array.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </WrapperItens>

      <FinishDiv>
        <TotalDiv>
          <TotalText>Total</TotalText>
          <Price>R$ {total.toFixed(2)}</Price>
        </TotalDiv>

        <Button onClick={handleClickPurchase} text="Finalizar Pedido" size="large" />
      </FinishDiv>
    </WrapperCart>
  );
};

export default Cart;
