import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  

  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl mb-4">Tailwind test</h1>
      <Card username="Gajendra Sharma" btnText="Click me " />
      <Card username="Anuradha" btnText="Click me " />
    </>
  );
}

export default App;
