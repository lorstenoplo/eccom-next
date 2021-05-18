import { FC } from "react";
import {
  Avatar,
  Typography,
  Box,
  Button,
  CircularProgress,
} from "@material-ui/core";
import useStyles from "../../mui-styles/Account_Styles";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { UseMutationResult } from "react-query";
import { useRouter } from "next/router";

type Props = {
  mutation: UseMutationResult<any, unknown, any, unknown>;
  values: {
    username: string | undefined;
    email: string | undefined;
  };
  disabled: boolean;
};

const AccountPage: FC<Props> = ({ mutation, values, disabled }) => {
  const { replace } = useRouter();
  const runMut = async () => {
    await mutation.mutateAsync(values);
    localStorage.removeItem("qid");
    replace("/login");
  };
  const classes = useStyles();

  return (
    <div className={classes.userProfileCont}>
      <Avatar
        style={{ width: 200, height: 200 }}
        src="https://material-ui.com/static/images/avatar/1.jpg"
      />
      <div>
        <Typography style={{textAlign: "center"}} variant="h4">Welcome, {values.username || "Guest"}</Typography>
        <p className={classes.info}>
          Manage your info, privacy and security to make FalconCode work better
          for you. Find out more
        </p>
        <Box className={classes.btnCont} mt={4}>
          <Button
            className={classes.editBtn}
            startIcon={<EditRoundedIcon />}
            variant="contained"
          >
            Edit
          </Button>
          <Button
            color="secondary"
            className={classes.delteBtn}
            startIcon={<DeleteRoundedIcon />}
            variant="contained"
            onClick={runMut}
            disabled={disabled || mutation.isLoading}
          >
            {mutation.isLoading ? (
              <CircularProgress
                style={{ marginLeft: 10 }}
                size={15}
                color="primary"
              />
            ) : (
              "Delete Account"
            )}
          </Button>
          {mutation.isError && <p>{(mutation.error as any).message}</p>}
          {mutation.isLoading && <p>Wait while we delete your account</p>}
        </Box>
      </div>
    </div>
  );
};

export default AccountPage;
