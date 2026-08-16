import { RPButton } from "../rp/RPButton";

/**
 * Every option the button accepts. There is no way to add another, or to
 * pass a different color.
 */
export default function RPButtonIntents() {
  return (
    <>
      <RPButton intent="primary">Find a pacer</RPButton>
      <RPButton intent="secondary">View race</RPButton>
      <RPButton intent="ghost">Cancel</RPButton>
      <RPButton intent="racer">I need a pacer</RPButton>
      <RPButton intent="black">Sign in</RPButton>
      <RPButton intent="primary" disabled>
        Sending
      </RPButton>
    </>
  );
}
