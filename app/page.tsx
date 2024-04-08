"use client";

import BasicButton from "./components/BasicButton";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Colors from "@/utils/styles/colors";
import SideBar from "./components/SideBar";
import Collaborators from "./Collaborators/page";

export default function Home() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <>
      <SideBar>
        
        <Collaborators/>
        <Footer />
      </SideBar>
    </>
  );
}
