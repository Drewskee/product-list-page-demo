import { FunctionComponent } from "react";
import { ThemeProvider } from "@mui/material/styles";

import { generateTheme, appendCSSSupport } from "./utils/theme";

import { ProductContextProvider } from "./context/product.context";

import Header from "./layout/header";
import Footer from "./layout/footer";
import Main from "./layout/main";

const RootLayout: FunctionComponent<any> = (props: any) => {
  const theme = generateTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />

        <ProductContextProvider>
          <Main />
        </ProductContextProvider>

        <Footer />
      </ThemeProvider>

      {appendCSSSupport()}
    </>
  );
};

export default RootLayout;
