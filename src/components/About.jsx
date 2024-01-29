import React from "react";
import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Stack>
      <Link to="/about">
        <Box>Hello</Box>
      </Link>
    </Stack>
  );
};

export default About;
