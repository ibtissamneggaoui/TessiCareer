"use client";


import Footer from "./components/Footer";
import Colors from "@/utils/styles/colors";
import SideBar from "./components/SideBar";
import Collaborators from "./collaborators/page";

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
