import React, { useState } from "react";
import styled from "styled-components";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffffff;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: #ffd700;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = styled(AppBar)`
  background-color: #333;
  padding: 0.5rem 2rem;
  position: fixed;
  left: 0;
  top: 0;
`;

const MobileMenu = styled.div`
  width: 250px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
  }

  li:hover {
    background-color: #f0f0f0;
  }
`;

export const HeaderComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Articles", link: "/articles" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <Header position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Logo>MyBlog</Logo>

        {!isMobile && (
          <NavLinks>
            {menuItems.map((item) => (
              <a key={item.label} href={item.link}>
                {item.label}
              </a>
            ))}
          </NavLinks>
        )}

        {isMobile && (
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        )}

        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <MobileMenu>
            <IconButton
              onClick={toggleDrawer(false)}
              style={{ float: "right" }}
            >
              <CloseIcon />
            </IconButton>
            <List>
              {menuItems.map((item) => (
                <ListItem button key={item.label} onClick={toggleDrawer(false)}>
                  <a href={item.link}>
                    <ListItemText primary={item.label} />
                  </a>
                </ListItem>
              ))}
            </List>
          </MobileMenu>
        </Drawer>
      </Toolbar>
    </Header>
  );
};
