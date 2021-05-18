import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
    backgroundColor: "#FAFAFA",
    minHeight: "calc(100vh - 64px)",
  },
  info: {
    fontSize: 16,
    fontWeight: 500,
    color: "rgb(95, 99, 104)",
    textAlign: "center",
  },
  userProfileCont: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-evenly",
    padding: 30,
    flexDirection: "column",
  },
  editBtn: {
    textTransform: "none",
    marginRight: 30,
  },
  delteBtn: {
    textTransform: "none",
  },
  btnCont:{
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      justifyContent: "space-between",
    }
  }
}));
export default useStyles;
