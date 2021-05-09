import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import HelpIcon from "@material-ui/icons/Help";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import InfoIcon from "@material-ui/icons/Info";
import PaymentIcon from "@material-ui/icons/Payment";
import ShopIcon from "@material-ui/icons/Shop";
import { useRouter } from "next/router";
import React from "react";
import Report from "../Report";

type listProps = {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  classes: Record<"list" | "fullList" | "menuButton", string>;
};

const CustomList: React.FC<listProps> = ({ classes }) => {
  const router = useRouter();

  return (
    <div className={classes.list} role="presentation">
      <List>
        <Typography variant="h4" style={{ padding: "5px 15px" }}>
          Go Loop
        </Typography>
        <Divider />
        <ListItem button onClick={() => router.push("/")}>
          <ListItemIcon>
            <HomeRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => router.push("/account")}>
          <ListItemIcon>
            <AccountCircleRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItem>
        <ListItem button onClick={() => router.push("/orders")}>
          <ListItemIcon>
            <ShopIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button onClick={() => router.push("/payment")}>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Payment" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => router.push("/help")}>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="Help Center" />
        </ListItem>
        <ListItem button onClick={() => router.push("/about")}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <Report />
      </List>
    </div>
  );
};

export default CustomList;
