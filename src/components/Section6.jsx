const Section6 = () => {
  return (
    <div className="background bg-auto bg-center bg-no-repea h-[750px] bg-amber-900 flex m-auto ">
      <div className="text-amber-50 m-auto flex flex-col gap-5 text-center">
        <span className="font-extrabold text-4xl sm:text-6xl md:text-7xl">
          11,658,467
        </span>
        <span className="font-extrabold text-2xl sm:text-3xl md:text-4xl ">
          Shoes Collected
        </span>
      </div>
      <div className="absolute left-[10%]">
           <div>
           <img src={'/images/shoes2.png'} alt="shoes" />
           <div className="absolute text-slate-900 text-s bottom-[-24px] w-[250px] left-[9%] bg-slate-200 rounded-md p-2 z-[2]"> 
           Emma Simpson collected one pair of Cool Shoes.
           <div className="absolute border-t-[50px] border-t-[#e2e8f0] border-x-[25px] border-x-transparent border-solid w-1 h-1 left-[calc(43%_-_12px/2)] flex-none order-3 grow-0 z-[-1] -bottom-3"></div>
           </div>
           </div>
        </div>
    </div>
  );
};

export default Section6;
