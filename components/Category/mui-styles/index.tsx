import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      objectFit:"contain",
      borderRadius: 5,
      width: "100%",
      [theme.breakpoints.down("md")]: {
        height: 200,
        objectFit:"unset",
      },
    },
  })
);

export default useStyles;
