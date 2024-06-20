import React from 'react';
import logo from '../../Images/ROf Image 1.png';
import { Link } from 'react-router-dom';

const Slide23 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center " style={{ backgroundColor: 'rgba(247, 243, 232, 1)' }}>
      <div className="flex items-center justify-center mb-6">
        <img src={logo} alt="ROF Logo" style={{ width: 139, height: 111, gap: 0, opacity: 1 }} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md ml-4 tablet:max-w-lg tablet:p-8">
        <form>
        
          <div className="mb-4 tablet:mb-6">
            <label className="block text-gray-700 font-bold mb-2 text-base tablet:text-lg" style={{ fontFamily: 'Manrope', fontSize: '18px', fontWeight: 700, lineHeight: '24.59px', textAlign: 'left' }}>Customer Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 tablet:text-lg"
              placeholder="John Doe"
              style={{ fontFamily: 'Manrope', fontSize: '18px', fontWeight: 400, lineHeight: '24.59px', textAlign: 'left' }}
            />
          </div>
          <div className="mb-4 tablet:mb-6">
            <label className="block text-gray-700 font-bold mb-2 text-base tablet:text-lg" style={{ fontFamily: 'Manrope', fontSize: '18px', fontWeight: 700, lineHeight: '24.59px', textAlign: 'left' }}>Email ID</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 tablet:text-lg"
              placeholder="Acme Relators"
              style={{ fontFamily: 'Manrope', fontSize: '18px', fontWeight: 400, lineHeight: '24.59px', textAlign: 'left' }}
            />
          </div>
          <div className="mb-4 tablet:mb-6">
            <label className="block text-gray-700 font-bold mb-2 text-base tablet:text-lg" style={{ fontFamily: 'Manrope', fontSize: '18px', fontWeight: 700, lineHeight: '24.59px', textAlign: 'left' }}>Mobile Number</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 tablet:text-lg"
              placeholder="John Doe"
              style={{ fontFamily: 'Manrope', fontSize: '18px', fontWeight: 400, lineHeight: '24.59px', textAlign: 'left' }}
            />
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
            Proceed for Step2
          </button>
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Slide23;