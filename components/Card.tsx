import React from 'react';
import { Twitter, Linkedin, Globe } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

export default function ProfileCard() {
    return (
        <div className="w-[350px]  bg-white rounded-4xl shadow-lg overflow-hidden">

            {/* Header with gradient background */}
            <div className="h-32 bg-gradient-to-r from-purple-300 via-purple-400 to-blue-500 relative">
                {/* Profile image */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="w-24 h-24 rounded-full bg-teal-400 border-4 border-white overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-teal-300 to-teal-500 flex items-center justify-center">
                            <div className="w-18 h-18 rounded-full bg-gray-700 flex items-center justify-center">
                                <span className="text-white text-lg">👤</span>
                            </div>
                        </div>
                    </div>
                    {/* Instagram icon badge */}
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center border-2 border-white">
                        <FaInstagram className="text-white text-sm" />
                    </div>
                </div>
            </div>

            {/* Profile content */}
            <div className="pt-16 px-6 pb-6 bg-[#F1F0F3]">
                {/* Name and title */}
                <div className="text-center mb-4">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center justify-center gap-2">
                        Amanda Rothbasrd
                        <span className="text-yellow-400">✓</span>
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Expert in promoting all type of music albums and songs
                    </p>
                </div>

                {/* Category tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Music</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Song promotions</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Reels</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                        <div className="font-bold text-lg text-gray-900">1M</div>
                        <div className="text-xs text-gray-500">Follow</div>
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-lg text-gray-900">12.5%</div>
                        <div className="text-xs text-gray-500">Eng. Rate</div>
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-lg text-gray-900">660K</div>
                        <div className="text-xs text-gray-500">Reach</div>
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-lg text-gray-900">14</div>
                        <div className="text-xs text-gray-500">Collaborations</div>
                    </div>
                </div>

                {/* Profile button */}
                <div className="flex justify-center mb-4">
                    <button className=" bg-gradient-to-r from-[#264d99] to-[#66b3ff] text-white font-semibold py-2 px-8 rounded-full transition-colors duration-200">
                        Profile
                    </button>
                </div>


                {/* Social links */}
                <div className="flex justify-center gap-4">
                    <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors">
                        <Twitter size={20} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <Linkedin size={20} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Globe size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}