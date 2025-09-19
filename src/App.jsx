import React, { useEffect } from "react";
import { inject } from "@vercel/analytics";
import Container from "./Container";

const App = () => {
  useEffect(() => {
    inject(); // initializes Vercel Analytics in plain React
  }, []);

  return (
    <>
      {/* Fixed background */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

      {/* Scrollable content */}
      <div className="relative z-10">
        <Container />
        <div className="h-full"></div> {/* just extra height to test scrolling */}
      </div>
    </>
  );
};

export default App;
