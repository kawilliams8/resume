import { Box, Typography, Paper, useTheme } from "@mui/material";
import { useDragLayer } from "react-dnd";

export const CustomDragLayer = () => {
  const theme = useTheme();
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    isDragging: monitor.isDragging(),
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
  }));

  if (!isDragging || !currentOffset) {
    return null;
  }

  const { x, y } = currentOffset;
  const skill = item?.skill;

  if (!skill) return null;

  const { primary: primaryColor, secondary: secondaryColor } =
    theme.skills.gradientColors;

  return (
    <div
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 1000,
        left: x - 80,
        top: y - 32,
        transform: "rotate(-3deg)",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          background: theme.skills.dragPreviewBackground,
          backdropFilter: "none",
          border: `2px solid ${primaryColor}40`,
          borderRadius: "12px",
          padding: "12px 16px",
          minHeight: "64px",
          width: "160px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ my: 1 }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              color: primaryColor,
              fontSize: "1.5rem",
            }}
          >
            {skill.name}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: secondaryColor,
              fontSize: "0.75rem",
              display: "block",
              mt: 0.5,
            }}
          >
            {skill.years} yrs • {skill.context}
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};
