import Image from "next/image";
import Hero from "./Components/Hero";
import { FloatingNav } from "./Components/ui/floating-navbar";
import { MdHome } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import Grid from "./Components/Grid";
import RecentProjects from "./Components/RecentProjects";
import React from "react";
import { navItems } from "@/data";
import Clients from "./Components/ui/Clients";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center 
    items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Clients/>
      </div>
    </main>
  );
}
