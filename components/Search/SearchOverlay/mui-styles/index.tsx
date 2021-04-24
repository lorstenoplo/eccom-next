import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    result: {
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0.1)",
      },
    },
  })
);

export default useStyles;
