import { FC } from "react";
import useStyles from "./mui-styles";
import { Box, Typography } from "@material-ui/core";
import CustomerService from "./Sections/CustomerService";
import Company from "./Sections/Company";
import StayConnected from "./Sections/StayConnected";
import Support from "./Sections/Support";
import QuickLinks from "./Sections/QuickLinks";

type Props = {
  notFoundPage?: boolean;
};

const Footer: FC<Props> = ({ notFoundPage = false }) => {
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
      {!notFoundPage && (
        <Box
          width="100%"
          bgcolor="white"
          borderTop="1px solid lightgray"
          className={classes.footer2}
        >
          <Typography
            variant="body1"
            color="textSecondary"
            style={{ textAlign: "center" }}
          >
            Copyright 2021, GoLoop. All Rights Reserved ( Except we don't sell
            Products )
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Footer;
