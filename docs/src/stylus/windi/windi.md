---
title: 关于前端开发的样式问题
des: windi
date: 2022-02-23
author: Kora
tags:
    - windi
    - 样式
group: stylus
---

<img src="https://cn.windicss.org/assets/logo.svg" style='display: block; margin: 0 auto; width: 300px'/>

[传送门 | windo.css 中文文档](https://cn.windicss.org/)

> 常用配置 TS(windo.config.ts)

```java
// https://cn.windicss.org/ 中文文档
import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";
import typography from "windicss/plugin/typography";

function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt);
}

export default defineConfig({
  darkMode: "class", // media
  attributify: true,
  safelist: [
    range(3).map(i => `p-${i}`), // p-1 to p-3
    range(10).map(i => `mt-${i}`) // mt-1 to mt-10
  ],
  plugins: [typography()],
  theme: {
    extend: {
      zIndex: {
        "-1": "-1"
      },
      screens: {
        // 自定义断点
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1600px"
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "inherit",
            a: {
              color: "inherit",
              opacity: 0.75,
              fontWeight: "500",
              textDecoration: "underline",
              "&:hover": {
                opacity: 1,
                color: colors.teal[600]
              }
            },
            b: { color: "inherit" },
            strong: { color: "inherit" },
            em: { color: "inherit" },
            h1: { color: "inherit" },
            h2: { color: "inherit" },
            h3: { color: "inherit" },
            h4: { color: "inherit" },
            code: { color: "inherit" }
          }
        }
      }
    }
  },
  shortcuts: {
    KRFlex: "text-white bg-green-500 hover:bg-green-700",
    "kr-dark_btn":
      "text-[#fff] bg-[#4c7cc3] :hover(bg-[#900]) dark:text-green-400 dark:bg-gray-800"
  }
});

```