"use client";

import { Image } from "@nextui-org/react";
import { useState } from "react";

const ImageSlider = ({ images }: { images: { url: string,alt: string; }[] }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full relative">
      <Image
        radius="md"
        removeWrapper
        className=" h-full w-full object-cover"
        src={process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL + images[index].url}
      />
      <div className=" absolute bottom-0 pb-4 flex items-center pl-4 gap-2 w-full -translate-x-1/2 z-10 bg-gradient-to-t rounded-b-xl from-black/50 to-transparent left-1/2">
        {images.map((e, i) => (
          <button
            onClick={() => setIndex(i)}
          key={e.url}
          >
            <img className=" h-16 object-cover border" src={process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL +e.url} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
