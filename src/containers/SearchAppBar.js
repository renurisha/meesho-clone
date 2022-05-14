import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchAppBar.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import InstallMobileRoundedIcon from "@mui/icons-material/InstallMobileRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import axios from "axios";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.4),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

// const ProductListShow = ()=> {

//   // console.log("ok")
// }

export default function SearchAppBar() {
  const cart = useSelector((state) => state.cartReducer.count);
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(" http://localhost:3001/cart")
      .then((res) => {
        setState(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // console.log("countState:",cart.cartReducer.count)

  /////////////////////////////////////////////////////////////
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="Box">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Link to="/">
              <MenuIcon />
            </Link>

            {/* <img src='https://tse3.mm.bing.net/th?id=OIP.mfUxZhSvgvG7wTGSNkPilgHaHa&pid=Api&P=0&w=153&h=153' alt=''/> */}
          </IconButton>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI1321321
          </Typography> */}

          <Search className="searchBox">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {/* <<<<<<<<<<<<<<<<<<<<< Header Right Boxes   >>>>>>>>>>>>>>>>>>>>>>>>>>*/}
          <div className="headerLeftBoxes">
            <div className="hLBox">
              <InstallMobileRoundedIcon />
              <p>Download App</p>
            </div>
            <div className="hLBox">
              <AdminPanelSettingsRoundedIcon />
              <p>Admin</p>
            </div>
            <div className="hLBox">
              <AccountCircleRoundedIcon className="black" />

              <p>Profile</p>
            </div>

            <div className="hLBox">
              <ShoppingCartRoundedIcon />
              <span className="cartIcon">{state.length}</span>
              <p>Cart</p>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <hr />

      {/* <<<<<<<<<<<<<<<<<<<<<<<<<  Dropdown   >>>>>>>>>>>>>>>>>>>> */}
      <div className="flex DropDownBox">
        <div className="dropdown">
          <div className="dropbtn">Men Ethic</div>
          <div className="dropdown-content c4">
            <div className="row flex">
              <div className="column">
                <h3>
                  <Link to="product">Top Wear</Link>
                </h3>
                {/* <li><Link to ='product'>Product Page</Link></li> */}
                <ul>All Top Wear</ul>
                <ul>Tshirtsg</ul>
                <ul>Shirts</ul>
              </div>
              <div className="column">
                <h3>Bottom Wear</h3>
                <ul>Track Pants</ul>
                <ul>Jeans</ul>
                <ul>Trousers</ul>
              </div>
              <div className="column">
                <h3>Men Accessories</h3>
                <ul>Watches</ul>
                <ul>Belts</ul>
                <ul>Wallets</ul>
                <ul>Bags</ul>
                <ul>Sunglasses</ul>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">Women Ethic</div>
          <div className="dropdown-content c4">
            <div className="row flex">
              <div className="column">
                <h3>FACE</h3>
                <ul>Cleansers</ul>
                <ul>Exfoliating & Peeling</ul>
                <ul>Toners/ Face Mist</ul>
                <ul>Serum & Concentrates</ul>
                <ul>Moisturizers & Treatments</ul>
              </div>
              <div className="column">
                <h3>LIPS</h3>
                <ul>Lipsticks</ul>
                <ul>Lip Balms & Tints</ul>
                <ul>Lip Gloss</ul>
                <ul>Lip Liner</ul>
                <ul>Lip Guide</ul>
              </div>
              <div className="column">
                <h3>EYES</h3>
                <ul>Eyeliner/Kajal</ul>
                <ul>Mascara</ul>
                <ul>Eye Shadow</ul>
                <ul>Brows</ul>
                <ul>Eye Shadow Guide</ul>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">Men Ethic</div>
          <div className="dropdown-content c4">
            <div className="row flex">
              <div className="column">
                <h3>Top Wear</h3>
                <ul>All Top Wear</ul>
                <ul>Tshirtsg</ul>
                <ul>Shirts</ul>
              </div>
              <div className="column">
                <h3>Bottom Wear</h3>
                <ul>Track Pants</ul>
                <ul>Jeans</ul>
                <ul>Trousers</ul>
              </div>
              <div className="column">
                <h3>Men Accessories</h3>
                <ul>Watches</ul>
                <ul>Belts</ul>
                <ul>Wallets</ul>
                <ul>Bags</ul>
                <ul>Sunglasses</ul>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">Women Ethic</div>
          <div className="dropdown-content c4">
            <div className="row flex">
              <div className="column">
                <h3>FACE</h3>
                <ul>Cleansers</ul>
                <ul>Exfoliating & Peeling</ul>
                <ul>Toners/ Face Mist</ul>
                <ul>Serum & Concentrates</ul>
                <ul>Moisturizers & Treatments</ul>
              </div>
              <div className="column">
                <h3>LIPS</h3>
                <ul>Lipsticks</ul>
                <ul>Lip Balms & Tints</ul>
                <ul>Lip Gloss</ul>
                <ul>Lip Liner</ul>
                <ul>Lip Guide</ul>
              </div>
              <div className="column">
                <h3>EYES</h3>
                <ul>Eyeliner/Kajal</ul>
                <ul>Mascara</ul>
                <ul>Eye Shadow</ul>
                <ul>Brows</ul>
                <ul>Eye Shadow Guide</ul>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">Men Ethic</div>
          <div className="dropdown-content c4">
            <div className="row flex">
              <div className="column">
                <h3>Top Wear</h3>
                <ul>All Top Wear</ul>
                <ul>Tshirtsg</ul>
                <ul>Shirts</ul>
              </div>
              <div className="column">
                <h3>Bottom Wear</h3>
                <ul>Track Pants</ul>
                <ul>Jeans</ul>
                <ul>Trousers</ul>
              </div>
              <div className="column">
                <h3>Men Accessories</h3>
                <ul>Watches</ul>
                <ul>Belts</ul>
                <ul>Wallets</ul>
                <ul>Bags</ul>
                <ul>Sunglasses</ul>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">Women Ethic</div>
          <div className="dropdown-content c4">
            <div className="row flex">
              <div className="column">
                <h3>FACE</h3>
                <ul>Cleansers</ul>
                <ul>Exfoliating & Peeling</ul>
                <ul>Toners/ Face Mist</ul>
                <ul>Serum & Concentrates</ul>
                <ul>Moisturizers & Treatments</ul>
              </div>
              <div className="column">
                <h3>LIPS</h3>
                <ul>Lipsticks</ul>
                <ul>Lip Balms & Tints</ul>
                <ul>Lip Gloss</ul>
                <ul>Lip Liner</ul>
                <ul>Lip Guide</ul>
              </div>
              <div className="column">
                <h3>EYES</h3>
                <ul>Eyeliner/Kajal</ul>
                <ul>Mascara</ul>
                <ul>Eye Shadow</ul>
                <ul>Brows</ul>
                <ul>Eye Shadow Guide</ul>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">Men Ethic</div>
          <div className="dropdown-content c4">
            <div className="row flex">
              <div className="column">
                <h3>Top Wear</h3>
                <ul>All Top Wear</ul>
                <ul>Tshirtsg</ul>
                <ul>Shirts</ul>
              </div>
              <div className="column">
                <h3>Bottom Wear</h3>
                <ul>Track Pants</ul>
                <ul>Jeans</ul>
                <ul>Trousers</ul>
              </div>
              <div className="column">
                <h3>Men Accessories</h3>
                <ul>Watches</ul>
                <ul>Belts</ul>
                <ul>Wallets</ul>
                <ul>Bags</ul>
                <ul>Sunglasses</ul>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">Women Ethic</div>
          <div className="dropdown-content c4">
            <div className="row flex">
              <div className="column">
                <h3>FACE</h3>
                <ul>Cleansers</ul>
                <ul>Exfoliating & Peeling</ul>
                <ul>Toners/ Face Mist</ul>
                <ul>Serum & Concentrates</ul>
                <ul>Moisturizers & Treatments</ul>
              </div>
              <div className="column">
                <h3>LIPS</h3>
                <ul>Lipsticks</ul>
                <ul>Lip Balms & Tints</ul>
                <ul>Lip Gloss</ul>
                <ul>Lip Liner</ul>
                <ul>Lip Guide</ul>
              </div>
              <div className="column">
                <h3>EYES</h3>
                <ul>Eyeliner/Kajal</ul>
                <ul>Mascara</ul>
                <ul>Eye Shadow</ul>
                <ul>Brows</ul>
                <ul>Eye Shadow Guide</ul>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">Men Ethic</div>
          <div className="dropdown-content c4">
            <div className="row flex">
              <div className="column">
                <h3>Top Wear</h3>
                <ul>All Top Wear</ul>
                <ul>Tshirtsg</ul>
                <ul>Shirts</ul>
              </div>
              <div className="column">
                <h3>Bottom Wear</h3>
                <ul>Track Pants</ul>
                <ul>Jeans</ul>
                <ul>Trousers</ul>
              </div>
              <div className="column">
                <h3>Men Accessories</h3>
                <ul>Watches</ul>
                <ul>Belts</ul>
                <ul>Wallets</ul>
                <ul>Bags</ul>
                <ul>Sunglasses</ul>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">Women Ethic</div>
          <div className="dropdown-content c4">
            <div className="row flex">
              <div className="column">
                <h3>FACE</h3>
                <ul>Cleansers</ul>
                <ul>Exfoliating & Peeling</ul>
                <ul>Toners/ Face Mist</ul>
                <ul>Serum & Concentrates</ul>
                <ul>Moisturizers & Treatments</ul>
              </div>
              <div className="column">
                <h3>LIPS</h3>
                <ul>Lipsticks</ul>
                <ul>Lip Balms & Tints</ul>
                <ul>Lip Gloss</ul>
                <ul>Lip Liner</ul>
                <ul>Lip Guide</ul>
              </div>
              <div className="column">
                <h3>EYES</h3>
                <ul>Eyeliner/Kajal</ul>
                <ul>Mascara</ul>
                <ul>Eye Shadow</ul>
                <ul>Brows</ul>
                <ul>Eye Shadow Guide</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
