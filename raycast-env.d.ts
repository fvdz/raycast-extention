/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `goodbye` command */
  export type Goodbye = ExtensionPreferences & {}
  /** Preferences accessible in the `hello` command */
  export type Hello = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `goodbye` command */
  export type Goodbye = {}
  /** Arguments passed to the `hello` command */
  export type Hello = {}
}

