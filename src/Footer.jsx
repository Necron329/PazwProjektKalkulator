import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white p-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2025 Michał website. All rights reserved.</p>
        <div className="mt-4">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Terms of Service</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
