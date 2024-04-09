
"use client";
import React from "react";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Collaborators from "./collaborators/page";
import TestRedux from './components/TestRedux'

export default function Home() {
 
  return (
    <>
      <SideBar>
        <Footer />
      </SideBar>
    </>
  );
}
