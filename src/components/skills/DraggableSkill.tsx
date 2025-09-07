import { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { SkillCard } from "./SkillCard";
import { Skill, ItemType } from "./types";

interface DraggableSkillProps {
  skill: Skill;
  isPlaced?: boolean;
  isWrongDrop?: boolean;
}

export const DraggableSkill = ({
  skill,
  isPlaced,
  isWrongDrop,
}: DraggableSkillProps) => {
  const dragRef = useRef<HTMLDivElement>(null);

  const [{ isDragging: dragState }, drag, preview] = useDrag(
    () => ({
      type: ItemType,
      item: { id: skill.id, skill },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [skill]
  );

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  drag(dragRef);

  return (
    <div ref={dragRef} style={{ width: "100%" }}>
      <SkillCard
        dragging={dragState}
        placed={isPlaced}
        wrongDrop={isWrongDrop}
        elevation={dragState ? 8 : 2}
        sx={{
          cursor: dragState ? "grabbing" : "grab",
          width: { xs: "100%", sm: "160px" },
          height: { xs: "64px", sm: "80px" },
          maxWidth: { xs: "200px", sm: "160px" },
        }}
      >
        <Box sx={{ textAlign: "center", width: "100%", my: 1 }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              color: "white",
              fontSize: { xs: "0.875rem", sm: "1rem" },
              textAlign: "center",
            }}
          >
            {skill.name}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontSize: { xs: "0.7rem", sm: "0.75rem" },
              display: "block",
              textAlign: "center",
            }}
          >
            {skill.years} yrs • {skill.context}
          </Typography>
        </Box>
      </SkillCard>
    </div>
  );
};
