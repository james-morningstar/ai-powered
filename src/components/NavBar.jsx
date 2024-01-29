import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import { logo } from "../utilities/constants";
import "../index";

const NavBar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      backgroundColor: "rgba(17, 16, 16, 0.151)",
      zIndex: 1,
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={40} style={{ borderRadius: "30px" }} />
    </Link>
    <Typography
      className="title-name"
      sx={{
        fontSize: "20px",
        fontFamily: "Helvetica Neue",
        fontWeight: "bold",
        marginLeft: "10px",
      }}
    >
      AI-Powered
    </Typography>
  </Stack>
);
export default NavBar;
