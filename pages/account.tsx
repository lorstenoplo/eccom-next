import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useStyles from "../mui-styles/Account_Styles";
import Head from "next/head";
// import useGetUser from "../utils/useGetUser";
import { Layout } from "../components";
import { Button } from "@material-ui/core";
import { useDeleteUserMutation } from "../src/generated/graphql";
import { useMutation, useQuery } from "react-query";
import { AUTH_API_BASE_URL } from "../utils/constants";
import me from "../api-functions/queries/me";
import deleteUser from "../api-functions/mutations/deleteUser";
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
      <Head>
        <title>GoLoop Account {dynamicTitle}</title>
      </Head>
      <Layout navColor="#FAFAFA" className={classes.page}>
        <p>Hello, {user?.username}</p>
        <Button
          onClick={async () => {
            const res = await mutation.mutateAsync(values);
            console.log("del >>>", res);
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
