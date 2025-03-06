import React from "react";

const Showcase = () => {
  return (
    <div className="min-h-screen py-8 mt-20">
      <div className="flex flex-col items-center mb-8">
        <p className="text-[#f97a2b] text-[18px] font-extrabold">What we do</p>
        <p className="text-[2rem] text-[#494949] font-bold">Our Services</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-x-1 gap-y-4 px-4 md:px-8 lg:px-16">
        {[
          {
            img: "https://res.cloudinary.com/dxggbrrre/image/upload/v1741271494/agric_q0mcxe.webp",
            title: "Machinery Fabrication",
            description:
              "Design and manufacture of specialized palm oil processing machines, including digesters, presses, and clarifiers. Tailor-made solutions to meet the unique needs of farmers and processors",
          },
          {
            img: "https://res.cloudinary.com/dxggbrrre/image/upload/v1741271556/welding_ciwu8l.webp",
            title: "Welding & Metal Services",
            description:
              "High-quality welding for agricultural equipment repair and maintenance. Fabrication of durable machine parts and structural components to improve efficiency.",
          },
          {
            img: "https://res.cloudinary.com/dxggbrrre/image/upload/v1741271536/repair_ps9czc.webp",
            title: "Machine Repairs & Maintenance",
            description:
              "Regular servicing and repair of palm oil processing machinery to reduce downtime and extend equipment lifespan. Troubleshooting mechanical issues to ensure smooth and efficient operations.",
          },
          {
            img: "https://res.cloudinary.com/dxggbrrre/image/upload/v1741271516/equipment_nceifk.webp",
            title: "Equipment Installation & Setup",
            description:
              "Professional assembly and installation of palm oil processing machines. Ensuring machines are properly set up for optimal performance and safety.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`border-[0.5px] h-auto sm:h-auto md:h-auto w-[90%] flex flex-col items-center p-4 pb-8 sm:pb-4 mt-4 sm:mt-0 shadow-md rounded-2xl mx-auto ${
              index === 0 || index === 3 ? "bg-[#18486c] border-[#18486c]" : "bg-[#f97a2b] border-[#f97a2b]"
            }`}
          >
            <div className="h-24 w-24 mt-5 bg-[#EDF2FA] border-[#EDF2FA] flex items-center justify-center">
              <img src={service.img} alt={service.title} />
            </div>
            <p className="text-[19px] font-semibold mt-2 text-white">{service.title}</p>
            <p className="text-center w-full mt-2 mb-4 sm:mb-0 text-[15px] text-white">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;