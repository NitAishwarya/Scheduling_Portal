import React, { useState } from "react";
import Logo from "../../Images/ROf Image 1.png";
import { Link } from "react-router-dom";
const Slide2 = () => {
  const [formData, setFormData] = useState({
    customerName:"",
    EmailID: "",
    mobileNumber: "",
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
    if (!formData.customerName)
      validationErrors.customerName =
        "Customer's Name is required";
    if (!formData.EmailID)
      validationErrors.EmailID = "Email ID is required";
    if (!formData.mobileNumber) {
      validationErrors.mobileNumber =
        "Last four digits of Customer Mobile Number are required";
    } else if (!/^\d{4}$/.test(formData.mobileNumber)) {
      validationErrors.mobileNumber =
        "Mobile Number must be 10 digits";
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
    }
  };

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
        <form onSubmit={handleSubmit}>
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
               Company Name
            </label>
            <input
              type="text"
              required
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 tablet:text-lg"
              placeholder="John Doe"
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
              Email ID
            </label>
            <input
              type="text"
              name="EmailID"
              required
              value={formData.EmailID}
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
            {errors.EmailID && (
              <p className="text-red-500 text-sm">{errors.EmailID}</p>
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
               Mobile No
            </label>
            <input
              type="text"
              required
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 tablet:text-lg"
              placeholder="John Doe"
              style={{
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "24.59px",
                textAlign: "left",
              }}
            />
            {errors.mobileNumber && (
              <p className="text-red-500 text-sm">{errors.mobileNumber}</p>
            )}
          </div>
          <div className="text-center">
            <Link to="/projectDetails">
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
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Slide2;