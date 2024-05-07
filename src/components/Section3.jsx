

const Section3 = () => {
  return (
    <div className="p-20 md:bg-orange-50 "> 
        <div className="bg-[url('/images/deco.png')]  bg-no-repeat bg-white bg-bottom md:bg-right bg-size2 md:bg-contain  px-4 py-12 md:p-20 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_0px_10px_rgba(0,0,0,0.07)] rounded-[30px]">
        <div className=" grid grid-cols-1 grid-rows-2 gap-6 lg:grid-cols-3 lg:grid-rows-1">
            <div className="flex flex-col gap-6 col-span-2 items-center lg:items-start">
                <h2 className="text-center font-extrabold text-3xl md:text-5xl md:text-start">Why join us</h2>
                <ul className="flex flex-col gap-1">
                    <li className="list"> <span><img src="/images/vector.png" alt="vector" className="mr-2" /></span> Est et in pharetra magna adipiscing ornare aliquam.</li>
                    <li className="list"> <span><img src="/images/vector.png" alt="vector" className="mr-2" /></span> Tellus arcu sed consequat ac velit ut eu blandit.</li>
                    <li className="list"> <span><img src="/images/vector.png" alt="vector" className="mr-2" /></span> Ullamcorper ornare in et egestas dolor orci.</li>
                </ul>
                <button className="section1-button border-amber-900  text-amber-900 w-max">Sign up now</button>
            </div>
            <div>
                <div className="bg-white rounded-xl relative">
                <div className="flex justify-between items-center p-4">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-rose-600 mr-1"></div>
                    <div className="h-2 w-2 rounded-full bg-amber-400 mr-1"></div>
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
            </div>
        </div>
    </div>
    </div>
  )
}

export default Section3