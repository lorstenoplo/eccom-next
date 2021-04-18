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

const account = () => {
  const classes = useStyles();
  // const [user] = useGetUser();
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    setToken(localStorage.getItem("qid") || "");
  }, []);

  const { data, isLoading, isError } = useQuery(
    ["me", token],
    async () => {
      const data = await me(token!);
      return data;
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  const values = {
    username: data?.user.username,
    email: data?.user.email,
  };

  // const [{ data, error, fetching }, deleteUser] = useDeleteUserMutation();
  const mutation = useMutation(async (values: any) => {
    const res = await fetch(`${AUTH_API_BASE_URL}/delete`, {
      method: "POST",
      body: JSON.stringify(values),
    });

    return res.json();
  });
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Head>
        {/* <title>GoLoop Account | {user?.username}</title> */}
        GoLoop Account
      </Head>
      <Layout navColor="#FAFAFA" className={classes.page}>
        {/* hi {user?.username} */}
        <Button
          onClick={async () => {
            const res = await mutation.mutateAsync(values);
            console.log("del >>>", res);
          }}
        >
          Delete account
        </Button>
        {mutation.isError && <p>{(mutation.error as any).message}</p>}
      </Layout>
    </motion.div>
  );
};

export default account;
