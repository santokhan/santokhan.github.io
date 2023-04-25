import { Box, Link, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import banner from "../assets/image/santo-sky.png";

export default function Home() {
  const iconStyle = { ":hover": { color: "red" } };

  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        alignItems: { xs: "flex-start", lg: "center" },
        justifyContent: { xs: "space-evenly", lg: "space-between" },
        py: { xs: "4rem" },
      }}
    >
      <Typography
        sx={{ fontSize: { xs: "2.5rem", sm: "3.5rem" }, fontWeight: 600 }}
      >
        Hi, <br />I am{" "}
        <Box component="span" sx={{ color: "#4070f4" }}>
          Santo
        </Box>{" "}
        <br />
        Web Developer
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box
            component="img"
            src={banner}
            alt="banner"
            sx={{ width: { xs: "100%", sm: 500 }, objectFit: "contain" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            fontSize: "1.5rem",
            px: "1rem",
          }}
        >
          <Link href="/" sx={iconStyle}>
            <i className="fab fa-github"></i>
          </Link>
          <Link href="/" sx={iconStyle}>
            <i className="fab fa-facebook"></i>
          </Link>
          <Link href="/" sx={iconStyle}>
            <i className="fab fa-twitter"></i>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
