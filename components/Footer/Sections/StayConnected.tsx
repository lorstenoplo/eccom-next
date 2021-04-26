import { FC } from "react";
import useStyles from "../mui-styles";
import { Box, Typography } from "@material-ui/core";

const StayConnected: FC = () => {
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
        Stay Connected
      </Typography>
      <Typography
        className={classes.link}
        variant="body1"
        color="textSecondary"
      >
        Our Blog
      </Typography>
      <Typography
        className={classes.link}
        variant="body1"
        color="textSecondary"
      >
        GoLoop Summit
      </Typography>
      <Typography
        className={classes.link}
        variant="body1"
        color="textSecondary"
      >
        Dogehouse
      </Typography>
      <Typography
        className={classes.link}
        variant="body1"
        color="textSecondary"
      >
        Youtube
      </Typography>
    </Box>
  );
};

export default StayConnected;
