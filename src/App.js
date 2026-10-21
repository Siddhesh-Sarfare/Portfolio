import React from "react";
import Home from "./pages/Home";

// The site is a single page with in-page sections (#about, #work, …),
// so it renders the same content at any URL — including the GitHub Pages
// sub-path (/Portfolio) — without a router.
function App() {
  return <Home />;
}

export default App;
