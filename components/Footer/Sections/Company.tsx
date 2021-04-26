import { FC } from "react";
import useStyles from "../mui-styles";
import { Box, Typography } from "@material-ui/core";

const Company: FC = () => {
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
        Company
      </Typography>
      <Typography
        className={classes.link}
        variant="body1"
        color="textSecondary"
      >
        Legal Help
      </Typography>
      <Typography
        className={classes.link}
        variant="body1"
        color="textSecondary"
      >
        About
      </Typography>
      <Typography
        className={classes.link}
        variant="body1"
        color="textSecondary"
      >
        Privacy Policy
      </Typography>
      <Typography
        className={classes.link}
        variant="body1"
        color="textSecondary"
      >
        Terms and Condition
      </Typography>
    </Box>
  );
};

export default Company;
