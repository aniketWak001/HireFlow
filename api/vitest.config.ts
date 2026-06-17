import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
    env: {
      NODE_ENV: "test",
    },
    include: ["tests/**/*.test.ts"],
    exclude: ["**/node_modules/**", "**/dist/**"],
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
