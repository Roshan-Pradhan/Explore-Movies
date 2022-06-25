import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";

const drawerWidth = 240;

function Navbar(props) {
  const activeStyles = ({ isActive }) => {
    return {
      borderBottom: isActive ? "2px solid red" : "none",
      borderRadius: isActive ? "5px" : 0,
      paddingBottom: isActive ? "5px" : 0,
    };
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      className="navContainer"
    >
      <Typography
        variant="h6"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          fontSize: 15,
        }}
      >
        Inspect Movies
        <IconButton
          color="inherit"
          aria-label="close drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <CloseIcon
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          />
        </IconButton>
      </Typography>
      <Divider />
      <List>
        <NavLink to="/trending" style={activeStyles} className="Link">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Trending"} />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to="/movies" style={activeStyles} className="Link">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Movies"} />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to="/series" style={activeStyles} className="Link">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Series"} />
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" className="navContainer">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              display: { sm: "none" },
              margin: "auto",
            }}
          >
            Inspect Movies
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            <Link className="Link" to="/trending">
              Inspect Movies
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <NavLink to="/trending" style={activeStyles} className="Link">
              <Button sx={{ color: "#fff" }}>Trending</Button>
            </NavLink>
            <NavLink to="/movies" style={activeStyles} className="Link">
              <Button sx={{ color: "#fff" }}>Movies</Button>
            </NavLink>
            <NavLink to="/series" style={activeStyles} className="Link">
              <Button sx={{ color: "#fff" }}>Series</Button>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Navbar;
