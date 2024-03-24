import { runAppleScript } from "@raycast/utils";
import { execSync } from "child_process";

export type WirelessState = 'on' | 'off';

export function setWifi(state: WirelessState) {
  execSync(`/usr/sbin/networksetup -setairportpower airport ${state}`);
}
export function sleep() {
  runAppleScript('tell application "System Events" to sleep');
}

export function setBlueTooth(state: WirelessState) {
  runAppleScript(`
  tell application "System Preferences"
    set current pane to pane "com.apple.preferences.Bluetooth"
    tell application "System Events"
        tell process "System Preferences"
            ${state === 'on' ? `
              set isOnCheckbox to checkbox "On" of window "Bluetooth"
              if value of isOnCheckbox is 0 then
                  click isOnCheckbox
              end if
            ` : `
              set isOnCheckbox to checkbox "On" of window "Bluetooth"
              if value of isOnCheckbox is 1 then
                  click isOnCheckbox
              end if
            `}
            
        end tell
    end tell
    quit
  end tell
`);
}