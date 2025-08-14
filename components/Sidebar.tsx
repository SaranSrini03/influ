"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaUsers, FaBoxOpen, FaMoneyBillWave, FaCode } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Influencers", icon: <FaUsers size={18} />, href: "/p/beauty-product/influencers" },
    { name: "Product and Content", icon: <FaBoxOpen size={18} />, href: "/p/beauty-product/product-content" },
    { name: "Budget allocations", icon: <MdOutlineAttachMoney size={18} />, href: "/p/beauty-product/budget" },
    { name: "Agree Terms & condition", icon: <AiOutlineFileText size={18} />, href: "/p/beauty-product/terms" },
    { name: "Product sending (If need)", icon: <FaBoxOpen size={18} />, href: "/p/beauty-product/product-sending" },
    { name: "Review", icon: <FaCode size={18} />, href: "/p/beauty-product/review" },
    { name: "Campaign Monitoring", icon: <BsClipboardData size={18} />, href: "/p/beauty-product/campaign" },
    { name: "Payment Management", icon: <FaMoneyBillWave size={18} />, href: "/p/beauty-product/payment" },
  ];

  return (
    <div className="w-64 bg-white border-r min-h-screen p-4">
      <ul className="space-y-3">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`flex items-center gap-3 p-2 rounded-lg transition-colors duration-200 ${
                pathname === item.href
                  ? "bg-blue-100 text-blue-600"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
