"use client";
import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";

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
    }),
];

export default function InfluencersPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    // Pagination calculation
    const totalPages = Math.ceil(data.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentData = data.slice(startIndex, startIndex + rowsPerPage);

    return (
        <div className="flex min-h-screen bg-white text-sm">
            <Sidebar />

            <main className="flex-1 p-6">
                <div className="overflow-x-auto border rounded-lg">
                    <table className="w-full border-collapse">
                        <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                            <tr className="text-left">
                                <th className="p-3 w-10"></th>
                                <th className="p-3">Name</th>
                                <th className="p-3">CPP</th>
                                <th className="p-3">CPS</th>
                                <th className="p-3">CPVID</th>
                                <th className="p-3">Performance Hike</th>
                                <th className="p-3">Spend</th>
                                <th className="p-3">Budget</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((person, idx) => (
                                <tr key={idx} className="border-b hover:bg-gray-50">
                                    <td className="p-3">
                                        <input type="checkbox" />
                                    </td>
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
                                    <td className="p-3 text-gray-700">{person.cpp}</td>
                                    <td className="p-3 text-gray-700">{person.cps}</td>
                                    <td className="p-3 text-gray-700">{person.cpvid}</td>
                                    <td className="p-3 text-gray-700">{person.performanceHike}</td>
                                    <td className="p-3 text-gray-700">{person.spend}</td>
                                    <td className="p-3">
                                        <button className="bg-green-100 text-green-600 px-3 py-1 rounded-full hover:bg-green-200">
                                            Set a budget
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 mt-6 text-xs">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        &lt; Previous
                    </button>
                    {[...Array(totalPages)].map((_, i) => {
                        const page = i + 1;
                        return (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 border rounded ${
                                    currentPage === page
                                        ? "bg-blue-500 text-white"
                                        : "hover:bg-gray-100"
                                }`}
                            >
                                {page}
                            </button>
                        );
                    })}
                    <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Next &gt;
                    </button>
                </div>
            </main>
        </div>
    );
}
