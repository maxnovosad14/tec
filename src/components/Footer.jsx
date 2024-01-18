import React from "react";

function Footer() {
  return (
    <footer className=" bg-black text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="mx-auto py-10 text-center md:text-left">
        <div className="grid-1 grid gap-24 md:grid-cols-2 lg:grid-cols-3 mx-24">
          <div className="">
            <h6 className="mb-4 text-xl flex text-white items-center justify-center font-semibold uppercase md:justify-start">
              archit
            </h6>
            <p>
              Our shelters are crafted using durable materials <br /> to ensure long
              life span.
            </p>
          </div>

          <div className="flex flex-col items-center mr-12">
            <h6 className="mb-4 flex justify-center text-white font-semibold uppercase md:justify-start">
              sitemap
            </h6>
            <p className="mb-4 cursor-pointer">
              <a className="text-neutral-600 dark:text-neutral-200">About</a>
            </p>
            <p className="mb-4 cursor-pointer">
              <a className="text-neutral-600 dark:text-neutral-200">Help</a>
            </p>
            <p className="mb-4 cursor-pointer">
              <a className="text-neutral-600 dark:text-neutral-200">Contact</a>
            </p>
            <p className="cursor-pointer">
              <a className="text-neutral-600 dark:text-neutral-200">Career</a>
            </p>
          </div>

          <div className="div">
            <p className="uppercase mb-4 text-white">newsletter</p>
            <input type="text" className="border-2 border-orange-400 bg-transparent text-white lowercase placeholder:capitalize" placeholder="Email" />
            <button className=" bg-orange-400 h-[43.2px] w-14 text-white">Send</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
