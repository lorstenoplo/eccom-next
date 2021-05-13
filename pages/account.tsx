import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { useMutation } from "react-query";
import deleteUser from "../api-functions/mutations/deleteUser";
import { Layout, AccountPage } from "../components";
import useStyles from "../mui-styles/Account_Styles";
import CustomHead from "../utils/CustomHead";
import useGetUser from "../utils/useGetUser";

const account = () => {
  const classes = useStyles();
  const [user, isLoading, isError] = useGetUser();

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
        <AccountPage
          disabled={isLoading || isError || !user}
          values={values}
          mutation={mutation}
        />
      </Layout>
    </motion.div>
  );
};

export default account;
