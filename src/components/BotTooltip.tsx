import { FavoriteBorder, HelpOutline } from "@mui/icons-material";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import styled from "@emotion/styled";

export const BotTooltip = () => {
  return (
    <HtmlTooltip
      id="thing"
      title={
        <Box sx={{ p: 1 }}>
          <Typography variant="body1" mb={1}>
            Does this control the live Bluesky account?
          </Typography>
          <Typography variant="body2" mb={1}>
            No. It is not connected to GitHub, Bluesky, or anything outside of
            this website. Click around to learn without fear.
          </Typography>
          <Stack sx={{ justifySelf: "flex-end" }}>
            <FavoriteBorder
              sx={{
                textAlign: "right",
                fontSize: "28px",
                color: "salmon",
              }}
            />
          </Stack>
        </Box>
      }
    >
      <IconButton size="small" sx={{ color: "#94a3b8" }}>
        <HelpOutline fontSize="small" />
      </IconButton>
    </HtmlTooltip>
  );
};

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: 12,
    border: "1px solid #dadde9",
  },
}));
