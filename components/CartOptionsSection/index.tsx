import React from "react";
import { CartOptionsSectionPropsType } from "./types";
import CartOption from "../CartOption";
import { Box, Button, CircularProgress } from "@material-ui/core";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import AlternateEmailRoundedIcon from "@material-ui/icons/AlternateEmailRounded";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import useGetUser from "../../utils/useGetUser";
import PersonPinCircleOutlinedIcon from "@material-ui/icons/PersonPinCircleOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import useStyles from "./styles";
import { useRouter } from "next/router";
import { getBasketTotal } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";
import { db } from "../../utils/firebase";
import firebase from "firebase/app";
import Link from "next/link";

const CartOptionsSection: React.FC<CartOptionsSectionPropsType> = () => {
  const [user, isLoading, isError] = useGetUser();
  const [loading, setLoading] = React.useState<boolean>(false);
  const classes = useStyles();
  const { state, dispatch } = useStateValue();
  const router = useRouter();

  if (isLoading || isError) {
    return null;
  }

  const placeOrder = async () => {
    setLoading(true);
    try {
      await db
        .collection("users")
        .doc(user?._id)
        .collection("orders")
        .add({
          basket: state.basket,
          amount: getBasketTotal(state.basket),
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
    } catch (err) {
      console.dir(err);
      setLoading(false);
    }
    
    dispatch({
                type: 'EMPTY_BASKET',
      value:""
            })

    setLoading(false);
    router.push("/orders");
  };

  return (
    <Box className={classes.container}>
      <CartOption>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <CartOption.Title>Guest Checkout</CartOption.Title>
          <EditRoundedIcon fontSize="small" />
        </Box>
        <CartOption.Info>
          <Box color="rgb(117 0 245)" mr={1}>
            <AlternateEmailRoundedIcon fontSize="small" />
          </Box>
          <CartOption.SubTitle>
            {user?.email || "guest@gmail.com"}
          </CartOption.SubTitle>
        </CartOption.Info>
      </CartOption>
      <CartOption>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <CartOption.Title>Shipping Information</CartOption.Title>
          <EditRoundedIcon fontSize="small" />
        </Box>
        <CartOption.Info>
          <Box color="rgb(117 0 245)" mr={1}>
            <AccountCircleOutlinedIcon fontSize="small" />
          </Box>
          <CartOption.SubTitle>{user?.username}</CartOption.SubTitle>
        </CartOption.Info>
        <CartOption.Info>
          <Box color="rgb(117 0 245)" mr={1}>
            <PersonPinCircleOutlinedIcon fontSize="small" />
          </Box>
          <CartOption.SubTitle>
            React lane, 123# cross, Mumbai
          </CartOption.SubTitle>
        </CartOption.Info>
        <CartOption.Info>
          <Box color="rgb(117 0 245)" mr={1}>
            <PhoneOutlinedIcon fontSize="small" />
          </Box>
          <CartOption.SubTitle>403-4343-332-222</CartOption.SubTitle>
        </CartOption.Info>
      </CartOption>
      <CartOption>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <CartOption.Title>Payment</CartOption.Title>
          <EditRoundedIcon fontSize="small" />
        </Box>
        <CartOption.Info>
          <Box color="rgb(117 0 245)" mr={1}>
            <CreditCardIcon fontSize="small" />
          </Box>
          <CartOption.SubTitle>424242424242424</CartOption.SubTitle>
        </CartOption.Info>
        <CartOption.Info>
          <Box color="rgb(117 0 245)" mr={1}>
            <CheckRoundedIcon fontSize="small" />
          </Box>
          <CartOption.SubTitle>Used shipping address</CartOption.SubTitle>
        </CartOption.Info>
      </CartOption>
      <h5
        style={{
          fontSize: "1.2rem",
          fontWeight: 500,
          alignSelf: "flex-start",
          margin: "5px",
          marginTop: "20px",
        }}
      >
        SubTotal ({state.basket.length} items) : ${getBasketTotal(state.basket)}
      </h5>
      <Box
        mt={1}
        className={classes.btnCont}
        width="100%"
        justifyContent="flex-end"
        display="flex"
        flexDirection="column"
      >
        <Button
          color="primary"
          size="large"
          variant="contained"
          disableElevation
          style={{ textTransform: "none", marginBottom: 15 }}
          onClick={placeOrder}
          disabled={loading || !user || state.basket.length === 0}
        >
          Place Your Order
          {loading && (
            <CircularProgress
              style={{ marginLeft: 10 }}
              size={15}
              color="primary"
            />
          )}
        </Button>
        {!user && <div>You are not logged in!, <Link href="/login?next=/cart"><a style={{color:"#2196f3", marginBottom:5}}>Click to Login</a></Link></div>}
        {state.basket.length === 0 && <div>You are cart is empty!, <Link href="/" ><a style={{color:"#2196f3"}}>Click to Add Products</a></Link></div>}
      </Box>
    </Box>
  );
};

export default CartOptionsSection;
