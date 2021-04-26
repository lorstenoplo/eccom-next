import { FC } from "react";
import useStyles from "../mui-styles";
import { Box, Typography } from "@material-ui/core";

const Support: FC = () => {
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
        Support
      </Typography>
      <Typography
        className={classes.link}
        variant="body1"
        color="textSecondary"
      >
        Call Support
      </Typography>
      <Typography
        className={classes.link}
        variant="body1"
        color="textSecondary"
      >
        Slack Community
      </Typography>
      <Typography
        className={classes.link}
        variant="body1"
        color="textSecondary"
      >
        Discord
      </Typography>
      <Typography
        className={classes.link}
        variant="body1"
        color="textSecondary"
      >
        FAQ's
      </Typography>
    </Box>
  );
};

export default Support;
