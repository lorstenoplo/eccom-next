import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) =>
    ({
      container: {
        minHeight: "100vh",
        padding: "10px",
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
        paddingRight: "30px !important",
        paddingLeft: "30px !important",
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
        [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
          overflow: "hidden",
        },
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
      img: {
        position: "absolute",
        right: 0,
        top: 0,
        objectFit: "contain",
        height: "100%",
      },
      wlcmTitle: {
        fontSize: 30,
      },
      main: {
        // background:
        //   "linear-gradient(194.01deg, #D9E8EF 9.6%, #DCEAF0 22.94%, #EAF2F5 89.64%);",
        paddingLeft: 50,
        [theme.breakpoints.down(theme.breakpoints.values.md)]: {
          display: "none",
        },
      },
      dummy: {
        [theme.breakpoints.down(theme.breakpoints.values.md)]: {
          display: "none",
        },
      },
    } as const)
);

export default useStyles;
