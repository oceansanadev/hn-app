import { Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function HNLogo() {
  return (
    <>
      <Button
        LinkComponent={RouterLink}
        to="/"
        sx={{
          gap: 1,
        }}
      >
        {/* <Box
          sx={{
            border: "2px solid white",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 1,
          }}
        ></Box> */}
        <Typography
          fontFamily={"sans-serif"}
          fontSize={30}
          fontWeight={"500"}
          color={"white"}
          sx={{
            border: "1.5px solid white",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Y
        </Typography>
        <Typography
          fontFamily={"sans-serif"}
          fontSize={20}
          fontWeight="bold"
          color={"white"}
          // mr={2}
          // display={{ xs: "none", sm: "block" }}
        >
          Hacker News
        </Typography>
      </Button>
    </>
  );
}

export default HNLogo;
