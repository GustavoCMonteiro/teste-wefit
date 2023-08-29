import { Btn, BtnLarge, BtnSmall, BtnText, BtnTextLarge, CartContainer, CartQuantity } from "./style";
import Cart from "../../assets/Cart.svg";

interface ButtonProps {
  type?: "Cart";
  width?: "small" | "large";
  text: string;
  onClick?: () => void;
}
const Button = ({ type, width, text, onClick }: ButtonProps) => {
  if (type === "Cart") {
    return (
      <Btn onClick={onClick}>
        <CartContainer>
          <img src={Cart} alt="" />
          <CartQuantity>0</CartQuantity>
        </CartContainer>
        <BtnText>{text}</BtnText>
      </Btn>
    );
  }

  if (width === "small") {
    return (
      <BtnSmall onClick={onClick}>
        <BtnTextLarge>{text}</BtnTextLarge>
      </BtnSmall>
    );
  }

  if (width === "large") {
    return (
      <BtnLarge onClick={onClick}>
        <BtnTextLarge>{text}</BtnTextLarge>
      </BtnLarge>
    );
  }

  return (
    <button>
      <BtnText>{text}</BtnText>
    </button>
  );
};

export default Button;
