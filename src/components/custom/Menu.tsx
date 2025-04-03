"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AlignJustify } from "lucide-react";
import { Button } from "../ui/button";

const menuItems = [
  {
    id: "1231",
    name: "Home",
    path: "/",
    img: "https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-cb-background-images-photos-pics-wallpaper-pictures-image_16123145.jpg",
  },
  {
    id: "1231w1",
    name: "Gallery",
    path: "/gallery",
    img: "https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-cb-background-images-photos-pics-wallpaper-pictures-image_16123145.jpg",
  },
  {
    id: "122343",
    name: "Generate",
    path: "/generate",
    img: "https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-cb-background-images-photos-pics-wallpaper-pictures-image_16123145.jpg",
  },
  {
    id: "1233124",
    name: "Settings",
    path: "/settings",
    img: "https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-cb-background-images-photos-pics-wallpaper-pictures-image_16123145.jpg",
  },
];

export default function Menu() {
  return (
    <nav>
      <ul className="space-y-2 mt-4 block md:block">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.id}
            className="text-white flex items-center justify-between gap-2 p-2 bg-gray-800 rounded "
          >
            <li className="flex items-center justify-between gap-2">
              <Image
                src={item.img}
                alt={item.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span>{item.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
