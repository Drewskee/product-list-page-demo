import { FunctionComponent, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Item from "components/product/item";
import useFectch from "hooks/useFetch";

const StyledList = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "auto auto auto auto",
  padding: "5px 5px",
  height: "100%",
}));

const StyledListWrapper = styled("div")(() => ({
  backgroundColor: "#f7f7f7",
}));

const List: FunctionComponent<any> = (props: any) => {
  const { data, error } = useFectch("data.json");

  useEffect(() => {
    // Update the document title using the browser API
    console.log(data);
  }, [data]);

  if (error) return <p>There is an error. {JSON.stringify(error)}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <StyledListWrapper>
      <StyledList>
        {(data as any).map(( product : any ) => {
            return <Item {...product} />
        })}
      </StyledList>
    </StyledListWrapper>
  );
};

export default List;
