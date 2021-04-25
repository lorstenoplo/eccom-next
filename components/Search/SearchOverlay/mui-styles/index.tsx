import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    result: {
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0.1)",
      },
    },
    rating: {
      [theme.breakpoints.down(theme.breakpoints.values.xs)]: {
        display: "none",
      },
    },
    img: {
      height: 100,
      objectFit: "contain",
      [theme.breakpoints.down(theme.breakpoints.values.xs)]: {
        height: 50,
      },
    },
    infoCont: {
      [theme.breakpoints.down(theme.breakpoints.values.xs)]: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
    },
    title: {
      margin: 0,
      marginBottom: 8,
      [theme.breakpoints.down(theme.breakpoints.values.xs)]: {
        marginRight: 10,
        flex: 0.6,
      },
    },
  })
);

export default useStyles;
