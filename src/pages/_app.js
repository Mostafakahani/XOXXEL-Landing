import Layout from "@/Components/Layout/Layout";
import "@/styles/globals.css";
import BaseTheme from "../theme/index";
import { Grid } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <BaseTheme>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BaseTheme>
  );
}
