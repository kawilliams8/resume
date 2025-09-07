import { Typography } from "@mui/material";

interface SectionTitleProps {
  children: string;
}

export const SectionTitle = ({ children }: SectionTitleProps) => (
  <Typography
    variant="h4"
    sx={{
      fontWeight: 100,
      mt: 4,
      fontSize: { xs: "1.5rem", sm: "1.75rem" },
      letterSpacing: 6,
      opacity: 0.7,
      maxWidth: "90%",
      wordBreak: "break-word",
      whiteSpace: "normal",
    }}
  >
    {children}
  </Typography>
);