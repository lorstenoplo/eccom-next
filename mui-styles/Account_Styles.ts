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
  },
  userProfileCont: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-evenly",
    padding: 30,
  },
  editBtn: {
    textTransform: "none",
    marginRight: 30,
  },
  delteBtn: {
    textTransform: "none",
  },
}));
export default useStyles;
