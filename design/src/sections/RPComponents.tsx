import { ChakraProvider } from "@chakra-ui/react";
import { system } from "../rp/theme";
import { Demo } from "../components/Demo";
import RPButtonIntents from "../demos/RPButtonIntents";
import rpButtonIntentsSource from "../demos/RPButtonIntents?raw";

/**
 * Everything that needs Chakra lives behind this one lazy boundary, so the rest
 * of the page does not carry 108 kB it has no use for.
 */
export default function RPComponents() {
  return (
    <ChakraProvider value={system}>
      <Demo
        source={rpButtonIntentsSource}
        caption="Racer & Pacer's own RPButton, rendered from its own theme. Not a rebuild."
      >
        <RPButtonIntents />
      </Demo>
    </ChakraProvider>
  );
}
