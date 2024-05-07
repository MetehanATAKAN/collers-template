
const Section2 = () => {

    // const cardsInfo = [
    //     {
    //         id:1,
    //         image:'/images/Picture.png',
    //         header:'Title',
    //         text:'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'
    //     },
    //     {
    //         id:2,
    //         image:'/images/Picture(1).png',
    //         header:'Title',
    //         text:'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'
    //     },
    //     {
    //         id:3,
    //         image:'/images/Picture(2).png',
    //         header:'Title',
    //         text:'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'
    //     }
    // ]
  return (
    <div className="bg-[url('/images/Backlights.png')]  bg-no-repeat back bg-center bg-slate-900 text-white px-4 py-12 md:p-20 md:bg-size-90">
      <div className="flex flex-col md:justify-between md:flex-row">
        <h2 className="text-2xl font-extrabold text-center text-white md:text-5xl">
          The best of the best
        </h2>
        <button className="section1-button  border-white w-max md:w-0 m-auto mt-8 text-white md:m-0">
          Sign up now
        </button>
      </div>
      <div className="grid grid-cols-1 gap-12 pt-12 md:pt-20 md:grid-cols-3 gap-x-12">
        <div className="card">
          <img
            src={"/images/Picture.png"}
            alt="section-card"
            className="w-full"
          />
          <div className="flex flex-col items-start gap-4 flex-none order-1 self-stretch grow-0 z-[1] pt-8 pb-0 px-8">
            <h6 className="font-bold text-2xl"> Title </h6>
            <span>
              {" "}
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.{" "}
            </span>
          </div>
          <div className="p-8 w-full">
            <button className="section1-button w-full">
              <img src="/images/buy.png" alt="buy" />
              <span className="px-4"> Buy Now </span>
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src={"/images/Picture(1).png"}
            alt="section-card"
            className="w-full"
          />
          <div className="flex flex-col items-start gap-4 flex-none order-1 self-stretch grow-0 z-[1] pt-8 pb-0 px-8">
            <h6 className="font-bold text-2xl"> Title </h6>
            <span>
              {" "}
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.{" "}
            </span>
          </div>
          <div className="p-8 w-full">
            <button className="section1-button w-full">
              <img src="/images/buy.png" alt="buy" />
              <span className="px-4"> Buy Now </span>
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src={"/images/Picture(2).png"}
            alt="section-card"
            className="w-full"
          />
          <div className="flex flex-col items-start gap-4 flex-none order-1 self-stretch grow-0 z-[1] pt-8 pb-0 px-8">
            <h6 className="font-bold text-2xl"> Title </h6>
            <span>
              {" "}
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.{" "}
            </span>
          </div>
          <div className="p-8 w-full">
            <button className="section1-button w-full">
              <img src="/images/buy.png" alt="buy" />
              <span className="px-4"> Buy Now </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2