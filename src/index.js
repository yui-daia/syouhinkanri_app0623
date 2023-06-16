import React from "react";
import ReactDOM from "react-dom";
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

ReactDOM.render(
  <React.StrictMode>
    <AmplifyProvider>
      {/* @ts-ignore */}
      <App />
    </AmplifyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
