import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const SidebarLogo = () => {
  const { resolvedTheme } = useTheme();

  return (
    <>
      {resolvedTheme === "dark" && (
        <Image
          src="/img/built white logo.webp"
          alt="built logo"
          width={200}
          height={200}
          className="size-full"
        />
      )}
      {resolvedTheme === "light" && (
        <Image
          src="/img/logo.png"
          alt="built logo"
          width={200}
          height={200}
          className="size-full"
        />
      )}
    </>
  );
};

export default SidebarLogo;
