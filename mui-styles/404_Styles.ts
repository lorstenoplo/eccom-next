import { makeStyles, Theme, createStyles, colors } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    page: {
      backgroundColor: "white",
      height: 400,
      [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
        minHeight: "calc(100vh - 64px)",
      },
    },
    title: {
      font: "400 64px/64px Roboto Mono,monospace",
      color: "#0277bd",
      marginTop: 0,
      marginBottom: 10,
    },
    mainCont: {
      position: "relative",
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        height: 400,
      },
      "&::after": {
        background:
          "url(https://www.gstatic.com/devrel-devsite/prod/vdb246b8cc5a5361484bf12c07f2d17c993026d30a19ea3c7ace6f0263f62c0dd/firebase/images/flame.png) 50%/100% no-repeat",
        bottom: 210,
        content: '""',
        height: "122px",
        left: "67%",
        position: "absolute",
        width: 115,
        [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
          display: "none",
        },
      },
    },
    input: {
      height: 20,
      width: 804,
      borderRadius: 3,
      backgroundColor: "#F1F3F4",
      padding: "20px 40px",
      border: "none",
      outline: "none",
      "&:focus": {
        boxShadow:
          "0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)",
        backgroundColor: "white",
      },
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        width: "90vw",
      },
    },
    search: {
      position: "relative",
      marginTop: 40,
    },
    searchIcon: {
      position: "absolute",
      left: 10,
      top: 0,
      color: "#5f6368",
      height: "100%",
      display: "grid",
      placeItems: "center",
    },
    text: {
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        textAlign: "center",
      },
    },
  })
);

export default useStyles;
