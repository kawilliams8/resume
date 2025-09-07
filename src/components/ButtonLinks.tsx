import { Button, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlineIcon from "@mui/icons-material/EmailOutlined";
import styled from "@emotion/styled";

export const ButtonLinks = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        justifyItems: "center",
        my: 1,
        // xs: single column
        gridTemplateAreas: {
          xs: `"github" "linkedin" "email"`,
          sm: `"github linkedin" "email email"`,
          md: `"github linkedin email"`,
        },
        // md+: single row
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr",
        },
      }}
    >
      <StyledButton
        href="https://github.com/kawilliams8"
        variant="contained"
        startIcon={<GitHubIcon />}
        sx={{ gridArea: "github", width: { xs: "180px", sm: "130px" } }}
      >
        GitHub
      </StyledButton>

      <StyledButton
        href="https://www.linkedin.com/in/kawilliamsco/"
        variant="contained"
        startIcon={<LinkedInIcon />}
        sx={{ gridArea: "linkedin", width: { xs: "180px", sm: "130px" } }}
      >
        LinkedIn
      </StyledButton>

      <StyledButton
        href="mailto:kawilliams8@gmail.com?subject=Hey,%20Katie!"
        variant="contained"
        startIcon={<EmailOutlineIcon />}
        sx={{ gridArea: "email", width: { xs: "180px", sm: "130px" } }}
      >
        Email Me
      </StyledButton>
    </Box>
  );
};

export const StyledButton = styled(Button)(({}) => ({
  target: "_blank",
  rel: "noopener",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "white",
  fontWeight: 500,
  backdropFilter: "blur(4px)",
  borderRadius: "4px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
}));
