// src/components/Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import TransitionPage from "./TransitionPage";
import TransitionPage from "./TransitionPage";

export default function Layout({ children }) {
  return (
    <>
      <div className="p x-[12%] bg-indigo-200">
        <Navbar />
        <TransitionPage>{children}</TransitionPage>
        {/* <Footer /> */}
      </div>
    </>
  );
}
