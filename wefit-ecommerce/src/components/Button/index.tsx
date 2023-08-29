import { Btn, BtnLarge, BtnSmall, BtnText, BtnTextLarge, CartContainer, CartQuantity } from "./style";
import { ButtonHTMLAttributes } from "react";
import Cart from "../../assets/Cart.svg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "Cart";
  size?: "small" | "large";
  text: string;
  onClick?: () => void;
  quantity?: number;
}
const Button = ({ variant, size, text, onClick, quantity }: ButtonProps) => {
  if (variant === "Cart") {
    return (
      <Btn onClick={onClick} $quantity={quantity}>
        <CartContainer>
          <img src={Cart} alt="icone de carrinho" />
          <CartQuantity>{quantity}</CartQuantity>
        </CartContainer>
        <BtnText>{text}</BtnText>
      </Btn>
    );
  }

  if (size === "small") {
    return (
      <BtnSmall onClick={onClick}>
        <BtnTextLarge>{text}</BtnTextLarge>
      </BtnSmall>
    );
  }

  if (size === "large") {
    return (
      <BtnLarge onClick={onClick}>
        <BtnTextLarge>{text}</BtnTextLarge>
      </BtnLarge>
    );
  }

  return (
    <button onClick={onClick}>
      <BtnText>{text}</BtnText>
    </button>
  );
};

export default Button;
