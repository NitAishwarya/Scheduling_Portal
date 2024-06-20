import React from 'react';
import logo from '../../Images/ROf Image 1.png';
import { Link } from 'react-router-dom';

const Slide2 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center " style={{ backgroundColor: 'rgba(247, 243, 232, 1)' }}>
      <div className="flex items-center justify-center mb-6">
        <img src={logo} alt="ROF Logo" style={{ width: 139, height: 111, gap: 0, opacity: 1 }} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md ml-4 tablet:max-w-lg tablet:p-8">
        <form>
          <div className="mb-4 tablet:mb-6">
            <label className="block text-gray-700 font-bold mb-2 text-base tablet:text-lg" style={{ fontFamily: 'Manrope', fontSize: '18px', fontWeight: 700, lineHeight: '24.59px', textAlign: 'left' }}>Channel Partner’s Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 tablet:text-lg"
              placeholder="John Doe"
              style={{ fontFamily: 'Manrope', fontSize: '18px', fontWeight: 700, lineHeight: '24.59px', textAlign: 'left' }}
            />
          </div>
          <div className="mb-4 tablet:mb-6">
            <label className="block text-gray-700 font-bold mb-2 text-base tablet:text-lg" style={{ fontFamily: 'Manrope', fontSize: '18px', fontWeight: 700, lineHeight: '24.59px', textAlign: 'left' }}>Channel Partner’s Company Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 tablet:text-lg"
              placeholder="Acme Relators"
              style={{ fontFamily: 'Manrope', fontSize: '18px', fontWeight: 700, lineHeight: '24.59px', textAlign: 'left' }}
            />
          </div>
          <div className="mb-4 tablet:mb-6">
            <label className="block text-gray-700 font-bold mb-2 text-base tablet:text-lg" style={{ fontFamily: 'Manrope', fontSize: '18px', fontWeight: 700, lineHeight: '24.59px', textAlign: 'left' }}>Customer Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 tablet:text-lg"
              placeholder="John Doe"
              style={{ fontFamily: 'Manrope', fontSize: '18px', fontWeight: 700, lineHeight: '24.59px', textAlign: 'left' }}
            />
          </div>
          <div className="mb-4 tablet:mb-6">
            <label className="block text-gray-700 font-bold mb-2 text-base tablet:text-lg" style={{ fontFamily: 'Manrope', fontSize: '18px', fontWeight: 700, lineHeight: '24.59px', textAlign: 'left' }}>Last four Digits of Customer Mobile Number</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 tablet:text-lg"
              placeholder="1234"
              style={{ fontFamily: 'Manrope', fontSize: '18px', fontWeight: 700, lineHeight: '24.59px', textAlign: 'left' }}
            />
          </div>
        
          <div className="text-center">
          <Link to="/projectDetails"> 
          <button type="submit" className="w-full bg-red-950 text-white py-2 rounded-md hover:bg-brown-800 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-offset-2 tablet:text-lg font-bold text-24 leading-32">
              Proceed for Step 2
            </button>
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Slide2;