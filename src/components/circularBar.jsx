// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const CircularBar = () => {
  const dresses = [
    { id: 1, name: "Elegant White", img: "/images/whi.png" },
    { id: 2, name: "Pastel Blue", img: "/images/sarree.png" },
    { id: 3, name: "Chic Pink", img: "/images/pink.png" },
    { id: 4, name: "Graceful Green", img: "/images/green.png" },
    { id: 5, name: "Royal Purple", img: "/images/purple.png" },
    { id: 6, name: "Trendy Black", img: "/images/black.png" },
    { id: 7, name: "Golden Glam", img: "/images/golden.png" },
  ];

  return (
    <div className="circular-bar-container">
      <h2 className="title">Explore Dresses</h2>
      <Swiper
        slidesPerView={6}  // More circles visible at once
        spaceBetween={30}   // Adjust space between circles
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {dresses.map((dress) => (
          <SwiperSlide key={dress.id}>
            <div className="circle-item">
              <img src={dress.img} alt={dress.name} />
              <p>{dress.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CircularBar;
