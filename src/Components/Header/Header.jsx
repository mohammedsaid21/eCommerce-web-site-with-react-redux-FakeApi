import React, { useEffect, useState } from "react";
import { ImMenu3 } from "react-icons/im";
import { Link } from "react-router-dom";
import ModalA from "./ModalA";

const Header = () => {

  const [state, setState] = useState(false)

  return (
    <div className="shadow-2xl">
      <div className="container mx-auto">
        <div className="flex justify-center md:justify-between mx-auto relative">
          <div className={`md:flex w-1/5 relative hidden  `}>
            <h3 className="bg-[#0e8ce4] w-full transition-all cursor-pointer text-white py-3 px-6 md:flex items-center rounded-md text-[12px] hidden ">
              <ImMenu3 className="md:mr-4 mr-0 text-xl" /> CATEGORIES
            </h3>
            <ul className="hidden md:flex flex-col bg-white shadow-lg absolute top-0 mt-14 w-full ">
              <li className="border-b-[1px] text-[12px] md:text-sm md:py-3 md:px-4 py-2 px-3 header-flex-col">Computers & Laptops</li>
              <li className="border-b-[1px] text-[12px] md:text-sm md:py-3 md:px-4 py-2 px-3 header-flex-col">Cameras & Photos</li>
              <li className="border-b-[1px] text-[12px] md:text-sm md:py-3 md:px-4 py-2 px-3 header-flex-col">Hardware</li>
              <li className="border-b-[1px] text-[12px] md:text-sm md:py-3 md:px-4 py-2 px-3 header-flex-col">Smartphones & Tablets</li>
              <li className="border-b-[1px] text-[12px] md:text-sm md:py-3 md:px-4 py-2 px-3 header-flex-col">Tv</li>
              <li className="border-b-[1px] text-[12px] md:text-sm md:py-3 md:px-4 py-2 px-3 header-flex-col">Video Games</li>
            </ul>
          </div>
          <ul className="md:flex  ">
            <Link to='/' className="px-8 py-4 md:px-6 md:py-2 text-sm md:text-lg header-flex-col">Home</Link>
            <Link to='/cartItem' className="px-8 py-4 md:px-6 md:py-2 text-sm md:text-lg header-flex-col">CartItem</Link>
            <Link to='/contact' className="px-8 py-4 md:px-6 md:py-2 text-sm md:text-lg header-flex-col">Contact</Link>
            <div className="px-8 py-4 md:px-6 md:py-2 text-sm md:text-lg header-flex-col relative show-div text-center" onClick={() => setState(true)}>Enter Product
              <h5 className='absolute hidden top-16 -right-10 bg-gray-100 py-2 px-4 rounded-xl border-[1px] border-[#555] w-64 text-[15px] text-black'>You Should To Sign First</h5>
            </div>
          </ul>
          {/*  */}
        </div>
      </div>
      <ModalA state={state} setState={setState} />
    </div>
  );
};

export default Header;
