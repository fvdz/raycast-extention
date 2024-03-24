import { closeMainWindow } from "@raycast/api";
import { setWifi } from "./utils";

export default async function main() {
  setWifi('on');
  closeMainWindow();
}