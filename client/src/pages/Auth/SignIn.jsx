import React, { useState } from "react";
import axios from "axios";

import { Box, TextField, Typography, Checkbox, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted", formData);
    axios.post("http://localhost:3001/api/login", formData).then((response) => {
      localStorage.setItem(`token`, response.data.token);
      navigate("/");
    });
  };

  return (
    <Box sx={{ width: "967px", height: "655px", margin: "10rem auto 0" }}>
      <Box>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#05C7AA",
            height: "155px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "36px",
              fontWeight: "700",
              lineHeight: "43.57px",
            }}
          >
            Login to WedBook
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
              margin: "0 auto",
            }}
          >
            <TextField
              placeholder="Enter Phone number"
              sx={{ margin: "2rem 0 1rem" }}
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <TextField
              placeholder="Enter Password"
              sx={{ margin: "1rem 0" }}
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
            />

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox />
                <Typography sx={{ color: "#737373" }}>Show Password</Typography>
              </Box>
              <Typography sx={{ color: "#05C7AA" }}>
                Forget Password ?
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "#05C7AA",
                  fontSize: "18px",
                  fontWeight: "bold",
                  border: "1px solid #05C7AA",
                }}
                type="submit"
              >
                Login
              </Button>
              <Link style={{ textDecoration: "none" }}>
                <Typography sx={{ color: "#05C7AA", marginTop: "1rem" }}>
                  Don't have account?
                </Typography>
              </Link>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignIn;
