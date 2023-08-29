import { createContext, useEffect, useState, SetStateAction, Dispatch } from "react";
import { ProductData } from "../../types/interefaces";

type GlobalContextType = {
  cartList: ProductData[];
  setCartList: Dispatch<SetStateAction<ProductData[]>>;
};

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalStorage = ({ children }: { children: React.ReactNode }) => {
  const [cartList, setCartList] = useState<ProductData[]>([]);

  useEffect(() => {
    if (cartList.length !== 0) {
      localStorage.setItem("cart", JSON.stringify(cartList));
    }
  }, [cartList]);

  useEffect(() => {
    const data = localStorage.getItem("cart");

    if (data) {
      setCartList(JSON.parse(data));
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        cartList,
        setCartList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
