import { runYabaiCommand } from "./helpers/scripts";
import { showFailureToast } from "@raycast/utils";

export default async function Command() {
  try {
    const { stderr } = await runYabaiCommand("-m window --focus west");

    if (stderr) {
      throw new Error(stderr);
    }
  } catch (error) {
    showFailureToast(error, {
      title: "Failed to warp window.",
    });
  }
}
