import { Paper } from "@mui/material";
import { styled, css } from "@mui/system";
import { celebrate, wrongDropFlash } from "./animations";

export const SkillCard = styled(Paper, {
  shouldForwardProp: (prop) =>
    !["dragging", "placed", "wrongDrop"].includes(prop as string),
})<{ dragging?: boolean; placed?: boolean; wrongDrop?: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: grab;
  border-radius: 12px;
  border: ${({ wrongDrop }) =>
    wrongDrop ? "2px solid #ef4444" : "2px solid rgba(255, 255, 255, 0.2)"};
  background: ${({ dragging, placed, wrongDrop }) =>
    wrongDrop
      ? "rgba(239, 68, 68, 0.2)"
      : placed
        ? "linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(6, 182, 212, 0.9))"
        : dragging
          ? "rgba(255, 255, 255, 1)"
          : "rgba(255, 255, 255, 0.1)"};
  backdrop-filter: ${({ dragging }) => (dragging ? "none" : "blur(10px)")};
  transition: all 0.3s ease;
  ${({ placed, wrongDrop }) =>
    placed
      ? css`
          animation: ${celebrate} 0.6s ease;
        `
      : wrongDrop
        ? css`
            animation: ${wrongDropFlash} 0.8s ease;
          `
        : css``}
  width: 160px;
  min-height: 64px;
  height: 64px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.4);
  }

  &:active {
    cursor: grabbing;
  }
`;