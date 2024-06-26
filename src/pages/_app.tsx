import Layout from "@/components/layout";
import "@/styles/globals.css";
import theme from "@/theme";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <Layout menuData={pageProps?.menuData}>
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  );
}
