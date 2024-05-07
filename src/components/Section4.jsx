import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Section4 = () => {
  const swiperRef = useRef(null);

  const swiperCards = [
    {
      id: 1,
      logo: "/images/Vector(1).png",
      header: "Zoomerr",
      text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      userImage: "/images/User1.png",
      userName: "Hellen Jummy",
      userTitle: "Team Lead",
    },
    {
      id: 2,
      logo: "/images/Vector(2).png",
      header: "SHELLS",
      text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus ornare quam nulla.",
      userImage: "/images/User2.png",
      userName: "Hellena John",
      userTitle: "Co-founder",
    },
    {
      id: 3,
      logo: "/images/Vector(3).png",
      header: "ArtVenue",
      text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      userImage: "/images/User3.png",
      userName: "David Oshodi",
      userTitle: "Manager",
    },
    {
      id: 4,
      logo: "/images/Vector(4).png",
      header: "WAVES",
      text: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
      userImage: "/images/User4.png",
      userName: "Charolette Hanlin",
      userTitle: "CEO",
    },
    {
      id: 5,
      logo: "/images/Vector(3).png",
      header: "ArtVenue",
      text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      userImage: "/images/User3.png",
      userName: "David Oshodi",
      userTitle: "Manager",
    },
    {
      id: 6,
      logo: "/images/Vector(1).png",
      header: "Zoomerr",
      text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      userImage: "/images/User1.png",
      userName: "Hellen Jummy",
      userTitle: "Team Lead",
    },
    {
      id: 7,
      logo: "/images/Vector(4).png",
      header: "WAVES",
      text: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
      userImage: "/images/User4.png",
      userName: "Charolette Hanlin",
      userTitle: "CEO",
    },
  ];

  const slideLeft = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideRight = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="py-20 md:bg-orange-50">
      <div className="flex justify-between items-center px-20 pb-20 ">
        <h2 className=" text-center font-extrabold m-auto text-2xl md:text-5xl md:m-0">
          Because they love us
        </h2>
        <div className="hidden gap-4 md:flex">
          <div
            className="flex items-center justify-center border-2 border-amber-900 text-amber-900 w-8 h-8 text-center rounded-full cursor-pointer"
            onClick={slideLeft}
          >
            <img src={'/images/array2.png'} alt="array2-left" className="w-3 h-3" />
          </div>
          <div
            className="flex items-center justify-center border-2 border-amber-900 text-amber-900 w-8 h-8 text-center rounded-full cursor-pointer"
            onClick={slideRight}
          >
            <img src={'/images/array1.png'} alt="array1-left" className="w-3 h-3" />
          </div>
        </div>
      </div>

      <div className="absolute translate-y-[-50px] w-full md:px-10 md:translate-x-2.5 md:w-[98%]">
        <div className="bg-amber-200 w-full h-64"></div>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          pagination={false}
          modules={[Pagination]}
          className="mySwiper"
          initialSlide={2}
          loop={true}
          ref={swiperRef}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            2048: {
              slidesPerView: 6,
              spaceBetween: 50,
            }
          }}
        >
          {swiperCards.map((sw) => (
            <SwiperSlide key={sw.id} className='bg-white flex flex-col items-start gap-4 flex-none order-1 self-stretch grow-0 z-[1] border border-slate-200 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_6px_rgba(0,0,0,0.07)] border-solid rounded-[20px] p-6'>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <img src={sw.logo} alt="logo" className="w-5 h-5" />
                  <h6 className="font-bold text-sm text-slate-600">
                    {" "}
                    {sw.header}{" "}
                  </h6>
                </div>

                <div className="black text-s font-normal text-start text-slate-900 leading-5">{sw.text}</div>

                <div className="flex items-center gap-2">
                    <img src={sw.userImage} alt="user" className="w-6 h-6" />
                    <div className="flex flex-col text-start">
                        <span className="text-[10px] font-semibold" > {sw.userName} </span>
                        <span className="text-[10px] text-slate-600"> {sw.userTitle} </span>
                    </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Section4;
