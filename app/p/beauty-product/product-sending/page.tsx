// app/influencers/page.jsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { Edit2, LinkIcon, Trash2 } from "lucide-react";

const currentData = [
    {
        avatar: "/avatar.jpg",
        name: "Olivia Rhye",
        username: "@olivia",
        product: "Red floral kurta",
        productLink: "#",
        address:
            "22, 12, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001, India",
        quantity: 2,
        trackingId: "cityproduct25154",
        status: "Processing",
    },
    {
        avatar: "/avatar.jpg",
        name: "Olivia Rhye",
        username: "@olivia",
        product: "Red floral kurta",
        productLink: "#",
        address:
            "22, 12, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001, India",
        quantity: 2,
        trackingId: "cityproduct25154",
        status: "Processing",
    },
    {
        avatar: "/avatar.jpg",
        name: "Olivia Rhye",
        username: "@olivia",
        product: "Red floral kurta",
        productLink: "#",
        address:
            "22, 12, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001, India",
        quantity: 2,
        trackingId: "cityproduct25154",
        status: "Processing",
    },
    {
        avatar: "/avatar.jpg",
        name: "Olivia Rhye",
        username: "@olivia",
        product: "Red floral kurta",
        productLink: "#",
        address:
            "22, 12, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001, India",
        quantity: 2,
        trackingId: "cityproduct25154",
        status: "Processing",
    },
    {
        avatar: "/avatar.jpg",
        name: "Olivia Rhye",
        username: "@olivia",
        product: "Red floral kurta",
        productLink: "#",
        address:
            "22, 12, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001, India",
        quantity: 2,
        trackingId: "cityproduct25154",
        status: "Processing",
    },
    {
        avatar: "/avatar.jpg",
        name: "Olivia Rhye",
        username: "@olivia",
        product: "Red floral kurta",
        productLink: "#",
        address:
            "22, 12, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001, India",
        quantity: 2,
        trackingId: "cityproduct25154",
        status: "Processing",
    },
    {
        avatar: "/avatar.jpg",
        name: "Olivia Rhye",
        username: "@olivia",
        product: "Red floral kurta",
        productLink: "#",
        address:
            "22, 12, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001, India",
        quantity: 2,
        trackingId: "cityproduct25154",
        status: "Processing",
    },
    {
        avatar: "/avatar.jpg",
        name: "Olivia Rhye",
        username: "@olivia",
        product: "Red floral kurta",
        productLink: "#",
        address:
            "22, 12, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001, India",
        quantity: 2,
        trackingId: "cityproduct25154",
        status: "Processing",
    },

];

export default function InfluencersPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    // Pagination calculation
    const totalPages = Math.ceil(currentData.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedData = currentData.slice(startIndex, startIndex + rowsPerPage);

    return (
        <div className="flex min-h-screen bg-white text-sm">
            {/* Sidebar */}

            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 p-6">
                <div className="overflow-x-auto border border-gray-200 rounded-lg">
                    <table className="w-full border-collapse">
                        <thead className="bg-gray-50 text-gray-500 text-xs font-medium">
                            <tr>
                                <th className="px-4 py-3 text-left">Name</th>
                                <th className="px-4 py-3 text-left">Product</th>
                                <th className="px-4 py-3 text-left">Ship to</th>
                                <th className="px-4 py-3 text-left">No of product</th>
                                <th className="px-4 py-3 text-left">Tracking ID</th>
                                <th className="px-4 py-3 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {paginatedData.map((order, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 align-middle">
                                    {/* Name */}
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            <button className="text-gray-400 hover:text-blue-500">
                                                <Edit2 size={16} />
                                            </button>
                                            <Image
                                                src={order.avatar}
                                                alt={order.name}
                                                width={36}
                                                height={36}
                                                className="rounded-full"
                                            />
                                            <div>
                                                <div className="font-medium text-gray-900">{order.name}</div>
                                                <div className="text-gray-500 text-xs">{order.username}</div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Product */}
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-1 text-gray-700">
                                            {order.product}
                                            <a href={order.productLink} className="text-blue-500 hover:underline">
                                                <LinkIcon size={14} />
                                            </a>
                                        </div>
                                    </td>

                                    {/* Ship to */}
                                    <td className="px-4 py-3 text-gray-500 text-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[250px]">
                                        {order.address}
                                    </td>

                                    {/* No of product */}
                                    <td className="px-4 py-3 text-gray-700">{order.quantity}</td>

                                    {/* Tracking ID */}
                                    <td className="px-4 py-3 text-gray-700">{order.trackingId}</td>

                                    {/* Status */}
                                    <td className="px-4 py-3">
                                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600 border border-green-200">
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </main>


        </div>
    );
}
