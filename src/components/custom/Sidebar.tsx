"use client";

import { useState } from "react";
import Menu from "./Menu";
import { AlignJustify, BadgePlus, X } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isSignedIn } = useUser();

  return (
    <>
      {/* Toggle Button */}
      <Button
        className="md:hidden fixed top-4 left-4 bg-gray-900 text-white p-2 rounded z-50"
        onClick={() => setIsOpen(true)}
      >
        <AlignJustify />
      </Button>

      <aside
        className={`fixed md:relative top-0 left-0 h-full w-64 bg-gray-900 text-white p-4 flex flex-col transition-transform duration-300 ease-in-out z-50 md:z-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center justify-between space-x-2 w-full">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-2xl">Dall.E </span>
          </div>
          <Button
            className="md:hidden text-white"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </Button>
        </div>

        {/* Menu */}
        {isSignedIn ? (
          <>
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
              <Menu />
            </div>

            <Separator />
            {/* Tokens Display */}
            <div className="p-4 bg-gray-700 rounded  mt-2 flex justify-between items-center">
              <span className="text-lg font-bold">Tokens = 100</span>
              <Link
                href="/add-token"
                className="text-sm text-gray-400 hover:text-gray-200"
              >
                <BadgePlus className="text-yellow-500" />
              </Link>
            </div>
          </>
        ) : (
          <div className="flex flex-col h-full">
            <div>
              <Skeleton className="h-6 w-full opacity-30" />
              <Skeleton className="h-6 w-full mt-2 opacity-30" />
              <Skeleton className="h-6 w-full mt-2 opacity-30" />
              <Skeleton className="h-6 w-full mt-2 opacity-30" />
              <Skeleton className="h-6 w-full mt-2 opacity-30" />
            </div>

            {/* Push last skeleton to bottom */}
            <div className="flex-grow" />

            <div>
              <Skeleton className="h-6 w-full mt-2 opacity-30" />
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
