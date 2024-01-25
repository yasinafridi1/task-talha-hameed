import React, { useState } from "react";
import axios from "axios";

import { Box, TextField, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      console.log("Form submitted:", formData);
      setPasswordError("");
      axios
        .post("http://localhost:3001/api/signup", formData)
        .then((response) => {
          if (response) {
            navigate("/signin");
          }
        });
    }
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
            Welcome to WedBook
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
              placeholder="Enter Full Name"
              sx={{ margin: "2rem 0 1rem" }}
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <TextField
              placeholder="Enter Phone number"
              sx={{ margin: "1rem 0" }}
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <TextField
              placeholder="Enter Gmail"
              type="email"
              sx={{ margin: "1rem 0" }}
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              placeholder="Enter Password"
              type="password"
              sx={{ margin: "1rem 0" }}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <TextField
              placeholder="Enter Password"
              type="password"
              sx={{ margin: "1rem 0" }}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            {passwordError && (
              <Typography sx={{ color: "red" }}>{passwordError}</Typography>
            )}

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
                  Already have account?
                </Typography>
              </Link>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
