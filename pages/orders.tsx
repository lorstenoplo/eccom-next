import { NextPage } from "next";
import { motion } from "framer-motion";
import Head from "next/head";
import { Layout, LoadingScreen } from "../components";
import useGetUser from "../utils/useGetUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";

const orders: NextPage = () => {
  const [user, isLoading, isError] = useGetUser();
  const [orders, setOrders] = useState<any>([]);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user._id)
        .collection("orders")
        .orderBy("created", "desc")
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

  console.log(orders);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <p>somethind went wrong</p>;
  }

  if (!user && !isLoading) {
    router.replace("/login");
  }

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Head>
        <title>Your Orders</title>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <Layout className="">
        <h1>Your Orders</h1>
        {orders.map((order: any) => (
          <p>{order.amount}</p>
        ))}
      </Layout>
    </motion.div>
  );
};

export default orders;
