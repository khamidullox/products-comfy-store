import React from "react";

function About() {
  return (
    <div className="text-center justify-center w-ful felx items-center place-items-center containerH mt-10  ">
      <h1 className="font-bold  text-5xl tracking-wide">
        We love
        <span className=" bg-info rounded-md px-2 text-slate-700 ml-3">
          comfy
        </span>
      </h1>
      <div className="w-full flex mt-10 justify-center">
        <p className="w-[600px] text-start text-xl tracking-wide">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
          quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia
          optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo
          sed officiis ea tempore! Similique eos minima sit porro, ratione
          aspernatur!
        </p>
      </div>
    </div>
  );
}

export default About;
