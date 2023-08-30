import { ReactNode, HTMLAttributes, useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContainer, CartImg, CartQuantity, CartText, MainContent, Title, Wrapper } from "./style";
import { GlobalContext } from "../../components/GlobalContext";
import Bag from "../../assets/Bag.svg";

interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
const NavBar = ({ children }: NavBarProps) => {
  const global = useContext(GlobalContext);
  const [cartQuantity, setCartQuantity] = useState(0);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  useEffect(() => {
    if (global) {
      setCartQuantity(global.cartQuantity);
    }
  }, [global]);

  return (
    <>
      <Wrapper>
        <Title onClick={() => handleHomeClick()}>WeMovies</Title>
        <CartContainer onClick={() => handleCartClick()}>
          <div>
            <CartText>Meu Carrinho</CartText>
            <CartQuantity>{cartQuantity} itens</CartQuantity>
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
