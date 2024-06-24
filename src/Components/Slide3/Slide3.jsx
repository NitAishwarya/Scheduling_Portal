import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from "../../Images/ROf Image 1.png";
import { Link } from "react-router-dom";

const projectLocations = {
  "Project A": "Location A",
  "Project B": "Location B",
  "Project C": "Location C",
  "Project D": "Location D",
};

const Slide3 = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProjectChange = (project) => {
    setSelectedProject(project);
    setIsDropdownOpen(false);
  };

  const initValue = {project:"", location:""};
  const [formValue, setFormValue] = useState(initValue);

  const Submit=() =>{
    if(selectedProject != 0){
      alert("Form Submited")
      return window.location.assign("/Assignment");
    }

    else{
      alert("Fill the Form")  
    console.error("Fill the Form");
    }
   
  }
 
 


  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="text-center">
        <img src={Logo} alt="ROF" className="mx-auto mb-4" />
      </div>
      <div
        className="p-6 bg-white rounded-lg shadow-md w-full max-w-md {box-shadow: 0px 10px 22px 0px rgba(130, 71, 23, 0.1);

box-shadow: 0px 41px 41px 0px rgba(130, 71, 23, 0.09);

box-shadow: 0px 92px 55px 0px rgba(130, 71, 23, 0.05);

box-shadow: 0px 163px 65px 0px rgba(130, 71, 23, 0.01);

box-shadow: 0px 254px 71px 0px rgba(130, 71, 23, 0);
}"
      >
        <div className="mb-4">
          <label
            style={{
              fontFamily: "Manrope",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "24.59px",
              textAlign: "left",
              color: "rgba(0, 0, 0, 1)",
            }}
            className="block mb-2 font-medium"
          >
            Project Name
          </label>
          <div className="relative" >
            <button 
              value={formValue.project}
              style={{
                color: "grey",
                fontFamily: "Manrope",
                padding: "12px 24px 12px 24px",
                gap: "0px",
                borderRadius: "8px",
                justify: "space-between",
                opacity: "0px",
                border: "1.5px solid rgba(53, 53, 53, 0.5)",
              }}
              className="w-full px-4 py-2 text-left bg-white border rounded-md text-black-500 shadow-sm focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}

            >
              {selectedProject || "Choose Project"}
            </button>
            <Transition
              show={isDropdownOpen}
              enter="transition-all duration-300"
              enterFrom="max-h-0 opacity-0"
              enterTo="max-h-60 opacity-100"
              leave="transition-all duration-300"
              leaveFrom="max-h-60 opacity-100"
              leaveTo="max-h-0 opacity-0"
            >
              <div className="absolute left-0 right-0 z-10 w-full mt-2 bg-white border rounded-md shadow-lg overflow-hidden">
                {Object.keys(projectLocations).map((project) => (
                  <div
                    key={project}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleProjectChange(project)}
                    
                  >
                    {project}
                  </div>
                ))}
              </div>
            </Transition>
          </div>
        </div>
        <div
          className={`transition-all duration-300 ${
            isDropdownOpen ? "mt-44" : "mt-4"
          }`}
        >
          <label
            style={{
              fontFamily: "Manrope",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "24.59px",
              textAlign: "left",
              color: "rgba(0, 0, 0, 1)",
            }}
            className="block mb-2 text-sm font-medium text-gray-500"
          >
            Project Location
          </label>
          <input
            style={{
              fontFamily: "Manrope",
              padding: "12px 24px 12px 24px",
              gap: "0px",
              borderRadius: "8px",
              fontSize: "18px",
              justify: "space-between",
              opacity: "0px",
              border: "1.5px solid rgba(53, 53, 53, 0.5)",
              
            }}
            type="text"
            required
            value={selectedProject ? projectLocations[selectedProject] : ""}
            readOnly
            placeholder="123, Street Name, City"
            className="w-full px-4 py-2 bg-white border rounded-md shadow-sm focus:outline-none"
          />
        </div>
        <br />
          <button
            onClick={Submit}
            style={{
              padding: "10px",
              gap: "10px",
              borderRadius: "8px",
              opacity: "0px",
              background: "rgba(99, 46, 4, 1)",
              boxShadow: "0px 3px 6px 0px rgba(99, 46, 4, 0.1)",

              boxShadow: "0px 12px 12px 0px rgba(99, 46, 4, 0.09)",

              boxShadow: "0px 26px 16px 0px rgba(99, 46, 4, 0.05)",

              boxShadow: "0px 47px 19px 0px rgba(99, 46, 4, 0.01)",

              boxShadow: "0px 73px 20px 0px rgba(99, 46, 4, 0)",
              fontWeight: "800",
              fontSize: "24px",
              lineHeight: "32.78px",
              fontFamily: "Manrope",
              color: "rgba(255, 255, 255, 1)",
            }}
            className="w-full px-4 py-2 text-black bg-brown-600 rounded-md focus:outline-none text-white"
          >
            Assign Executive
          </button>
      
      </div>
    </div>
  );
};

export default Slide3;
