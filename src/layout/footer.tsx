import { FunctionComponent } from "react";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const StyledFooterToolbar = styled(Toolbar)(() => ({
  background: "#1F1C2C",
  zIndex: 2,
  margin:0,
  position: 'fixed',
  left: 0,
  right:0,
  bottom:0,
  color:'white',
  display: 'flex',
  justifyContent: 'space-between'
}));

const Footer: FunctionComponent<any> = (props: any) => {
  return (
      <StyledFooterToolbar>Footer
        <ShoppingCartOutlinedIcon/>
      </StyledFooterToolbar>
  );
};

export default Footer;
