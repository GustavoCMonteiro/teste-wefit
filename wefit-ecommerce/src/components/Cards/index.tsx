import { useContext, useEffect, useState } from "react";
import { Wrapper, MovieImg, Price, Title } from "./style";
import { ProductData } from "../../types/interefaces";
import { GlobalContext } from "../../components/GlobalContext";
import Button from "../Button";

interface ProductProps {
  product: ProductData;
}

const Card = ({ product }: ProductProps) => {
  const global = useContext(GlobalContext);
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    const updatedQuantity = quantity + 1;
    setQuantity(updatedQuantity);

    const newProduct: ProductData = { ...product, quantity: updatedQuantity };

    const checkArray = global?.cartList.some((item) => item.id === product.id);

    if (!checkArray) {
      global?.setCartList((prevCartList) => [...prevCartList, newProduct]);
    } else {
      global?.setCartList((prevCartList) =>
        prevCartList.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      );
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("cart");

    if (data) {
      const parsedData: ProductData[] = JSON.parse(data);

      parsedData.find((item: ProductData) => {
        if (item.id === product.id) {
          setQuantity(item.quantity);
          return true;
        }
        return false;
      });
    }
  }, [product.id]);

  return (
    <Wrapper>
      <MovieImg src={product.image} alt="" />
      <Title>{product.title}</Title>
      <Price>R$ {product.price.toFixed(2)}</Price>
      <Button onClick={addToCart} text="Adicionar no Carrinho" variant="Cart" quantity={quantity} />
    </Wrapper>
  );
};

export default Card;
