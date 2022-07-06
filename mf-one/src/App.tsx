import React from "react";

import "./index.scss";

interface Props {
  message?: string;
}

const App = ({ message = "Hello From The Micro-frontend" }: Props) => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: mf-one</div>
    <div>Message: {message}</div>
  </div>
);

export default App;
