import { makeStyles, Theme, createStyles, colors } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingRight: 80,
      paddingTop: 15,
      paddingBottom: 15,
      display: "flex",
      justifyContent: "space-evenly",
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        display: "grid",
        paddingRight: 0,
        gridTemplateColumns: "1fr 1fr",
        paddingLeft: 30,
        paddingTop: 30,
        paddingBottom: 30,
      },
      [theme.breakpoints.down(theme.breakpoints.values.xs)]: {
        flexDirection: "column",
        display: "flex",
      },
    },
    link: {
      marginBottom: 5,
      cursor: "pointer",
      "&:hover": {
        color: colors.blue[500],
      },
    },
    section: {
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        marginBottom: 10,
      },
    },
    footer2: {
      position: "absolute",
      left: 0,
      bottom: -50,
      paddingRight: 80,
      paddingTop: 15,
      paddingBottom: 15,
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        bottom: -80,
        paddingRight: 100,
        paddingLeft: 10,
      },
    },
  })
);

export default useStyles;
