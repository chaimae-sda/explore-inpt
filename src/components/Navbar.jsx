import { Link } from "react-router-dom";
import logo from "../assets/Design sans titre.png";
import { useState } from "react";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">


                    <Link to="/" className="flex-shrink-0 flex items-center gap-4 hover:opacity-80 transition-opacity">
                        <img
                            src={logo}
                            alt="INPT Logo"
                            className="h-12 w-auto object-contain"
                        />
                        <div className="h-8 w-px bg-slate-300 rounded-full"></div>
                        <span className="text-2xl font-bold tracking-tight">
                            <span className="text-slate-900">Explore</span>
                            <span className="text-[#007ac3]">INPT</span>
                        </span>
                    </Link>


                    <div className="hidden md:flex space-x-8 items-center">
                        <Link to="/events" className="text-slate-600 hover:text-[#007ac3] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Events
                        </Link>
                        <Link to="/clubs" className="text-slate-600 hover:text-[#007ac3] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Clubs
                        </Link>
                        <Link to="/profile" className="text-slate-600 hover:text-[#007ac3] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Profile
                        </Link>
                    </div>


                    <div className="hidden md:flex items-center space-x-5">
                        <Link to="/login" className="text-slate-600 hover:text-[#007ac3] font-medium text-sm transition-colors">
                            Log in
                        </Link>
                        <Link to="/signup" className="bg-[#007ac3] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 shadow-sm transition-all active:scale-95">
                            Sign up
                        </Link>
                    </div>


                    <div className="md:hidden flex items-center">
                        <button
                            className="text-slate-600 hover:text-[#007ac3] focus:outline-none p-2"
                            onClick={() => setOpen(!open)}
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {open ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            {open && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
                    <div className="px-4 pt-2 pb-4 space-y-1">

                        <Link onClick={() => setOpen(false)} to="/events" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-[#007ac3] hover:bg-gray-50">
                            Events
                        </Link>
                        <Link onClick={() => setOpen(false)} to="/clubs" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-[#007ac3] hover:bg-gray-50">
                            Clubs
                        </Link>
                        <Link onClick={() => setOpen(false)} to="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-[#007ac3] hover:bg-gray-50">
                            Profile
                        </Link>


                        <div className="border-t border-gray-100 mt-4 pt-4 space-y-2">
                            <Link onClick={() => setOpen(false)} to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-[#007ac3] hover:bg-gray-50">
                                Log in
                            </Link>

                            <Link onClick={() => setOpen(false)} to="/signup" className="block px-3 py-2 rounded-md text-base font-medium bg-[#007ac3] text-white hover:bg-blue-700 text-center">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};