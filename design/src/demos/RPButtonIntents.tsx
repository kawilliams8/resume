import { RPButton } from "../rp/RPButton";

/**
 * Every intent the component accepts. There is no eighth option, and no way to
 * pass a colour: the API is the constraint.
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
