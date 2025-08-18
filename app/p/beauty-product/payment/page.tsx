// app/influencers/page.jsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { Trash2 } from "lucide-react";

const data = [
    {
        name: "Olivia Rhye",
        username: "@olivia",
        avatar: "/avatars/olivia.jpg",
        cpp: 1500,
        cps: 1000,
        cpvid: 2500,
        performanceHike: "10-15% eng - 2000",
        spend: 7000,
        date: "10.2.2021",
        status: "Processing",

    },
    ...Array(10).fill({
        name: "Olivia Rhye",
        username: "@olivia",
        avatar: "/avatars/olivia.jpg",
        cpp: 1500,
        cps: 1000,
        cpvid: 2500,
        performanceHike: "10-15% eng - 2000",
        spend: 7000,
        date: "10/2/2021",
        status: "Processing",
    }),
];



export default function InfluencersPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    // Pagination calculation
    const totalPages = Math.ceil(data.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);

    return (
        <div className="flex min-h-screen bg-white text-sm">
            {/* Sidebar */}

            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 p-6">
                <div className="overflow-x-auto border rounded-lg">
                    <table className="w-full border-collapse">
                        <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                            <tr className="text-left">
                                <th className="p-3 w-10">
                                    <input type="checkbox" />
                                </th>
                                <th className="p-3">Name</th>
                                <th className="p-3">CPP</th>
                                <th className="p-3">CPS</th>
                                <th className="p-3">CPVID</th>
                                <th className="p-3">Performance Hike</th>
                                <th className="p-3">Spend</th>
                                <th className="p-3">Date</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((person, idx) => (
                                <tr key={idx} className="border-b hover:bg-gray-50">
                                    {/* Checkbox */}
                                    <td className="p-3">
                                        <input type="checkbox" />
                                    </td>

                                    {/* Name */}
                                    <td className="p-3 flex items-center gap-3">
                                        <Image
                                            src={person.avatar}
                                            alt={person.name}
                                            width={32}
                                            height={32}
                                            className="rounded-full"
                                        />
                                        <div>
                                            <div className="font-medium text-gray-900">{person.name}</div>
                                            <div className="text-gray-500 text-xs">{person.username}</div>
                                        </div>
                                    </td>

                                    {/* CPP */}
                                    <td className="p-3 text-gray-700">{person.cpp}</td>

                                    {/* CPS */}
                                    <td className="p-3 text-gray-700">{person.cps}</td>

                                    {/* CPVID */}
                                    <td className="p-3 text-gray-700">{person.cpvid}</td>

                                    {/* Performance Hike */}
                                    <td className="p-3 text-gray-700">{person.performanceHike}</td>

                                    {/* Spend */}
                                    <td className="p-3 text-gray-700">{person.spend}</td>

                                    {/* Date */}
                                    <td className="p-3 text-gray-700">{person.date}</td>

                                    {/* Status */}
                                    <td className="p-3">
                                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-600">
                                            {person.status}
                                        </span>
                                    </td>

                                    {/* Payment Button */}
                                    <td className="p-3">
                                        <button className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700">
                                            Pay
                                        </button>
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
