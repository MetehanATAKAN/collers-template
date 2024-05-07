const Section1 = () => {

  const sectionCards = [
    {
      id: 1,
      icon: "/images/Icon.png",
      header: "Nibh viverra",
      text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      bg:'/images/r25.png'
    },
    {
      id: 2,
      icon: "/images/Icon(1).png",
      header: "Cursus amet",
      text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      bg:'/images/r26.png'
    },
    {
      id: 3,
      icon: "/images/Icon(2).png",
      header: "Ipsum fermentum",
      text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      bg:'/images/r27.png'
    },
  ];

  return (
    <>
    <div className="w-full p-20 bg-amber-50 hidden md:block"></div>
      <div className="bg-[linear-gradient(to_bottom_right,#ffffff,#ffffff_50%,#FEF3C7_50%,#FEF3C7)]  md:bg-[linear-gradient(to_bottom_right,#fefaeb,#fefaeb_50%,#FEF3C7_50%,#FEF3C7)] mx-auto my-0 px-20">
        <div className="flex flex-col justify-between lg:flex-row pb-20">
          <div className="basis-2/3 flex flex-col gap-12">
            <h1 className="text-4xl font-extrabold md:text-7xl text-slate-900 text-center md:text-start">Collectible Sneakers</h1>
            <span className="font-normal text-lg text-slate-900 text-center md:text-start">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </span>
            <div className="flex items-center text-amber-900 justify-between mb-12 sm:justify-around lg:justify-normal lg:m-0">
              <div>
                <button className="section1-button border-amber-900 text-xs md:text-sm">Sign up now</button>
              </div>
              <div className="flex ml-4 items-center">
              <img src="/images/play.png" alt="play" className="w-4 h-4" />
                <span className="ml-2 font-bold text-xs md:text-sm">Watch Demo</span>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="flex items-center justify-center">
              <div className="w-52 h-52 sm:w-72 sm:h-72 bg-amber-400 rounded-3xl relative">
                <img
                  src="/images/Shoe.png"
                  alt="shoe image"
                  className="absolute -translate-x-2/4 -translate-y-2/4 z-[1] w-[300px] max-w-none left-[56%] top-[37%] sm:w-[350px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1  gap-20 py-20 md:grid-cols-3">
          {sectionCards.map((card) => (
            <div key={card.id} className="grid gap-2 text-center md:text-start">
              <div className="w-[100px] m-auto md:m-0 bg-no-repeat back bg-top" style={{backgroundImage:`url(${card.bg})`}}>
                <img src={card.icon} alt="icon" />{" "}
              </div>
              <div className="font-bold text-xl text-slate-900">{card.header}</div>
              <div className="font-normal text-lg text-slate-900">{card.text}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section1;
