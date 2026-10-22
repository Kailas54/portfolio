import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** Desktop uses GPU flocking in vanta birds, which often fails silently; use the mobile path everywhere. */
function vantaBirdsDesktopFix() {
  return {
    name: "vanta-birds-desktop-fix",
    transform(code, id) {
      if (id.includes("vanta.birds.min")) {
        return code.replace("const M=!i()", "const M=!1");
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), vantaBirdsDesktopFix()],
});
