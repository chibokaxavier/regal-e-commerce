import Layout from "@/components/Layout";
import CartProvider from "@/contexts/CartContext";
import SidebarProvider, { SidebarContext } from "@/contexts/SidebarContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </SidebarProvider>
  );
}
