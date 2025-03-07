import React, { useState, useEffect, useRef } from "react";

const Showcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );
  
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
  
    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);
  
  const serviceBoxes = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dxggbrrre/image/upload/v1741351281/services_icon_1_bm9hzl.png",
      title: "Palm Expeller Machine",
      description: "Extracts oil from palm kernels by crushing and pressing them to separate the oil from the fiber and cake.",
      delay: 0,
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dxggbrrre/image/upload/v1741351281/services_icon_1_bm9hzl.png",
      title: "Nut & Fibre Separators",
      description: "Separates palm nuts from fiber after oil extraction.",
      delay: 200,
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dxggbrrre/image/upload/v1741351281/services_icon_1_bm9hzl.png",
      title: "Palm Bunch Threshers",
      description: "Separates palm fruits from the fresh fruit bunches.",
      delay: 400,
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dxggbrrre/image/upload/v1741351281/services_icon_1_bm9hzl.png",
      title: "Palm Nut Crackers",
      description: "Breaks palm nuts to separate the kernels from the shells.",
      delay: 600,
    },
  ];
  
  return (
    <div className="mt-20 md:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl text-[#494949] font-bold mb-6 md:mb-8">What We Do</h2>
      
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="https://res.cloudinary.com/dxggbrrre/image/upload/v1741271461/Logo_zacepf.jpg"
            alt="Henrrike Quarshie"
            className="h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[80vh] w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] lg:ml-8 xl:ml-16 object-cover"
          />
        </div>
        
        {/* Services Grid Section */}
        <div 
          ref={servicesRef} 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full lg:w-1/2 lg:-ml-12 xl:-ml-24"
        >
          {serviceBoxes.map((box) => (
            <div
              key={box.id}
              className={`border-2 p-5 sm:p-6 md:p-7 bg-[#f8f9fa] border-[#f8f9fa] transition-all duration-700 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              } hover:shadow-lg hover:-translate-y-2 hover:bg-white`}
              style={{ 
                transitionDelay: `${box.delay}ms`,
                boxShadow: isVisible ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)" : "none",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease" // Faster hover transition
              }}
            >
              <img 
                src={box.img} 
                alt="Services" 
                className="transition-transform duration-300 hover:scale-110 w-10 h-10 sm:w-12 sm:h-12 object-contain" 
              />
              <p className="text-lg sm:text-xl font-bold mt-3">{box.title}</p>
              <p className="text-sm sm:text-base mt-2 text-gray-600 max-w-xs">{box.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;