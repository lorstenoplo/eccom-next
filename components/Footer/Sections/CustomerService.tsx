import { FC } from "react";
import useStyles from "../mui-styles";
import { Box, Typography } from "@material-ui/core";

const CustomerService: FC = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.section}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
    >
      <Typography
        style={{ fontWeight: 500, marginBottom: 10 }}
        variant="subtitle1"
      >
        Customer Service
      </Typography>
      <Typography
        className={classes.link}
        variant="body1"
        color="textSecondary"
      >
        Delivery Information
      </Typography>
      <Typography
        className={classes.link}
        variant="body1"
        color="textSecondary"
      >
        Return Policy
      </Typography>
      <Typography
        className={classes.link}
        variant="body1"
        color="textSecondary"
      >
        Contact Support
      </Typography>
      <Typography
        className={classes.link}
        variant="body1"
        color="textSecondary"
      >
        Purchase Process
      </Typography>
    </Box>
  );
};

export default CustomerService;
