import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import "../index.css";
import { SideBar, ChatBox, About } from "../components/index";
import { Link } from "react-router-dom";

const Feed = () => {
  const [selectCategory, setSelectCategory] = useState("Chat Bot");

  useEffect(() => {
    setSelectCategory(selectCategory);
  }, [selectCategory]);

  return (
    <Link to="/">
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box
          // className="backtest"
          sx={{
            height: {
              sx: "auto",
              xs: "8vh",
              md: "92vh",
            },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <SideBar
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
          />
          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: "#fff" }}
          >
            Copyright &copy; 2023
          </Typography>
        </Box>

        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            fontSize="22px"
            margin={0}
            sx={{
              color: "white",
            }}
          >
            {selectCategory}
          </Typography>
        </Box>

        <ChatBox />
      </Stack>
    </Link>
  );
};

export default Feed;
