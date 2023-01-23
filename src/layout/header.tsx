import { FunctionComponent, useState } from "react";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import SearchInput from "components/search";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";

const StyledHeaderToolbar = styled(Toolbar)(() => ({
  background: "transparent",
  overflow: "visible",
  zIndex: 2,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: 'flex',
  justifyContent: 'space-between'
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: "relative",
  height: "10%",
  background: "transparent",
}));

export const StyledSearch = styled(SearchInput)(({ theme }) => ({}));

const Header: FunctionComponent<any> = (props: any) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  return (
    <StyledAppBar>
      <StyledHeaderToolbar>
        <StyledSearch />

        <Box sx={{ display: { xs: "flex", color: 'black' } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </StyledHeaderToolbar>
    </StyledAppBar>
  );
};

export default Header;
