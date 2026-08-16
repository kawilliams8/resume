import { RPBadge } from "../rp/RPBadge";
import { RPPill } from "../rp/RPPill";

/**
 * RPPill reuses RPBadge's exact list of variant names, so the names always
 * match. But each component picks its own colors, and two have drifted
 * apart. Same name, different look.
 */
export default function BadgeVsPill() {
  return (
    <>
      <RPBadge variant="amber">amber badge</RPBadge>
      <RPPill variant="amber">amber pill</RPPill>
      <RPBadge variant="red">red badge</RPBadge>
      <RPPill variant="red">red pill</RPPill>
    </>
  );
}
