import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "40%",
      border: "1px solid #f6aea9",
      borderRadius: 8,
      backgroundColor: "#fce8e6",
      padding: 10,
      [theme.breakpoints.down("sm")]: {
        maxWidth: "95%",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: 10,
      },
    },
    header: {
      padding: 5,
      paddingLeft: 16,
      [theme.breakpoints.down("sm")]: {
        padding: 0,
        paddingLeft: 10,
      },
    },
    content: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 10,
      paddingLeft: 5,
      [theme.breakpoints.down("md")]: {
        padding: 5,
        paddingTop: 8,
        paddingBottom: 8,
      },
    },
    actions: {
      justifyContent: "flex-end",
      paddingRight: 15,
    },
  })
);

export default useStyles;
