import React from "react";

function ReviewCard({img, name}) {
  return (
    <div className="w-full md:w-1/3 bg-white border-2 md:border-none p-5 rounded-lg">
      <div>
        <p className="text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, eum
          commodi? Maxime deserunt, veritatis omnis libero modi alias quaerat
          distinctio sapiente necessitatibus facilis dignissimos ut similique,
          repellendus fugiat, harum quam.
        </p>
      </div>
      <div className="flex justify-center items-center mt-4 gap-4">
        <img className="rounded-full w-1/4" src={img}/>
        <h3 className="font-semibold">{name}</h3>
      </div>
    </div>
  );
}

export default ReviewCard;
