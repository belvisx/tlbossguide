"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { bosses } from "@/lib/bosses";

const DynamicTitle = () => {
  const pathname = usePathname();

  useEffect(() => {
    const getTitle = () => {
      if (pathname === "/") return "Home - TLBG";
      if (pathname === "/dimensional-trial") return "Dimensional Trial - TLBG";

      const pathParts = pathname.split("/");
      const bossSlug = pathParts[pathParts.length - 1];

      if (bossSlug) {
        const boss = bosses.find(
          (b) => b.name.toLowerCase().replace(/\s+/g, "-") === bossSlug
        );
        if (boss) return `${boss.name} - TLBG`;
      }

      return "TL Boss Guide";
    };

    document.title = getTitle();
  }, [pathname]);

  return null;
};

export default DynamicTitle;
