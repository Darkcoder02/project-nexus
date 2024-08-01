import React from "react";
import { FaPepperHot } from "react-icons/fa";
import Button from "./Button";

function DishCard({img, title, price}) {
  return (
    <div className="w-full lg:w-1/4 p-5 shadow-lg rounded-lg border bg-white">
      <img className="rounded-lg" src={img} alt="" />
      <div className="flex  justify-between my-3">
        <h3 className="font-semibold text-center text-xl">{title}</h3>
        <div className="flex justify-center">
          <FaPepperHot className="text-red-600"/>
          <FaPepperHot className="text-red-600"/>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4">
        <h3 className="font-semibold text-lg">{price}</h3>
        <Button type={'button'} placeholder={'Purchase'}/>
      </div>
    </div>
  );
}

export default DishCard;
