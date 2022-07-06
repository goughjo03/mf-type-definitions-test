import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const MFOne = lazy(() => import("mf_one/App"));

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: shell</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <Suspense fallback={<div>Loading...</div>}>
      <MFOne />
    </Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
