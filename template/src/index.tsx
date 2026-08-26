import { Context } from "react";

import { AuthContextType } from "@/lib/types/common";

import "./index.css";

export { default as manifest } from "./manifest";
export { default as routes } from "./routes";

// Globals that Care FE sets on `window` for plugs (see care_fe `src/index.tsx`)
declare global {
  interface Window {
    CARE_API_URL: string;
    AuthUserContext: Context<AuthContextType | null>;
  }
}

export const CARE_API_URL = window.CARE_API_URL;
