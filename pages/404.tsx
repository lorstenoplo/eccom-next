import { Box, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { motion } from "framer-motion";
import { NextPage } from "next";
import { Layout } from "../components";
import useStyles from "../mui-styles/404_Styles";
import CustomHead from "../utils/CustomHead";

const page: NextPage = () => {
  const classes = useStyles();
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <CustomHead title="404 | Page not found | GoLoop" />
      <Layout notFoundPage navColor="white" className={classes.page}>
        <Box
          width="100%"
          height="500px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          className={classes.mainCont}
        >
          <h3 className={classes.title}>404</h3>
          <div>Sorry, we couldn't find that page.</div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <input className={classes.input} placeholder="Search" />
          </div>
          <Box pt={5}>
            <Typography className={classes.text} variant="subtitle1">
              Maybe you have followed a broken link or wrong url
            </Typography>
          </Box>
        </Box>
      </Layout>
    </motion.div>
  );
};

export default page;
