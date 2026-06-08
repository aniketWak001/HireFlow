import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
    coverage: {
      exclude: [
        "node_modules/**",
        "dist/**",
        "generated/**",
        "**/*.test.ts",
        "**/*.spec.ts",
      ],
    },
  },
});
