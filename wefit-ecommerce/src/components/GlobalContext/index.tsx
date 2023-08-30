import { createContext, useEffect, useState, SetStateAction, Dispatch } from "react";
import { ProductData } from "../../types/interefaces";

type GlobalContextType = {
  cartList: ProductData[];
  setCartList: Dispatch<SetStateAction<ProductData[]>>;
  cartQuantity: number;
  totalValue: number;
};

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalStorage = ({ children }: { children: React.ReactNode }) => {
  const [cartList, setCartList] = useState<ProductData[]>([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("cart");

    if (data) {
      setCartList(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (cartList.length !== 0) {
      localStorage.setItem("cart", JSON.stringify(cartList));
    } else {
      localStorage.removeItem("cart");
    }

    const totalQuantity = cartList.reduce((accumulator, item) => {
      if (item.quantity) {
        return accumulator + item.quantity;
      }
      return accumulator;
    }, 0);

    setCartQuantity(totalQuantity);

    const totalValue = cartList.reduce((accumulator, item) => {
      if (item.price && item.quantity) {
        return accumulator + item.price * item.quantity;
      }
      return accumulator;
    }, 0);

    setTotalValue(totalValue);
  }, [cartList]);

  return (
    <GlobalContext.Provider
      value={{
        cartList,
        setCartList,
        cartQuantity,
        totalValue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
