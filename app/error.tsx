"use client";

import { Button } from "@nextui-org/react";
import { RefreshCcw } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col h-full items-center justify-center">
      <h2 className=" text-3xl font-bold ">Something went wrong!</h2>
      <p className="px-12 w-fit">Error : {error.message}</p>
      <Button
        onClick={() => reset()}
        color='warning'
        className=" mt-2 w-fit px-2 rounded-lg py-1 bg-white/80 hover:bg-white/90 flex items-center justify-center gap-2 transition-all  text-black font-semibold"
      >
        Try Again <RefreshCcw size={15} />
      </Button>
    </div>
  );
}
