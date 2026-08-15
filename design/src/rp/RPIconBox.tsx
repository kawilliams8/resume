import { Box, Icon } from "@chakra-ui/react";
import React from "react";

type RPIconBoxSize = "xs" | "sm" | "md" | "lg";

interface RPIconBoxProps {
  icon: React.ElementType;
  bg?: string;
  color?: string;
  size?: RPIconBoxSize;
}

const sizeMap: Record<RPIconBoxSize, { p: number; boxSize: number; borderRadius: string }> = {
  xs: { p: 1, boxSize: 3, borderRadius: "sm" },
  sm: { p: 2, boxSize: 4, borderRadius: "md" },
  md: { p: 3, boxSize: 5, borderRadius: "lg" },
  lg: { p: 4, boxSize: 7, borderRadius: "xl" },
};

export function RPIconBox({
  icon,
  bg = "green.50",
  color = "green.700",
  size = "md",
}: RPIconBoxProps) {
  const { p, boxSize, borderRadius } = sizeMap[size];
  return (
    <Box p={p} bg={bg} borderRadius={borderRadius} display="inline-flex" alignItems="center" justifyContent="center" aria-hidden="true">
      <Icon as={icon} boxSize={boxSize} color={color} />
    </Box>
  );
}
