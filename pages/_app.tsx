import Layout from "@/components/Layout";
import SidebarProvider, { SidebarContext } from "@/contexts/SidebarContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </SidebarProvider>
  );
}
