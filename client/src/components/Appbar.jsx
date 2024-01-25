import React from "react";

import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigate = useNavigate();

  const handleRoute = (route) => {
    navigate(`/${route}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "96px",
        width: "100%",
      }}
    >
      <Typography
        variant="h4"
        margin={5}
        fontWeight={"bold"}
        sx={{ color: "#05C7AA", cursor: "pointer" }}
      >
        Wedbook
      </Typography>
      <Box
        sx={{
          width: "40%",
          display: "flex",
          justifyContent: "space-between",
          "& > a": {
            textDecoration: "none",
            color: "#707070",
            fontFamily: "sans-serif inter",
            fontSize: "24px",
            fontWeight: "500",
            lineHeight: "29.05px",
          },
        }}
      >
        <Link>Home</Link>
        <Link>Services</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </Box>

      <Box sx={{ width: "300px" }}>
        <Button
          onClick={() => handleRoute("signin")}
          size="large"
          sx={{
            color: "#05C7AA",
            textTransform: "capitalize",
            fontSize: "17px",
            fontWeight: "700",
            marginRight: "10px",
          }}
        >
          Sign In
        </Button>
        <Button
          onClick={() => handleRoute("signup")}
          variant="contained"
          sx={{
            backgroundColor: "#05C7AA",
            textTransform: "capitalize",
            fontSize: "17px",
            fontWeight: "700",
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Appbar;
