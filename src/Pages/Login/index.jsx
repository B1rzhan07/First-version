import React from "react";
import { useDispatch } from "react-redux";
import classes from "./Login.module.scss";
import { useInput } from "../../Hooks/hookAuth";
import AuthService from "../../Service/AuthService";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  setUser,
  setIsAuth,
  setType,
} from "../../Redux/Slices/userSlice";
import { Navigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const email = useInput("", {
    isEmpty: true,
    minLength: 3,
  });

  const password = useInput("", {
    isEmpty: true,
    minLength: 5,
  });

  const handleClick = async () => {
    try {
      const response = await AuthService.login(
        email.value,
        password.value
      );

      dispatch(
        setUser({
          email: email.value,
          password: password.value,
        })
      );
      dispatch(setIsAuth(true));
      dispatch(setType(type));

      localStorage.setItem("token", response.token);
      if (type === "Admin") {
        Navigate("/admin");
      }
      if (type === "User") {
        Navigate("/");
      }
      if (type === "doctor") {
        Navigate("/doctor");
      }
    } catch (err) {
      console.log(err.message);
      setError(true);
    }
  };
  const [type, setType] = React.useState("");
  const users = ["Admin", "User", "Doctor"];
  return (
    <>
      <div className={classes.login}>
        <h1>Login to the Mentcare System</h1>
        <div>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-label">
              Type of User
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Type of User"
              onChange={(e) => setType(e.target.value)}>
              {users.map((user) => (
                <MenuItem key={user} value={user}>
                  {user}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <form action="#">
            <div>
              <label>
                Email:
                <input
                  onChange={(e) => email.onChange(e)}
                  value={email.value}
                  onBlur={(e) => email.onBlur(e)}
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
                {email.dirty && email.isEmpty && (
                  <div style={{ color: "red" }}>
                    Enter your email
                  </div>
                )}
                {email.dirty && email.minLengthError && (
                  <div style={{ color: "red" }}>
                    Min length is: 3
                  </div>
                )}
              </label>
            </div>
            <div>
              <label>
                Password:
                <input
                  onChange={(e) => password.onChange(e)}
                  value={password.value}
                  onBlur={(e) => password.onBlur(e)}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                {password.dirty && password.isEmpty && (
                  <div style={{ color: "red" }}>
                    Enter your password
                  </div>
                )}
                {password.dirty &&
                  password.minLengthError && (
                    <div style={{ color: "red" }}>
                      Min length is: 5
                    </div>
                  )}
              </label>
            </div>
            {error ? (
              <div style={{ color: "red" }}>
                Invalid password or email
              </div>
            ) : null}
            <Button
              sx={{ m: 2 }}
              variant="contained"
              onClick={handleClick}
              disabled={email.error || password.error}>
              Log in
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
