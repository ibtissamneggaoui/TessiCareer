"use client";

import BasicButton from "./components/BasicButton";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Colors from "@/utils/styles/colors";
import SideBar from "./components/SideBar";

export default function Home() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <>
      <SideBar>
        <BasicButton onClick={handleClick} bgcolor={Colors.secondary}>
          Test button
        </BasicButton>
        <br />
        <br />
        {/* input */}
        <SearchBar />
        <br />
        <br />
        <Footer />
      </SideBar>
    </>
  );
}
