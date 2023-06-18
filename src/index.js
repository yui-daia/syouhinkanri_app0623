import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { Amplify } from "aws-amplify";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsconfig from "./aws-exports";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

Amplify.configure({
  ...awsconfig,
  // 追加の設定オプションがあればここに指定
});

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AmplifyProvider>
      <App />
    </AmplifyProvider>
  </React.StrictMode>
);

reportWebVitals();
