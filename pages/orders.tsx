import { NextPage } from "next";
import { motion } from "framer-motion";
import Head from "next/head";
import { Layout, LoadingScreen, Order } from "../components";
import useGetUser from "../utils/useGetUser";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import useStyles from "../components/Order/mui-styles";
import ScrollToTop from "../utils/ScrollToTop";

const orders: NextPage = () => {
  const [user, isLoading, isError] = useGetUser();
  const [orders, setOrders] = useState<any>([]);
  const classes = useStyles();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user._id)
        .collection("orders")
        .orderBy("createdAt", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [user]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return (
      <motion.p initial="initial" animate="animate" exit={{ opacity: 0 }}>
        something went wrong
      </motion.p>
    );
  }

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Head>
        <title>Orders and Returns</title>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <Layout className={classes.page}>
        <h1 className={classes.title}>Your Orders</h1>
        {orders.map((order: any, i: number) => (
          <Order key={i} order={order} />
        ))}
      </Layout>
      <ScrollToTop />
    </motion.div>
  );
};

export default orders;
