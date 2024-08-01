import React from "react";
import Button from "../ui/Button";
import food from '../../assets/food.svg'

function Banner() {
  return (
    <div className="min-h-screen flex justify-between items-center lg:px-32 px-5 bg-black">
      <div className="w-full lg:w-2/3 space-y-5 text-white ">
        <h1 className="text-6xl font-bold text-white">Satisfy Your Cravings</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          doloribus natus dicta quas, consequatur perferendis animi error quia
          similique iure asperiores nobis eum illo veritatis placeat
          exercitationem quam quo voluptate!
        </p>
        <div className="">
          <Button type={"button"} placeholder={"Order Organic"} />
        </div>
      </div>
      <div className="hidden lg:block flex-grow w-6/12">
        <img src={food} className="h-full w-full"/>
      </div>
    </div>
  );
}

export default Banner;
