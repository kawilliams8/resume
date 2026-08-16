import { Button } from "@chakra-ui/react";
import React from "react";

type RPButtonIntent =
  | "primary"
  | "secondary"
  | "ghost"
  | "onDark"
  | "ghostOnDark"
  | "black"
  | "racer";

interface RPButtonProps {
  intent?: RPButtonIntent;
  size?: "xs" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const intentStyles: Record<RPButtonIntent, object> = {
  primary: {
    bg: "green.700",
    color: "green.50",
    _hover: { bg: "green.600" },
  },
  secondary: {
    variant: "outline",
    borderColor: "green.700",
    color: "green.700",
    bg: "transparent",
    _hover: { bg: "green.50" },
  },
  ghost: {
    variant: "ghost",
    color: "stone.600",
    _hover: { bg: "green.50", color: "green.700" },
  },
  onDark: {
    bg: "green.50",
    color: "green.700",
    _hover: { bg: "white" },
  },
  ghostOnDark: {
    variant: "ghost",
    color: "green.50",
    borderColor: "whiteAlpha.400",
    _hover: { bg: "whiteAlpha.200" },
  },
  black: {
    bg: "black",
    color: "white",
    _hover: { bg: "gray.800" },
  },
  racer: {
    bg: "amber.500",
    color: "white",
    _hover: { bg: "amber.600" },
  },
};

export function RPButton({
  intent = "primary",
  size = "md",
  fullWidth = false,
  children,
  onClick,
  disabled,
  type = "button",
}: RPButtonProps) {
  return (
    <Button
      {...intentStyles[intent]}
      size={size}
      w={fullWidth ? "100%" : undefined}
      onClick={onClick}
      disabled={disabled}
      type={type}
      fontFamily="body"
      style={{ borderRadius: "12px" }}
    >
      {children}
    </Button>
  );
}
