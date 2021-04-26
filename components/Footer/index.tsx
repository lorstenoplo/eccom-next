import { FC } from "react";
import useStyles from "./mui-styles";
import { Box } from "@material-ui/core";
import CustomerService from "./Sections/CustomerService";
import Company from "./Sections/Company";
import StayConnected from "./Sections/StayConnected";
import Support from "./Sections/Support";
import QuickLinks from "./Sections/QuickLinks";

const Footer: FC = () => {
  const classes = useStyles();
  return (
    <Box
      position="absolute"
      left="0"
      width="100%"
      bgcolor="white"
      borderTop="1px solid lightgray"
      flexWrap="wrap"
      className={classes.root}
    >
      <CustomerService />
      <Company />
      <StayConnected />
      <Support />
      <QuickLinks />
    </Box>
  );
};

export default Footer;
