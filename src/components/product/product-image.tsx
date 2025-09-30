"use client";

import Image from "next/image";
import { useState } from "react";

const images = ["/cap/cap-01.png", "/cap/cap-02.png"] as const;

export default function ProductImage() {
  const [selectedImage, setSelectedImage] = useState<(typeof images)[number]>(
    images[0]
  );

  return (
    <div className="flex flex-col gap-4">
      <Image alt="Boné Nuvende" height={500} src={selectedImage} width={500} />

      <div className="flex gap-4">
        {images.map((image) => (
          <button
            className={`overflow-hidden rounded-md border-2 transition-all duration-200 hover:opacity-75 ${
              selectedImage === image
                ? "border-emerald-600 ring-2 ring-emerald-600/50"
                : "border-transparent hover:border-gray-300"
            }`}
            key={image}
            onClick={() => setSelectedImage(image)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedImage(image);
              }
            }}
            type="button"
          >
            <Image alt="Boné Nuvende" height={80} src={image} width={80} />
          </button>
        ))}
      </div>
    </div>
  );
}
