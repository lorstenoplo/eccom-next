import React from "react";
import classes from "../../styles/Cart.module.css";
import { motion } from "framer-motion";
import { Typography, Box } from "@material-ui/core";

type subComponentType = {
  Title: any;
  SubTitle: any;
  Info: any;
};

const CartOption: React.FC & subComponentType = ({ children }) => {
  return (
    <motion.div className={classes.optionsContainer}>{children}</motion.div>
  );
};

CartOption.Title = function CartOptionsTitle({ children }: any) {
  return <Typography variant="body1">{children}</Typography>;
};
CartOption.SubTitle = function CartOptionsSubTitle({ children }: any) {
  return (
    <Typography variant="subtitle1" color="textSecondary">
      {children}
    </Typography>
  );
};
CartOption.Info = function CartOptionsInfo({ children }: any) {
  return (
    <Box display="flex" alignItems="center">
      {children}
    </Box>
  );
};

export default CartOption;
