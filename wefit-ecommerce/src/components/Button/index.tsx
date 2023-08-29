import { Btn, BtnLarge, BtnSmall, BtnText, BtnTextLarge, CartContainer, CartQuantity } from "./style";
import { ButtonHTMLAttributes } from "react";
import Cart from "../../assets/Cart.svg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "Cart";
  size?: "small" | "large";
  text: string;
  onClick?: () => void;
}
const Button = ({ variant, size, text, onClick }: ButtonProps) => {
  if (variant === "Cart") {
    return (
      <Btn onClick={onClick}>
        <CartContainer>
          <img src={Cart} alt="icone de carrinho" />
          <CartQuantity>0</CartQuantity>
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
