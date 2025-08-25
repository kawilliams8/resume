import { styled } from "@mui/material/styles";
import { Fab, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface ThemeToggleProps {
  onToggle: () => void;
}

export const ThemeToggle = ({ onToggle }: ThemeToggleProps) => {
  const theme = useTheme();
  return (
    <StyledFab onClick={onToggle} aria-label="edit theme" variant="extended">
      <Typography sx={{ fontSize: 24 }}>
        {theme.palette.mode === "dark" ? "☀️" : "🌙"}
      </Typography>
    </StyledFab>
  );
};

export const StyledFab = styled(Fab)(({ theme }) => ({
  position: "fixed",
  top: 12,
  right: 12,
  zIndex: 1000,
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)"
      : "linear-gradient(135deg, #7c3aed 0%, #0891b2 100%)",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));
