"use client";

import useScrollPos from "@/hooks/useScrollPos";
import MenuItem from "../menu/elements/MenuItem";
import ContactBtn from "../menu/elements/ContactBtn";

function Navbar() {
  const isAtTop = useScrollPos();

  return (
    <div
      className={`mobile:hidden fixed top-0 z-50 transition-opacity duration-300 ${
        isAtTop ? "opacity-100" : "opacity-0 hover:opacity-100"
      } flex justify-center items-center h-16 w-full bg-gradient-to-r from-blue-500 via-transparent to-black text-white p-4 shadow-lg`}
    >
      <div className="flex justify-around text-2xl w-1/2 items-center">
        <MenuItem title={"About"} />
        <MenuItem title={"Projects"} />
        <MenuItem title={"Services"} />
        <ContactBtn title={"Contact Me"} />
      </div>
    </div>
  );
}

export default Navbar;
