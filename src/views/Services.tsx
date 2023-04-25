import { Box, Link, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import banner from "../assets/image/santo-sky.png";

export default function Home() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ fontSize: "3rem", fontWeight: 600 }}>
        Hi, <br />I am{" "}
        <Box component="span" sx={{ color: "#4070f4" }}>
          Santo
        </Box>{" "}
        <br />
        Web Designer
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="img"
          src={banner}
          alt="banner"
          sx={{ width: 500, objectFit: "contain" }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/"></Link>
        </Box>
      </Box>
    </Container>
  );
}
