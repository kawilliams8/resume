import { Badge } from "@chakra-ui/react";

export type RPBadgeVariant =
  | "onLight"
  | "onDark"
  | "terracotta"
  | "amber"
  | "sky"
  | "green"
  | "earth"
  | "stone"
  | "warning"
  | "red";

interface RPBadgeProps {
  children: React.ReactNode;
  variant?: RPBadgeVariant;
  size?: "sm" | "md";
  truncate?: boolean;
}

// onLight (default): dark green bg, light text — use on white/earth sections
// onDark: light bg, dark text — use on dark green sections
// terracotta: warm accent
// amber: warm amber — match reasons, pending states, upcoming status
// sky: light blue accent
// green: subtle green — skill tags
// stone: neutral muted — counts, participated/withdrawn status
// warning: orange-red — DNS, error states
const variantStyles: Record<RPBadgeVariant, object> = {
  onLight:    { bg: "green.700",  color: "green.50"          },
  onDark:     { bg: "green.200",  color: "green.700"         },
  terracotta: { bg: "#fdf0ed",    color: "accent.terracotta" },
  amber:      { bg: "amber.100",  color: "amber.800"         },
  sky:        { bg: "#e8f4fb",    color: "accent.sky"        },
  green:      { bg: "#f2f7f2",    color: "#234d24"           },
  earth:      { bg: "#f5f3ef",    color: "#6b5e4e"           },
  stone:      { bg: "stone.100",  color: "stone.600"         },
  warning:    { bg: "#fed7aa",    color: "#9a3412"           },
  red:        { bg: "#fee2e2",    color: "#991b1b"           },
};

export function RPBadge({ children, variant = "onLight", size = "md", truncate }: RPBadgeProps) {
  return (
    <Badge
      {...variantStyles[variant]}
      fontSize={size === "sm" ? "xs" : "sm"}
      px={size === "sm" ? 3 : 4}
      py={size === "sm" ? 0.5 : 2}
      borderRadius="full"
      fontFamily="DM Mono"
      {...(truncate ? { maxW: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } : {})}
    >
      {children}
    </Badge>
  );
}
