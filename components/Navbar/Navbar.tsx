import {
  AppBar,
  Badge,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
  Zoom,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import { AccountCircle } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { cloneElement } from "react";
import { useStateValue } from "../../context/StateProvider";
import { Props } from "../../types/HomePageProps";
import useGetUser from "../../utils/useGetUser";
import SideBar from "../SideBar";
import LoadingScreen from "../LoadingScreen";

interface NavbarProps {
  color?: string;
}

export const useStyles = makeStyles(
  (theme) =>
    ({
      root: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        flexGrow: 1,
      },

      title: {
        flexGrow: 1,
        display: "none",
        color: "black",
        [theme.breakpoints.up("md")]: {
          display: "block",
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        color: "#5f6368",
      },
      inputRoot: {
        color: "#5f6368",
        backgroundColor: "#E8EAED",
        borderRadius: 4,
      },
      inputInput: {
        padding: theme.spacing(1.5, 1, 1.5, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          width: "20ch",
          "&:focus": {
            width: "70ch",
            backgroundColor: "#ffffff",
            boxShadow:
              "0 1px 2px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15)",
            borderRadius: 4,
          },
        },
      },
      search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        marginRight: 20,
        width: "100%",
        [theme.breakpoints.up("md")]: {
          marginLeft: theme.spacing(1),
          width: "auto",
        },
      },
      appBar: {
        backgroundColor: (props: NavbarProps) => props.color || "#f1f3f5",
      },
      accountIcon: {
        color: "black",
      },
    } as const)
);

const ElevationScroll = (props: Props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const Navbar: React.FC<NavbarProps> = (props) => {
  const classes = useStyles(props);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const { state } = useStateValue();
  const [user, fetching, error] = useGetUser();

  const router = useRouter();

  //if (fetching) return <LoadingScreen />;

  if (error) return <p>{error.message}</p>;

  let UserBody = () => <></>;
  if (!user) {
    // user is logged out
    UserBody = () => (
      <>
        <MenuItem button onClick={() => router.push("/login")}>
          Login
        </MenuItem>
        <MenuItem button onClick={() => router.push("/register")}>
          Register
        </MenuItem>
      </>
    );
    //console.log("not logged in");
  } else {
    // user is logged in
    UserBody = () => (
      <>
        <MenuItem button onClick={() => router.push("/account")}>
          My account
        </MenuItem>
        <MenuItem>{user?.username}</MenuItem>
        <MenuItem
          onClick={() => {
            localStorage.removeItem("qid");
            router.replace("/login");
          }}
        >
          Logout
        </MenuItem>
      </>
    );
    //console.log("user is there");
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const isMenuOpen = Boolean(anchorEl);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <UserBody />
    </Menu>
  );

  // console.log("data is >>>", data);

  return (
    <ElevationScroll {...props}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <SideBar>
            <MenuIcon />
          </SideBar>
          <NextLink href="/">
            <a className={classes.title}>
              <Typography variant="h6">Go Loop Shopping</Typography>
            </a>
          </NextLink>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon color="inherit" />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <Tooltip TransitionComponent={Zoom} title="Your Cart">
            <IconButton
              aria-label="cart"
              aria-controls="menu-appbar"
              aria-haspopup="false"
              className={classes.accountIcon}
              onClick={() => state.basket.length > 0 && router.push("/cart")}
            >
              <Badge badgeContent={state.basket.length} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            className={classes.accountIcon}
            onClick={handleProfileMenuOpen}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
        {renderMenu}
      </AppBar>
    </ElevationScroll>
  );
};

export default Navbar;
