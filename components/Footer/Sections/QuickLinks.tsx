import { FC } from "react";
import useStyles from "../mui-styles";
import { Box, Typography } from "@material-ui/core";
import Link from "next/link";

const QuickLinks: FC = () => {
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
        Quick Links
      </Typography>
      <Link href="/">
        <a>
          <Typography
            className={classes.link}
            variant="body1"
            color="textSecondary"
          >
            Home
          </Typography>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <Typography
            className={classes.link}
            variant="body1"
            color="textSecondary"
          >
            About
          </Typography>
        </a>
      </Link>
      <Link href="/login">
        <a>
          <Typography
            className={classes.link}
            variant="body1"
            color="textSecondary"
          >
            Login
          </Typography>
        </a>
      </Link>
      <Link href="/new">
        <a>
          <Typography
            className={classes.link}
            variant="body1"
            color="textSecondary"
          >
            Store
          </Typography>
        </a>
      </Link>
    </Box>
  );
};

export default QuickLinks;
