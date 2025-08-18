    "use client";
import Link from "next/link";
import { useState } from "react";
import {
    FaUsers, FaBoxOpen, FaCode, FaMoneyBillWave

} from "react-icons/fa";
import {
    MdOutlineAttachMoney
} from "react-icons/md";
import {
    AiOutlineFileText
} from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";

const cards = [
    { name: "Influencers", icon: <FaUsers className="text-blue-500" size={24} />, href: "/p/beauty-product/influencers", count: 24 },
    { name: "Product & Content", icon: <FaBoxOpen className="text-purple-500" size={24} />, href: "/p/beauty-product/product-content", count: 12 },
    { name: "Budget Allocation", icon: <MdOutlineAttachMoney className="text-green-500" size={24} />, href: "/p/beauty-product/budget", count: 8 },
    { name: "Terms & Conditions", icon: <AiOutlineFileText className="text-yellow-500" size={24} />, href: "/p/beauty-product/terms", count: 5 },
    { name: "Product Sending", icon: <FaBoxOpen className="text-pink-500" size={24} />, href: "/p/beauty-product/product-sending", count: 16, badge: "New" },
    { name: "Campaign Review", icon: <FaCode className="text-red-500" size={24} />, href: "/p/beauty-product/review", count: 3 },
    { name: "Campaign Monitoring", icon: <BsClipboardData className="text-indigo-500" size={24} />, href: "/p/beauty-product/campaign", count: 18 },
    { name: "Payments", icon: <FaMoneyBillWave className="text-teal-500" size={24} />, href: "/p/beauty-product/payment-management", count: 7 },
];

export default function BeautyCampaignsPage() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCards = cards.filter(card =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (activeFilter === "all" || card.name.toLowerCase().includes(activeFilter))
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
                {filteredCards.map((card, index) => (
                    <Link key={index} href={card.href}>
                        <div className="bg-white shadow-sm hover:shadow-lg transition-all rounded-xl p-6 flex flex-col items-center text-center border border-gray-200 hover:border-blue-300 group">
                            <div className="bg-gray-100 group-hover:bg-blue-50 transition p-4 rounded-lg mb-4">
                                {card.icon}
                            </div>

                            <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition mb-2">
                                {card.name}
                            </h3>

                            <p className="text-gray-500 text-sm">
                                Manage {card.name.toLowerCase()} for current campaign
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );

}