"use client";
import Link from "next/link";
import Image from "next/image";
import { Bell, Mail, UserCircle, Menu, X } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mailCount, setMailCount] = useState(0);
    const [notificationCount, setNotificationCount] = useState(0);

    return (
        <>
            <nav className="w-full bg-white border-b border-gray-200 shadow-sm px-6 py-6 min-h-[80px] flex items-center justify-between relative z-50">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/assests/emiroh.png"
                            alt="Emiroh Logo"
                            width={120}
                            height={40}
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Nav Links (centered) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-6 text-sm font-medium text-gray-700">
                    <Link href="/">Home</Link>
                    <Link href="/become-a-creator">Become a Creator</Link>
                    <Link href="/find-influencer">Find an Influencer</Link>
                    <Link href="/hub">Influencer Hub</Link>
                    <Link href="/plans">Plans</Link>
                    <Link href="/about">About Us</Link>
                    <Link
                        href="/campaign"
                        className="ml-4 px-5 py-2 text-white text-sm font-semibold rounded-full bg-gradient-to-b from-[#264d99] to-[#66b3ff] shadow-md hover:opacity-90 transition"
                    >
                        Campaign
                    </Link>
                </div>

                {/* Icons Right */}
                <div className="flex items-center space-x-4 text-gray-700">
                    {/* Desktop Icons */}
                    <div className="hidden md:flex space-x-4">
                        <div className="relative rounded-full hover:bg-gray-100 cursor-pointer">
                            <Mail className="w-7 h-7 text-gray-800" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] min-w-[16px] h-[16px] px-1 rounded-full flex items-center justify-center font-bold">
                                {mailCount > 99 ? '99+' : mailCount}
                            </span>
                        </div>

                        <div className="relative rounded-full hover:bg-gray-100 cursor-pointer">
                            <Bell className="w-7 h-7 text-gray-800" />
                            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] min-w-[16px] h-[16px] px-1 rounded-full flex items-center justify-center font-bold">
                                {notificationCount > 99 ? '99+' : notificationCount}
                            </span>
                        </div>
                        <UserCircle className="w-7 h-7 cursor-pointer hover:text-black"  />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        {mobileMenuOpen ? (
                            <X
                                className="w-7 h-7 cursor-pointer"
                                onClick={() => setMobileMenuOpen(false)}
                            />
                        ) : (
                            <Menu
                                className="w-7 h-7 cursor-pointer"
                                onClick={() => setMobileMenuOpen(true)}
                            />
                        )}
                    </div>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden w-full bg-white border-t border-gray-200 text-gray-700 shadow-lg px-4 py-5 space-y-3">
                    {/* Navigation Links */}
                    <div className="flex flex-col space-y-3 text-sm font-medium">
                        <Link
                            href="/"
                            className="px-4 py-3  rounded-lg hover:bg-gray-50 transition-all duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>

                        <Link
                            href="/become-a-creator"
                            className="px-4 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Become a Creator
                        </Link>

                        <Link
                            href="/find-influencer"
                            className="px-4 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Find an Influencer
                        </Link>

                        <Link
                            href="/hub"
                            className="px-4 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Influencer Hub
                        </Link>

                        <Link
                            href="/plans"
                            className="px-4 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Plans & Pricing
                        </Link>

                        <Link
                            href="/about"
                            className="px-4 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About Us
                        </Link>
                    </div>

                    {/* Campaign CTA */}
                    <Link
                        href="/campaign"
                        className="block px-5 py-3 text-center text-white font-semibold rounded-full bg-gradient-to-r from-[#1e40af] to-[#3b82f6] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Start a Campaign
                    </Link>

                    {/* Icons Section */}
                    <div className="flex justify-center space-x-6 pt-4 border-t border-gray-100 mt-4">
                        {/* Mail Icon with Count */}
                        <div className="relative p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                            <Mail className="w-5 h-5 text-gray-600" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] min-w-[16px] h-[16px] px-1 rounded-full flex items-center justify-center font-bold">
                                {mailCount > 99 ? '99+' : mailCount}
                            </span>
                        </div>

                        {/* Bell Icon with Count */}
                        <div className="relative p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                            <Bell className="w-5 h-5 text-gray-600" />
                            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] min-w-[16px] h-[16px] px-1 rounded-full flex items-center justify-center font-bold">
                                {notificationCount > 99 ? '99+' : notificationCount}
                            </span>
                        </div>

                        {/* User Icon - No Count */}
                        <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                            <UserCircle className="w-5 h-5 text-gray-600" />
                        </div>
                    </div>

                </div>
            )}
        </>
    );
}
