import React from "react";
import Button from "../ui/Button";

function About() {
  return (
    <div className="bg-black text-white flex min-h-screen flex-col lg:flex-row justify-center items-center lg:px-16 px-4 gap-4 pt-16">
      <img
      className="rounded-xl"
        src={
          "https://media.istockphoto.com/id/1625128632/photo/most-common-allergy-food-shot-from-above.jpg?b=1&s=612x612&w=0&k=20&c=jy8uEBErKnHmnunQ3xe-vetl65EGf__ZKOOs_bjCAaY="
        }
      />
      <div className="space-y-4 lg:pt-14">
        <h1 className="font-semibold text-4xl text-center md:text-start">What Makes Us Special</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          maiores explicabo nemo vero, ipsam rerum perferendis nisi unde laborum
          dolorem architecto totam deleniti, accusantium et provident. Rerum
          eveniet expedita voluptatem. 
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          maiores explicabo nemo vero, ipsam rerum perferendis nisi unde laborum
          dolorem architecto totam deleniti, accusantium et provident. Rerum
          eveniet expedita voluptatem. 
        </p>
        <div>
            <Button type={'button'} placeholder={'Learn More'}/>
        </div>
      </div>
    </div>
  );
}

export default About;
