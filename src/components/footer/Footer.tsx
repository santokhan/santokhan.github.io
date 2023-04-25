import { Box, Container, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

export default function Footer() {
  return (
    <Box>
      <hr />
      <Container maxWidth="xl" sx={{ py: "2rem" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 4,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Santo
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{ py: "2rem" }}>
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          2023@Copyright all rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
