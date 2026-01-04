"use client";
import Image from "next/image";
import Link from "next/link";
import Input from "./Input";

const Header = () => (
  <div className="flex flex-row my-5 items-center gap-5">
    <Image src="/logoFull.svg" alt="Eneba Logo" width={155} height={50} />
    <Input />
  </div>
);

export default Header;
