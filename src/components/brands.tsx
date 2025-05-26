import React from "react";

const brandLogos = [
  "/public/images/hp.svg",
  "/public/images/acer.png",
  "/public/images/asus.svg",
  "/public/images/samsung.svg",
  "/public/images/apple.svg",
  "/public/images/mci.svg",
  "/public/images/mi.svg",
  "/public/images/vivo.svg",
  "/public/images/amazon.png",
  "/public/images/nike.png",
  "/public/images/adidas.png",
  "/public/images/rolex.png",
];

export const Brands = () => {
  return (
    <div className="">
      <h2 className="text-lg font-medium mb-4">Brendlar bo‘yicha</h2>
      <div className="grid grid-cols-6 gap-4 bg-[#f0f4ff] p-4 rounded-md">
        {brandLogos.map((logo, index) => (
          <div
            key={index}
            className="bg-white p-4 flex items-center justify-center rounded-md shadow-sm"
          >
            <img
              src={logo}
              alt={`brand-${index}`}
              className="max-h-10 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
