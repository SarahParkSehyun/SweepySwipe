import { UserConfig, defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import { createHtmlPlugin } from "vite-plugin-html";

export default ({ mode }: UserConfig) => {
  Object.assign(process.env, loadEnv(mode || "", `${process.cwd()}/.env`));

  return defineConfig({
    envDir: ".env",
    base: "/",
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/assets/styles/main.scss";`,
        },
      },
    },
    plugins: [
      react(),
      svgr(), // NOTE:: 4버전부터 exportAsDefault값 사라짐. 파일 임포트 시, *.svg?react 형태로 불러와야함
      createHtmlPlugin({
        inject: {
          data: {
            title: "보일러플레이트 프론트",
            favicon: "/images/vite.svg",
          },
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    server: {
      port: 3000,
      open: true,
    },
  });
};
