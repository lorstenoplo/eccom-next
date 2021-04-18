import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ErrorIcon from "@material-ui/icons/Error";
import React from "react";
import useStyles from "./mui_styles";
import Link from "next/link";

type Props = {
  askOpen: boolean;
  setAskOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AskToLogin: React.FC<Props> = ({ askOpen, setAskOpen }) => {
  const classes = useStyles();
  if (!askOpen) {
    return null;
  }
  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        className={classes.header}
        action={
          <IconButton
            onClick={() => setAskOpen(false)}
            aria-label="close-login"
          >
            <CloseIcon />
          </IconButton>
        }
        title="You are not logged in!"
        titleTypographyProps={{
          variant: "h3",
          style: { fontSize: "1.375rem", fontWeight: 500 },
        }}
      />
      <CardContent className={classes.content}>
        <Box
          display="flex"
          alignItems="center"
          width="fit-content"
          fontSize={50}
          color="red"
          mr={2}
        >
          <ErrorIcon fontSize="inherit" />
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography variant="body1">
            Start shopping now by registering yourself
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Facing any issue try help
          </Typography>
        </Box>
      </CardContent>
      <CardActions className={classes.actions}>
        <Link href="/register">
          <Button disableElevation href="/register" variant="contained">
            SignUp
          </Button>
        </Link>
        <Link href="/login">
          <Button
            disableElevation
            href="/login"
            variant="contained"
            color="primary"
            style={{ marginLeft: "20px" }}
          >
            Login
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default AskToLogin;
