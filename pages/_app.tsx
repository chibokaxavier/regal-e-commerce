import Layout from "@/components/Layout";
// import ProductProvider, { ProductContext } from "@/contexts/ProductContext";
import SidebarProvider, { SidebarContext } from "@/contexts/SidebarContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
    {/* <ProductProvider children={""}> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      {/* </ProductProvider> */}
    </SidebarProvider>
  );
}
