import { NextPage } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { Layout } from "../../components";
import Head from "next/head";
import useStyles from "../../mui-styles/Home_Styles";
import { Box, Button } from "@material-ui/core";

const newIndex: NextPage = () => {
  const classes = useStyles();
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Head>
        <title>New version of goloop</title>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <Layout className="">
        <h1>Categories</h1>
        <Box className={classes.categoryCont}>
          <Link href="/new/Electronics">
            <Button href="/new/Electronics">
              <Box display="flex" flexDirection="column" alignItems="center">
                <img
                  src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  height="270px"
                  width="100%"
                  style={{ borderRadius: 5 }}
                />
                <h3>Electronics</h3>
              </Box>
            </Button>
          </Link>
          <Link href="/new/SkinCare">
            <Button href="/new/SkinCare">
              <Box display="flex" flexDirection="column" alignItems="center">
                <img
                  src="https://images.unsplash.com/photo-1531895861208-8504b98fe814?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                  height="270px"
                  width="100%"
                  style={{ borderRadius: 5 }}
                />
                <h3>SkinCare</h3>
              </Box>
            </Button>
          </Link>
          <Link href="/new/Food">
            <Button href="/new/Food">
              <Box display="flex" flexDirection="column" alignItems="center">
                <img
                  src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  height="270px"
                  width="100%"
                  style={{ borderRadius: 5 }}
                />
                <h3>Food</h3>
              </Box>
            </Button>
          </Link>
        </Box>
      </Layout>
    </motion.div>
  );
};

export default newIndex;
