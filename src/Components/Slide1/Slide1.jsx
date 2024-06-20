import React from "react";
import Logo from "../../Images/ROf Image 1.png";
import pranter from '../../Images/many.jpg'
 import pny from '../../Images/one.jpg'
import { Link } from "react-router-dom";


function Slide1() {
  return (
    <> 
    <div className="bg-[#F7F3E8]  w-auto">
      <div className="{text-align:center} w-full h-full    ">
        <div className="min-h-screen flex flex-col    ">
          <div className="  ">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
          <div className=" mx-auto">
            <div className="mt-10">
              <h1 className="text-4xl font-bold text-center {font-family: Manrope;} ">
                Welcome! to ROF’s<span>Self Scheduling Portal</span>
              </h1>
              <p className="text-gray-600 text-center  mt-2 text-xl {font-family: Manrope;} ">
                Please select options below to proceed further
              </p>
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2  mt-20   mx-20  gap-60">
              <div className="bg-white  rounded-xl p-6   mb-20 h-48 w-48 shadow-xl   {box-shadow: 0px 2.98px 5.97px 0px rgba(99, 46, 4, 0.1);

box-shadow: 0px 11.19px 11.19px 0px rgba(99, 46, 4, 0.09);

box-shadow: 0px 25.36px 14.92px 0px rgba(99, 46, 4, 0.05);

box-shadow: 0px 44.75px 17.9px 0px rgba(99, 46, 4, 0.01);

box-shadow: 0px 70.11px 19.39px 0px rgba(99, 46, 4, 0);
}">
    <Link to="/channelPartner">
    <div className="flex justify-center mb-4">
                  <img src={pranter} alt="Group Icon" className=" h-36 w-36" />
                </div>
    </Link>
               
                <div className=" ">
                <h2 style={{width:'12rem'}} className=" text-xl font-semibold  mt-10  relative right-5 {font-family: Manrope;}">
                  For Channel Partner
                </h2> 
                </div>
              </div>
             
              
              <div className="bg-white rounded-xl p-6 h-48 w-48 shadow-xl {box-shadow: 0px 2.98px 5.97px 0px rgba(99, 46, 4, 0.1);

box-shadow: 0px 11.19px 11.19px 0px rgba(99, 46, 4, 0.09);

box-shadow: 0px 25.36px 14.92px 0px rgba(99, 46, 4, 0.05);

box-shadow: 0px 44.75px 17.9px 0px rgba(99, 46, 4, 0.01);

box-shadow: 0px 70.11px 19.39px 0px rgba(99, 46, 4, 0);
}">
    <Link to="/channelPartner"> 
    <div className="flex justify-center mb-4">
                  <img
                    src={pny}
                    alt="User Icon"
                    className="h-36 w-36"
                  />
                </div>
    </Link>
               
                <div className=" ">
                <h2  style={{width:'12rem'}} className="text-xl font-semibold  mt-10  relative right-5 {font-family: Manrope;}">
                  For Channel Partner
                </h2> 
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Slide1;