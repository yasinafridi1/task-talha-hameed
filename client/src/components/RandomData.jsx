import React from "react";

import { Box, Button, Typography } from "@mui/material";

const randomData = [
  { id: 1, numbers: 250, desc: "Registered Venues" },
  { id: 2, numbers: 250, desc: "Registered Caterers" },
  { id: 3, numbers: 250, desc: "Registered Decorators" },
  { id: 4, numbers: 250, desc: "Registered Photographers" },
];

const RandomData = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      {randomData.map((data) => (
        <Box
          key={data.id}
          sx={{
            width: "294px",
            height: "104px",
            border: "0px 3px 0px 0px",
            backgroundColor: "#10BE94",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "37px",
              fontWeight: "800",
              lineHeight: "38.73px",
            }}
          >
            {data.numbers}+
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "29.05px",
            }}
          >
            {data.desc}
          </Typography>
        </Box>
      ))}
    </div>
  );
};

export default RandomData;
