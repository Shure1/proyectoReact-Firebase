import { useContext } from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import MenuPosition from "../MenuPosition/MenuPosition";
import { Link } from "react-router-dom";
import "./ResponsiveNav.css";

import { CelularContext } from "../../context/CelularContext";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const styles = {
  linkButton: {
    textDecoration: "none",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  purchaseButton: {
    color: "grey",
    fontSize: 18,
    fontWeight: "bold",
  },
};

const ResponsiveNav = () => {
  const [items] = useContext(CelularContext)
  return (
    <AppBar position="static" className="ResponsiveNavigation">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="ResponsiveNavigationContainer">
          <Link to="/" style={styles.linkButton}>
            Home
          </Link>
          <MenuPosition />
          <Link to="/about" style={styles.linkButton}>
            About
          </Link>
          <Link to="/contact" style={styles.linkButton}>
            Contact
          </Link>
          <Link to="/shop" style={styles.linkButton}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ShoppingCartIcon />
              {items.length} 
              
            </div>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveNav;