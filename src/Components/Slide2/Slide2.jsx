import React, { useEffect, useState } from "react";
import Logo from "../../Images/ROf Image 1.png";
import { Link, Navigate } from "react-router-dom";


const Slide2 = () => {
  const [formData, setFormData] = useState({
    partnerName: "",
    companyName: "",
    customerName: "",
    customerMobile: "",
  });


  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const validate = () => {
    let validationErrors = {};
    if (!formData.partnerName)
      validationErrors.partnerName = "Channel Partner’s Name is required";
    if (!formData.companyName)
      validationErrors.companyName =
        "Channel Partner’s Company Name is required";
    if (!formData.customerName)
      validationErrors.customerName = "Customer Name is required";
    if (!formData.customerMobile) {
      validationErrors.customerMobile =
        "Last four digits of Customer Mobile Number are required";
    } else if (!/^\d{4}$/.test(formData.customerMobile)) {
      validationErrors.customerMobile =
        "Customer Mobile Number must be 4 digits";
    }
    return validationErrors;

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      
      setErrors(validationErrors);
     


    } else {
      setErrors({});

      console.log("Form submitted successfully", formData);
      alert("Form submitted successfully");
      window.location.assign("/projectDetails");


    }
  };


  // if(isfilled){

  // }

  // else{
  //   setErrors({});
  //   console.log("Form submitted successfully", formData);

  // }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "rgba(247, 243, 232, 1)" }}
    >
      <div className="flex items-center justify-center mb-6">
        <img
          src={Logo}
          alt="ROF Logo"
          style={{ width: 139, height: 111, gap: 0, opacity: 1 }}
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md ml-4 tablet:max-w-lg tablet:p-8">
        <form             onSubmit={handleSubmit}
        >
          <div className="mb-4 tablet:mb-6">
            <label
              className="block text-gray-700 font-bold mb-2 text-base tablet:text-lg"
              style={{
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "24.59px",
                textAlign: "left",
              }}
            >
              Channel Partner’s Name
            </label>
            <input
              type="text"
              name="partnerName"
              value={formData.partnerName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 tablet:text-lg"
              placeholder="John Doe"
              required
              style={{
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "24.59px",
                textAlign: "left",
              }}
            />
            {errors.partnerName && (
              <p className="text-red-500 text-sm">{errors.partnerName}</p>
            )}
          </div>
          <div className="mb-4 tablet:mb-6">
            <label
              className="block text-gray-700 font-bold mb-2 text-base tablet:text-lg"
              style={{
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "24.59px",
                textAlign: "left",
              }}
            >
              Channel Partner’s Company Name
            </label>
            <input
              type="text"
              required
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 tablet:text-lg"
              placeholder="Acme Relators"
              style={{
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "24.59px",
                textAlign: "left",
              }}
            />
            {errors.companyName && (
              <p className="text-red-500 text-sm">{errors.companyName}</p>
            )}
          </div>
          <div className="mb-4 tablet:mb-6">
            <label
              className="block text-gray-700 font-bold mb-2 text-base tablet:text-lg"
              style={{
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "24.59px",
                textAlign: "left",
              }}
            >
              Customer Name
            </label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 tablet:text-lg"
              placeholder="John Doe"
              required
              style={{
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "24.59px",
                textAlign: "left",
              }}
            />
            {errors.customerName && (
              <p className="text-red-500 text-sm">{errors.customerName}</p>
            )}
          </div>
          <div className="mb-4 tablet:mb-6">
            <label
              className="block text-gray-700 font-bold mb-2 text-base tablet:text-lg"
              style={{
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "24.59px",
                textAlign: "left",
              }}
            >
              Last four Digits of Customer Mobile Number
            </label>
            <input
              type="text"
              required
              name="customerMobile"
              value={formData.customerMobile}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 tablet:text-lg"
              placeholder="1234"
              style={{
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "24.59px",
                textAlign: "left",
              }}
            />
            {errors.customerMobile && (
              <p className="text-red-500 text-sm">{errors.customerMobile}</p>
            )}
          </div>
          <div className="text-center">
       
            <button
            style={{
              padding: "10px",
              gap: "10px",
              borderRadius: "8px",
              opacity: "0px",
              background: "rgba(99, 46, 4, 1)", 
              fontWeight: "800",
              fontSize: "24px",
              lineHeight: "32.78px",
              fontFamily: "Manrope",
              color: "rgba(255, 255, 255, 1)",
            }}
            className="w-full px-4 py-2 text-black bg-brown-600 rounded-md focus:outline-none text-white"
          >
            Proceed for Step2
          </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Slide2;