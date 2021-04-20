import { Box } from "@material-ui/core";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import { Category, Layout } from "../../components";
import useStyles from "../../mui-styles/Home_Styles";

const newIndex: NextPage = () => {
  const classes = useStyles();
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Head>
        <title>New version of goloop</title>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <Layout className="">
        <h1 style={{ textAlign: "center" }}>Shop by Categories</h1>
        <Box className={classes.categoryCont}>
          <Category
            title="Electronics"
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            href="/new/electronics"
          />

          <Category
            title="SkinCare"
            src="https://images.unsplash.com/photo-1531895861208-8504b98fe814?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
            href="/new/skincare"
          />
          <Category
            title="Food"
            src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            href="/new/food"
          />
          <Category
            title="Juices"
            src="https://images.unsplash.com/photo-1544619371-2aacd756277d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
            href="/new/juices"
          />
        </Box>
      </Layout>
    </motion.div>
  );
};

export default newIndex;
