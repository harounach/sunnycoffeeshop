import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "@/state/store";
import { loadUser } from "@/state/userSlice";
import { Provider } from "react-redux";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

// load user
store.dispatch(loadUser());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PayPalScriptProvider
        options={{
          "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
        }}
      >
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </Provider>
  );
}
