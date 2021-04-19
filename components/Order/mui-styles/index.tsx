import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    page: {
      width: "100%",
      minHeight: "calc(100vh - 64px)",
      backgroundColor: "#F1F3F5",
      padding: "20px 80px",
      [theme.breakpoints.down("md")]: {
        padding: "20px 10px",
      },
    },
    title: {
      marginTop: 0,
    },
    order: {
      padding: 30,
      marginBottom: 20,
      paddingTop: 5,
    },
    productCont: {
      display: "flex",
      marginBottom: 20,
    },
    productInfo: {
      paddingLeft: 40,
      flex: 0.7,
      [theme.breakpoints.down("md")]: {
        flex: 1,
      },
    },
    productImage: {
      objectFit: "contain",
      height: "180px",
      flex: 0.2,
      [theme.breakpoints.down("md")]: {
        height: "100px",
      },
    },
    header: {
      paddingLeft: 20,
      paddingBottom: 30,
    },
    total: { fontWeight: 600 },
    id: { fontWeight: 400, color: "gray" },
    orderInfo: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    },
    ratingCont: {
      display: "flex",
      alignItems: "center",
    },
    star: {
      color: "#DAA520",
    },
  })
);

export default useStyles;
