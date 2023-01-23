import { FunctionComponent } from "react";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const StyledFiltersToolbar = styled(Toolbar)(() => ({
  display: "flex",
  position: "sticky",
  top: 0,
  zIndex: 3,
  justifyContent: "space-between",
  alignItems: "self",
  background: "#ffffff",
}));

const Filters: FunctionComponent<any> = (props: any) => {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <>
      
      <StyledFiltersToolbar>
      <Typography variant="h5" sx={{ margin: "12px"}}>Filters</Typography>
        <div>
          <Stack direction="row" spacing={1}>
            <Chip
              label="T-Shirts:Target"
              onClick={handleClick}
              onDelete={handleDelete}
            />
            <Chip
              label="Cheetos"
              variant="outlined"
              onClick={handleClick}
              onDelete={handleDelete}
            />
            <Chip
              label="Tea:Near By"
              variant="outlined"
              onClick={handleClick}
              onDelete={handleDelete}
            />
            <Chip
              label="Donuts"
              variant="outlined"
              onClick={handleClick}
              onDelete={handleDelete}
            />
          </Stack>
        </div>

        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <AddIcon />
        </IconButton>
      </StyledFiltersToolbar>
    </>
  );
};

export default Filters;
