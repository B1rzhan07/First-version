import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector } from "react-redux";
import Modal from "./Modal/Modal";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";
const Header = () => {
  const { isAuth, email, type } = useSelector(
    (state) => state.user
  );
  const [active, setActive] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}>
            DenSis.Me
          </Typography>

          {isAuth ? (
            <div>
              <h4>
                {email} logged as {type}
              </h4>
              {type === "Admin" ? (
                <div>
                  <Link
                    className={classes.link}
                    to="/registerPatient">
                    Register a Patient
                  </Link>
                  <Link
                    className={classes.link}
                    to="/registerDoctor">
                    Register a Doctor
                  </Link>
                </div>
              ) : null}
            </div>
          ) : (
            <span>
              <LoginIcon />
              <Button
                onClick={() => setActive(true)}
                color="inherit">
                Login
              </Button>
              {active ? (
                <Modal
                  active={active}
                  setActive={setActive}
                />
              ) : null}
            </span>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
