import * as React from "react";
import { FunctionComponent } from "react";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Button from "@mui/material/Button";

const StyledItem = styled(Card)(() => ({
  zIndex: 2,
  margin: "5px",
}));

const StyledBanner = styled("div")(({ theme }) => ({
  //   textAlign:'center',
  color: blue[500],
  borderRadius: 4,
  padding: theme.spacing(1),
  margin: "5px",
}));

const StyledCardContent = styled(CardContent)(() => ({
  position: "relative",
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  "& .MuiCardMedia-img": {
    maxWidth: "100%",
  },
  "& img": {
    maxWidth: "100%",
    maxHeight: "200px",
  },
  textAlign: "center",
}));

const StyledButton = styled(Button)(() => ({}));

const Item: FunctionComponent<any> = (props: any) => {
  const [expanded, setExpanded] = React.useState(false);

  const {
    id,
    img_url,
    local,
    meta,
    store,
    price,
    name,
    currency,
    delivery_opt,
    inventory,
  } = props;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledItem>
      <Card sx={{ margin: "0 auto", position: "relative" }}>
        <CardHeader
          action={
            inventory < 3 ? (
              <>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <StyledBanner>Only {inventory} left</StyledBanner>
              </>
            ) : (
              <>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <StyledBanner> {inventory} left</StyledBanner>
              </>
            )
          }
          title={name}
          subheader={store}
        />

        {img_url && (
          <StyledCardMedia>
            <img src={img_url} alt={name} />
          </StyledCardMedia>
        )}

        <StyledCardContent>
          <Typography variant="body2" color="text.secondary">
            {price} - {currency}
          </Typography>

          <Typography variant="caption" color="text.secondary">
            {delivery_opt}
          </Typography>
        </StyledCardContent>

        

        <CardActions disableSpacing>
        <StyledButton variant="contained" color="primary" fullWidth>Buy Now</StyledButton>
        </CardActions>

      
      </Card>
    </StyledItem>
  );
};

// const Item: FunctionComponent<any> = (props: any) => {
//   return (
//     <StyledItem>
//         content
//     </StyledItem>
//   );
// };

export default Item;
