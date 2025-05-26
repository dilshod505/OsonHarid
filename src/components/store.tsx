import React from "react";

const stores = [
  { name: "Texnomart", logo: "/texnomart.svg" },
  { name: "MediaPark", logo: "/media park.svg" },
  { name: "GoodZone", logo: "/goodzone.svg" },
  { name: "Idea", logo: "/media park.svg" },
  { name: "Volna", logo: "/elmakon.svg" },
  { name: "Elmakon", logo: "/sandiq-store.svg" },
];

export const Store = () => {
  return (
    <div className="">
      <h2 className="text-lg font-medium mb-4">Do‘konlar</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 bg-[#f0f4ff] p-4 rounded-md">
        {stores.map((store, index) => (
          <div
            key={index}
            className="bg-white p-4 flex items-center justify-center rounded-md shadow-sm hover:shadow-md transition"
          >
            <img
              src={store.logo}
              alt={store.name}
              className="max-h-14 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
