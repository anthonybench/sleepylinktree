"use client";
import "@/app/utils/debug.css";
import { useState } from "react";
import ResumeModal from "../components/resume-modal";

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold">Test Page</h1>
        <button
          onClick={() => setOpen(true)}
          className="mt-4 px-4 py-2 text-white bg-blue-500 rounded"
        >
          Open Modal
        </button>
      </div>
      <ResumeModal open={open} setOpen={setOpen} />
    </>
  );
}
