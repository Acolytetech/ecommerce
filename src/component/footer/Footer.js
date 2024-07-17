import React from 'react';
import logo from '../../images/JD LOGO.png'

const Footer = () => {
    return (
        <footer className=" container bg-white text-white py-6 m-auto px-60">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex-shrink-0 text-lg font-bold">
                    <img src={logo} />
                </div>

                {/* Quick Links */}
                <div className="text-center text-black">
                    <h2 className='font-bold'>Quick Links </h2>
                    <ul className=" text-sm font-medium">
                        <li className='mt-2'><a href="#" className=" hover:text-gray-400 text-black font-bold">Home</a></li>
                        <li className='mt-2'><a href="#" className=" hover:text-gray-400 text-black">About</a></li>
                        <li className='mt-2'><a href="#" className=" hover:text-gray-400 text-black">Contact</a></li>
                    </ul>

                </div>

                {/* Social Media Icons */}
                <div className="text-center text-black
                ">
                    <h4 className='font-bold'>Social Media Icons</h4>
                    <ul className=" items-center ">
                        <li className='mt-2'> <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-400">
                            Instagram
                        </a></li>
                        <li className='mt-2'>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-400">
                                Facebook
                            </a>
                        </li>
                        <li className='mt-2'>
                            <a href="mailto:someone@example.com" className="text-black hover:text-gray-400">
                                Email
                            </a>
                        </li>

                    </ul>



                </div>
            </div>
        </footer>
    );
};

export default Footer;
