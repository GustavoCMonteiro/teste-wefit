import { ReactNode, HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { CartContainer, CartImg, CartQuantity, CartText, MainContent, Title, Wrapper } from "./style";
import Bag from "../../assets/Bag.svg";

interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
const NavBar = ({ children }: NavBarProps) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <>
      <Wrapper>
        <Title onClick={() => handleHomeClick()}>WeMovies</Title>
        <CartContainer onClick={() => handleCartClick()}>
          <div>
            <CartText>Meu Carrinho</CartText>
            <CartQuantity>0 itens</CartQuantity>
          </div>
          <div>
            <CartImg src={Bag} alt="imagem de um carrinho" />
          </div>
        </CartContainer>
      </Wrapper>
      <MainContent>{children}</MainContent>
    </>
  );
};

export default NavBar;
