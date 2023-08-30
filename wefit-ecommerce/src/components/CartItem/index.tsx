import { useContext, useEffect, useState } from "react";
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
import { ProductData } from "../../types/interefaces";
import { GlobalContext } from "../../components/GlobalContext";
import remove from "../../assets/remove.svg";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";

interface ProductProps {
  product: ProductData;
}
const CartItem = ({ product }: ProductProps) => {
  const global = useContext(GlobalContext);
  const [quantity, setQuantity] = useState(1);

  const handleLocalQuantity = (newQuantity: number) => {
    global?.setCartList((prevCartList) =>
      prevCartList.map((item) => (item.id === product.id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleDelete = (id: number) => {
    global?.setCartList((prevCartList) => prevCartList.filter((item) => item.id !== id));
  };

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
    handleLocalQuantity(quantity + 1);
  };

  const handleRemoveQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      handleLocalQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    setQuantity(product.quantity);
  }, [product.quantity]);

  return (
    <Wrapper>
      <Img src={product.image} alt="" />

      <TitleDiv>
        <Title>{product.title}</Title>
        <Price>R$ {product.price.toFixed(2)}</Price>
      </TitleDiv>

      <QuantityDiv>
        <QuantityButton
          onClick={() => {
            handleRemoveQuantity();
          }}
        >
          <img src={minus} alt="botão para remover item do carrinho"></img>
        </QuantityButton>
        <Quantity>{quantity}</Quantity>
        <QuantityButton
          onClick={() => {
            handleAddQuantity();
          }}
        >
          <img src={plus} alt="botão para remover item do carrinho"></img>
        </QuantityButton>
      </QuantityDiv>

      <Subtotal>
        <SubtotalText>Subtotal</SubtotalText>
        <Price>R$ {(quantity * product.price).toFixed(2)}</Price>
      </Subtotal>

      <RemoveButton onClick={() => handleDelete(product.id)}>
        <img src={remove} alt="botão para remover item do carrinho"></img>
      </RemoveButton>
    </Wrapper>
  );
};

export default CartItem;
