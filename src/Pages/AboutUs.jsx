// import React from "react";
// import photo from "../assets/IMG.png";
// import photo1 from "../assets/IMG_6961.png";
// import Cards from "../components/Cards";
import InfoCard from "../components/InfoCard";

// import { IMG, IMG2, logo, Team } from "./../assets/index";
import { Team } from "./../assets/index";

const AboutUs = () => {
  return (
    <div className="">
      <div className="grid grid-cols-3 minlg:grid-cols-1  gap-4 py-5 md:py-0 h-max my-5">
        <div className="my-5 py-4 text-left pr-4">
          <h1 className="tracking-normal text-4xl minmd:text-lg minsm:text-3xl bg-gradient-to-r font-bold  from-[#E61AA1]  to-[#0CF996] to-55% bg-clip-text text-transparent my-3">
            ABOUT US
          </h1>
          <p className="text-stone-100 font-thin text-sm minmd:text-xs tracking-tighter text-left h-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            veritatis fuga exercitationem nostrum repudiandae dolor et ducimus
            possimus temporibus omnis rerum vel officia quaerat, facere cum? A
            laudantium expedita assumenda.
          </p>
        </div>

        <img
          src={Team}
          className="col-span-2  my-auto rounded-2xl shadow-2xl aspect-video object-fill"
        />
      </div>
      <div className="grid m-5 p-4 gap-4 child grid-cols-3">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
      <div className=" mb-32 grid ">
        <h1 className="text-4xl bg-gradient-to-r brightness-150 font-semibold tracking-tight from-[#0CF996]  to-[#E61AA1] bg-clip-text text-transparent my-3">
          UPCOMING EVENTS
        </h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 minxl:flex minxl:flex-col p-4">
          <div className="col-span-2 flex row-span-2">
            <img
              src={Team}
              alt=""
              style={{height: '100%'}}
              className="rounded-xl h-fit object-cover m-auto"
            />
          </div>
          <div className="col-span-1 my-auto py-4">
            <h2 className="text-2xl text-left text-stone-50 ">Heading 1</h2>
            <p className="text-stone-500 text-left text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam veritatis fuga exercitationem nostrum repudiandae dolor
              et ducimus possimus temporibus omnis rerum vel officia quaerat,
              facere cum? A laudantium expedita assumenda.
            </p>
          </div>
          <div className="col-span-1 py-auto py-4 ">
            <h2 className=" text-left  text-stone-50">Heading 2</h2>
            <p className="text-stone-500 text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam veritatis fuga exercitationem nostrum repudiandae dolor
              et ducimus possimus temporibus omnis rerum vel officia quaerat,
              facere cum? A laudantium expedita assumenda.
            </p>
          </div>
        </div>
        <div>
          <h1 className="border-white rounded-3xl border-2 text-4xl mt-8 mx-6 py-1 text-slate-100 hover:bg-slate-200 hover:bg-opacity-20 ">
            Register Now
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
