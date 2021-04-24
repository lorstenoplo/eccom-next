import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) =>
    ({
      container: {
        minHeight: "100vh",
        padding: "0 0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f1f3f5",
        [theme.breakpoints.down("sm")]: {
          width: "100vw",
        },
      },
      body: {
        flexDirection: "row",
        paddingRight: "56px !important",
        paddingLeft: "56px !important",
        paddingBottom: "10px !important",
        [theme.breakpoints.down("md")]: {
          paddingLeft: "0px !important",
          paddingRight: "0px !important",
          alignItems: "center",
        },
      },
      product: {
        width: "450px",
        background: "#fff",
        borderRadius: "12px",
        padding: "30px 45px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 0.5,
        marginBottom: "20px",
        marginTop: "20px",
        [theme.breakpoints.down("md")]: {
          width: "95vw",
        },
      },
      proCat: {
        marginBottom: "20px",
        fontWeight: 500,
      },
      productImg: {
        height: "250px",
        objectFit: "contain",
      },

      productInfo: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },

      price: {
        fontWeight: 500,
      },
      productsContainer: {
        [theme.breakpoints.down("md")]: {
          justifyContent: "center",
        },
      },
      link: {
        "-webkit-tap-highlight-color": "transparent",
        overflow: "hidden",
      },
      categoryCont: {
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        [theme.breakpoints.up("md")]: {
          width: "90%",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          columnGap: 80,
        },
      },
      categoryTitle: {
        marginLeft: "auto",
        marginRight: "auto",
        textTransform: "capitalize",
      },
      back: {
        position: "absolute",
        left: -6,
        textTransform: "none",
        color: "rgba(0,0,0,0.7)",
      },
    } as const)
);

export default useStyles;
