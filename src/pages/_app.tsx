import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Amplify } from "aws-amplify";
import config from "../aws-exports";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(config);
// Amplify.configure({ ...config, ssr: true });

export default function App({ Component, pageProps }: AppProps) {
   return (
      <AmplifyProvider>
         <Component {...pageProps} />
      </AmplifyProvider>
   );
}
