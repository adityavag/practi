import React from "react";
import { GiWorld } from "react-icons/gi";

export default function Navbar() {
    return(
        <div className="bg-[#F55A5A] text-white flex flex-row items-center p-4 justify-center">
        <GiWorld className="mr-1"/>My Travel Journal
        </div>
    )
}