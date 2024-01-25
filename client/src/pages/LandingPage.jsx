import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import venue from "../assets/venue.png";

import Appbar from "../components/Appbar";
import RandomData from "../components/RandomData";

const links = [
  { id: 1, linkName: "Venue", desc: "Book the best venue banquet hall" },
  { id: 2, linkName: "Caterers", desc: "Search the best Caterer around you" },
  { id: 3, linkName: "Decorators", desc: "Find the best decorator and enjoy" },
  { id: 4, linkName: "Cooks", desc: "Explore the best chefs and cooks" },
];

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    if (!localStorage.getItem("token")) {
      navigate("/signin");
    } else {
      navigate("/products");
    }
  };

  return (
    <div>
      <Appbar />
      <Box
        sx={{
          width: "100%",
          height: "638px",
          backgroundColor: "lightblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Typography
            align="center"
            sx={{
              fontSize: "48px",
              color: "#fff",
              fontWeight: "700",
              lineHeight: "58.09px",
              fontFamily: "sans-serif inter",
            }}
          >
            WedBook
          </Typography>
          <Typography
            align="center"
            sx={{
              fontSize: "32px",
              color: "#fff",
              fontWeight: "600",
              lineHeight: "38.73px",
              fontFamily: "sans-serif inter",
            }}
          >
            Your Personal Wedding Planner Start your Journey to the perfect
            wedding
          </Typography>
        </Box>
      </Box>
      <Box>
        <RandomData />
        <Box>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <Typography>Main Services</Typography>
            <Button variant="contained" sx={{ backgroundColor: "#05C7AA" }}>
              Become a Provider
            </Button>
          </Container>
          <Grid container sx={{ width: "80%", margin: "0 auto" }}>
            {links.map((link) => (
              <Grid
                key={link.id}
                item
                lg={6}
                md={6}
                sx={{
                  width: "644px",
                  height: "160px",
                  backgroundColor: "lightgray",
                  position: "relative",
                }}
              >
                <span onClick={handleRoute} style={{ cursor: "pointer" }}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0 20px",
                    }}
                  >
                    <Box>
                      <Typography sx={{ color: "#05C7AA" }}>
                        {link.linkName}
                      </Typography>
                      <Typography>{link.desc}</Typography>
                    </Box>
                    <img
                      src={venue}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "cover",
                      }}
                      alt="Venue"
                    />
                  </Box>
                </span>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default LandingPage;
