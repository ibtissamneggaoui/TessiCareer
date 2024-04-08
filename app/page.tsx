"use client";

import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Collaborators from "./collaborators/page";
import React from "react";

export default function Home() {
 
  return (
    <>
      <SideBar>
        <Collaborators/>
        <Footer />
      </SideBar>
    </>
  );
}
