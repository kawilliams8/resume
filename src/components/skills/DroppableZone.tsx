import { ReactNode, useRef } from "react";
import { Box, useTheme } from "@mui/material";
import { AddBox } from "@mui/icons-material";
import { useDrop } from "react-dnd";
import { Category, Skill, ItemType } from "./types";
import { wrongDropFlash } from "./animations";

interface DroppableZoneProps {
  category: Category;
  onDrop: (skillId: string) => void;
  children: ReactNode;
  shake?: boolean;
}

export const DroppableZone = ({
  category,
  onDrop,
  children,
  shake,
}: DroppableZoneProps) => {
  const theme = useTheme();
  const dropRef = useRef<HTMLDivElement>(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType,
    drop: (item: { id: string; skill: Skill }) => {
      onDrop(item.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  drop(dropRef);

  return (
    <div ref={dropRef} style={{ flex: 1, marginTop: 10 }}>
      <Box
        sx={{
          minHeight: { xs: "120px", sm: "200px" },
          border: "2px dashed",
          borderRadius: "16px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "16px",
          transition: "all 0.3s ease",
          position: "relative",
          borderColor: shake
            ? "#ef4444"
            : isOver
              ? theme.skills.getDropZoneColor(category.id)
              : theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.3)"
                : "rgba(0, 0, 0, 0.3)",
          background: shake
            ? "rgba(239, 68, 68, 0.2)"
            : isOver
              ? theme.palette.mode === "dark"
                ? `${theme.skills.getDropZoneColor(category.id)}15`
                : `${theme.skills.getDropZoneColor(category.id).replace("0.8)", "0.1)")}`
              : theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.05)"
                : "rgba(0, 0, 0, 0.05)",
          backdropFilter: "blur(10px)",
          flex: 1,
          animation: shake ? `${wrongDropFlash} 0.8s ease` : "none",
        }}
      >
        {isOver && (
          <Box
            sx={{
              position: "absolute",
              top: { xs: "40%", sm: "30%" },
              margin: "0 auto",
              zIndex: 10,
            }}
          >
            <AddBox
              sx={{
                fontSize: { xs: "4rem", sm: "8rem" },
                color: "white",
                opacity: 0.3,
              }}
            />
          </Box>
        )}
        {children}
      </Box>
    </div>
  );
};
