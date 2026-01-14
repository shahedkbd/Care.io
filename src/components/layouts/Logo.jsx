import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center">
      <Image alt="care.io" width={60} height={40} src={"/logo.png"} />
      <h2 className="text-4xl font-bold">care.io</h2>
    </Link>
  );
};

export default Logo;
