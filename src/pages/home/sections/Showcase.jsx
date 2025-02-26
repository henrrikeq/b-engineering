import React from "react";

const Showcase = () => {
  return (
    <div className="min-h-screen py-8 mt-20">
      <div className="flex flex-col items-center mb-8">
        <p className="text-[#ffa62b] text-[18px] font-extrabold">
          What we do
        </p>
        <p className="text-[2rem] text-[#494949] font-bold">
          Our Services
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 px-4 md:px-8 lg:px-16">
        {[
          { img: "https://res.cloudinary.com/dxggbrrre/image/upload/v1735769733/services1_tfubqy.png", title: "Family Law", description: "Protecting the rights of families in legal matters such as divorce, custody, and adoption." },
          { img: "https://res.cloudinary.com/dxggbrrre/image/upload/v1735769747/services2_ywbhfu.png", title: "Business Law", description: "Assisting businesses with contracts, mergers, acquisitions, and legal compliance." },
          { img: "https://res.cloudinary.com/dxggbrrre/image/upload/v1735769865/services10_uz4nlt.png", title: "Insurance Law", description: "Helping individuals and businesses navigate the complexities of insurance claims and disputes." },
          { img: "https://res.cloudinary.com/dxggbrrre/image/upload/v1735769775/services4_tjd5dr.png", title: "Criminal Law", description: "Defending individuals charged with criminal offenses and ensuring fair trials." },
          
        ].map((service, index) => (
          <div
            key={index}
            className="border-[0.5px] h-auto w-full flex flex-col items-center p-4 bg-white shadow-md "
          >
            <div className="border-2 h-24 w-24 mt-5 rounded-full bg-[#EDF2FA] border-[#EDF2FA] flex items-center justify-center">
              <img
                src={service.img}
                alt={service.title}
              />
            </div>
            <p className="text-[19px] font-semibold mt-2">{service.title}</p>
            <p className="text-center w-full mt-2 text-[15px] text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
