import { RPBadge } from "../rp/RPBadge";
import { RPPill } from "../rp/RPPill";

/**
 * The drift, live. RPPill imports RPBadge's variant type, so TypeScript
 * enforces one shared vocabulary — but each component declares its own values,
 * and two have quietly diverged. Same name, two renders. This is how design
 * systems rot: the contract is checked, the rendering is not.
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
