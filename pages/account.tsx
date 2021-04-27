import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import { useMutation } from "react-query";
import deleteUser from "../api-functions/mutations/deleteUser";
import { Layout } from "../components";
import useStyles from "../mui-styles/Account_Styles";
import CustomHead from "../utils/CustomHead";
import useGetUser from "../utils/useGetUser";

const account = () => {
  const classes = useStyles();
  const [user, isLoading, isError] = useGetUser();
  const { replace } = useRouter();

  const values = {
    username: user?.username,
    email: user?.email,
  };

  const dynamicTitle = isLoading || !user ? "" : `| ${user?.username}`;

  const mutation = useMutation(deleteUser);
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <CustomHead title={`GoLoop Account ${dynamicTitle}`} />
      <Layout navColor="#FAFAFA" className={classes.page}>
        <p>Hello, {user?.username}</p>
        <Button
          onClick={async () => {
            const res = await mutation.mutateAsync(values);
            console.log("del >>>", res);
            localStorage.removeItem("qid");
            replace("/login");
          }}
          disabled={isLoading || isError || !user}
        >
          Delete account
        </Button>
        {mutation.isError && <p>{(mutation.error as any).message}</p>}
        {mutation.isLoading && <p>loading</p>}
      </Layout>
    </motion.div>
  );
};

export default account;
