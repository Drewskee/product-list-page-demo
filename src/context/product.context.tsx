/* eslint-disable  @typescript-eslint/no-unused-vars */
/* eslint-disable  @typescript-eslint/no-empty-function */
import { createContext, useState } from "react";

interface IProductContext {
  isGameActive: boolean;
  setIsGameActive: (isActive: boolean) => void;
  restartGame: () => void;
}

const initialValues = {
  isGameActive: false,
  setIsGameActive: (isActive: boolean) => {},
  restartGame: () => {},
};

const ProductContext = createContext<IProductContext>(initialValues);

const ProductContextProvider = ({ children }: any) => {
  const [isGameActive, setIsGameActive] = useState<boolean>(
    initialValues.isGameActive
  );

  const restartGame = () => {
    console.info("restarting game");
  };

  return (
    <ProductContext.Provider
      value={{
        isGameActive,
        setIsGameActive,
        restartGame,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContextProvider, ProductContext };
