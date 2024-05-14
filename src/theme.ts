// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    // colorPrimary: "#52c41a",
    borderRadius: 4,
  },
  components: {
    Menu: {
      colorBgLayout: "white",
      subMenuItemBg: "white",
    },
  },
};

export default theme;
