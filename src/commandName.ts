import { CMD_PREFIX } from "./constants";

export type Command =
  | "addHost"
  | "publish"
  | "download"
  | "star"
  | "unstar"
  | "viewSnippet"
  | "viewSnippetInBrowser"
  | "exploreMore"
  | "updateToken";

export default function commandName(shorthand: Command) {
  return `${CMD_PREFIX}${shorthand}`;
}
