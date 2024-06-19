import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center gap-2">
        <div role="status">
          <span className="sr-only">Loading</span>
        </div>
        <Spinner />           
        <h1 className="text-3xl font-bold">Loading Data</h1>
      </div>
      <p>Just a Second...</p>
    </div>
  );
}
