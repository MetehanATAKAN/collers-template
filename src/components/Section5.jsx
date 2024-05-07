const Section5 = () => {

  const buttonsGroup = [
    {
      id: 1,
      icon: "/images/icon1.png",
      name: "Bibendum tellus",
    },
    {
      id: 2,
      icon: "/images/icon2.png",
      name: "Cras eget",
    },
    {
      id: 3,
      icon: "/images/icon3.png",
      name: "Dolor pharetra",
    },
    {
      id: 4,
      icon: "/images/icon4.png",
      name: "Amet, fringilla",
    },
    {
      id: 5,
      icon: "/images/icon5.png",
      name: "Amet nibh",
    },
    {
      id: 6,
      icon: "/images/icon6.png",
      name: "Sed velit",
    },
  ];

  
  return (
    <div className="bg-[url('/images/Waves.png')] bg-cover bg-no-repeat h-[750px] md:bg-orange-50 p-20 px-4 py-12 md:p-20">
      <div className="pb-10 flex flex-col gap-8">
        <h2 className=" text-center font-extrabold m-auto text-2xl md:text-5xl md:m-0 md:text-start">
          Grow your collection
        </h2>
        <p className="text-sm text-center md:text-start">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="col-span-1 flex gap-4 md:flex-col overflow-auto custom-scroll">
          {buttonsGroup.map((btn) => (
            <div
              key={btn.id}
              className="flex gap-2 items-center font-semibold text-sm p-2"
            >
              <img src={btn.icon} alt={btn.name} className="w-4 h-4" />
              <div className=" w-32 md:w-auto"> {btn.name} </div>
            </div>
          ))}
        </div>
        <div className="col-span-2 px-20 md:p-0">
          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-white rounded-xl relative">
                <div className="flex justify-between items-center p-4">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-red-500 mr-1"></div>
                    <div className="h-2 w-2 rounded-full bg-yellow-500 mr-1"></div>
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="flex justify-center items-center px-1 pb-1">
                  <img
                    src={"./images/video.png"}
                    alt="resim"
                    className="max-w-full max-h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              {/* İkinci resim */}
              <div className="bg-white rounded-xl absolute top-[27%] left-[10%] w-full h-full">
                <div className="flex justify-between items-center p-4">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-red-500 mr-1"></div>
                    <div className="h-2 w-2 rounded-full bg-yellow-500 mr-1"></div>
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="flex justify-center items-center px-1 pb-1">
                  <img
                    src={"./images/Picture(1).png"}
                    alt="Image 2"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              {/* Üçüncü resim */}
              <div className="absolute top-[52%] left-[80%] md:top-[40%] md:left-[75%] w-[35%] md:h-full md:w-[75%]">
                <img
                  src={"/images/shoes.png"}
                  alt="Image 3"
                  className="md:h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
