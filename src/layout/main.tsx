import { FunctionComponent } from "react";
import { styled } from "@mui/material/styles";
import Filters from "components/filter";
import List from "components/product/list";

const StyledMainContent = styled("div")(() => ({
  background: "#f7f7f7",
  height: "calc(90% - 64px)", // minus footer
  overflowY:'scroll',
}));

const Main: FunctionComponent<any> = (props: any) => {
  return (
    <StyledMainContent>
      <Filters />
      <List />
    </StyledMainContent>
  );
};

export default Main;
