import { Badge, HStack } from "@chakra-ui/react";
import type { RPBadgeVariant } from "./RPBadge";

interface RPPillProps {
  children: React.ReactNode;
  variant?: RPBadgeVariant;
  icon?: React.ReactNode;
}

const variantStyles: Record<RPBadgeVariant, object> = {
  onLight:    { bg: "green.700",  color: "green.50"          },
  onDark:     { bg: "green.200",  color: "green.700"         },
  terracotta: { bg: "#fdf0ed",    color: "accent.terracotta" },
  amber:      { bg: "amber.300",  color: "white"             },
  sky:        { bg: "#e8f4fb",    color: "accent.sky"        },
  green:      { bg: "#f2f7f2",    color: "#234d24"           },
  earth:      { bg: "#f5f3ef",    color: "#6b5e4e"           },
  stone:      { bg: "stone.100",  color: "stone.600"         },
  warning:    { bg: "#fed7aa",    color: "#9a3412"           },
  red:        { bg: "accent.terracotta", color: "white"      },
};

export function RPPill({ children, variant = "stone", icon }: RPPillProps) {
  return (
    <Badge
      {...variantStyles[variant as keyof typeof variantStyles]}
      px={2}
      py={0.5}
      borderRadius="full"
      border="1px solid"
      borderColor="transparent"
      fontSize="xs"
      fontWeight="500"
      fontFamily="body"
      textTransform="none"
      letterSpacing="normal"
      display="inline-flex"
      alignItems="center"
      gap={1}
    >
      {icon && <HStack as="span" gap={1} display="inline-flex" alignItems="center">{icon}</HStack>}
      {children}
    </Badge>
  );
}
