import React, { useState } from "react";
import { OrderType } from "./types";
import { Card, CardHeader, IconButton } from "@material-ui/core";
import useStyles from "./mui-styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { unix } from "moment";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

type Props = {
  order: OrderType;
};

const Order: React.FC<Props> = ({ order }) => {
  const {
    id,
    data: { basket, amount, createdAt },
  } = order;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className={classes.order}>
      <CardHeader
        className={classes.header}
        title="Order"
        titleTypographyProps={{
          variant: "h2",
          style: { fontSize: "1.375rem", fontWeight: 500 },
        }}
        subheader={unix((createdAt as unknown) as number).format(
          "MMMM Do YYYY, h:mma"
        )}
        action={
          <IconButton
            onClick={handleClick}
            aria-label="more-options"
            aria-controls="simple-menu"
            aria-haspopup="true"
          >
            <MoreVertIcon />
          </IconButton>
        }
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Ask for Return</MenuItem>
        <MenuItem onClick={handleClose}>Status</MenuItem>
        <MenuItem onClick={handleClose}>Report</MenuItem>
      </Menu>
      {basket.map((p, i) => (
        <div key={i} className={classes.productCont}>
          <div className={classes.imgCont}>
            <img className={classes.productImage} src={p.imageURL} />
          </div>
          <div className={classes.productInfo}>
            <h3 className={classes.productTitle}>{p.title}</h3>
            <p className={classes.productPrice}>${p.price}</p>
            <div className={classes.ratingCont}>
              {Array(p.rating)
                .fill(null)
                .map((_, i) => (
                  <StarIcon key={i} className={classes.star} />
                ))}
              {Array(5 - p.rating)
                .fill(null)
                .map((_, i) => (
                  <StarBorderIcon key={i} className={classes.star} />
                ))}
            </div>
          </div>
        </div>
      ))}
      <div className={classes.orderInfo}>
        <h3 className={classes.id}>Order Id: {id}</h3>
        <h3 className={classes.total}>Order Total: ${amount}</h3>
      </div>
    </Card>
  );
};

export default Order;
