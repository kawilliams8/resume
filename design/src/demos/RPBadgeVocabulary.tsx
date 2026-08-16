import { RPBadge } from "../rp/RPBadge";

/**
 * All ten badge styles. Each name says where the badge sits or what it
 * means, never what it looks like.
 */
export default function RPBadgeVocabulary() {
  return (
    <>
      <RPBadge variant="onLight">onLight</RPBadge>
      <RPBadge variant="terracotta">terracotta</RPBadge>
      <RPBadge variant="amber">amber</RPBadge>
      <RPBadge variant="sky">sky</RPBadge>
      <RPBadge variant="green">green</RPBadge>
      <RPBadge variant="earth">earth</RPBadge>
      <RPBadge variant="stone">stone</RPBadge>
      <RPBadge variant="warning">warning</RPBadge>
      <RPBadge variant="red">red</RPBadge>
      <span style={{ background: "#1b3a1c", borderRadius: 8, padding: "6px 10px" }}>
        <RPBadge variant="onDark">onDark</RPBadge>
      </span>
    </>
  );
}
