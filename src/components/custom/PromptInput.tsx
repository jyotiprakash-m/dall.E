"use client";
import type React from "react";
import { useState } from "react";
import { Button } from "../ui/button";
import { FileCog } from "lucide-react";
import { Input } from "../ui/input";
import { usePathname } from "next/navigation";
import promotions from "@/constant/promotion";

function PromptInput() {
  const [prompt, setPrompt] = useState("");

  const pathname = usePathname(); // Example: "/dashboard/settings"
  const handleSubmit = (event: React.FormEvent) => {
    if (promotions.includes(pathname)) {
      console.log("trigger now");
    } else {
      console.log("not trigger");
    }
    event.preventDefault();
    if (prompt.trim() === "") return;
    setPrompt("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 p-4 border-t border-gray-300 flex items-center gap-2 w-full max-w-3xl mx-auto"
    >
      <Input
        type="text"
        placeholder="Enter your prompt"
        className="w-full p-2 border rounded"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <Button className="p-2 bg-blue-500 text-white rounded" type="submit">
        <FileCog />
      </Button>
    </form>
  );
}

export default PromptInput;
