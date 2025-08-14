// app/influencers/page.jsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { Trash2 } from "lucide-react";

const data = [
    { name: "Olivia Rhye", username: "@olivia", role: "Product Designer", invitation: "Send invitation", status: "Accepted", avatar: "/avatars/olivia.jpg" },
    { name: "Phoenix Baker", username: "@phoenix", role: "Product Manager", invitation: "Send invitation", status: "Accepted", avatar: "/avatars/phoenix.jpg" },
    { name: "Lana Steiner", username: "@lana", role: "Frontend Developer", invitation: "Send invitation", status: "Pending", avatar: "/avatars/lana.jpg" },
    { name: "Demi Wilkinson", username: "@demi", role: "Backend Developer", invitation: "Send invitation", status: "Pending", avatar: "/avatars/demi.jpg" },
    { name: "Candice Wu", username: "@candice", role: "Fullstack Developer", invitation: "Send invitation", status: "Accepted", avatar: "/avatars/candice.jpg" },
    { name: "Natali Craig", username: "@natali", role: "UX Designer", invitation: "Invited", status: "Pending", avatar: "/avatars/natali.jpg" },
    { name: "Drew Cano", username: "@drew", role: "UX Copywriter", invitation: "Invited", status: "Pending", avatar: "/avatars/drew.jpg" },
    { name: "Orlando Diggs", username: "@orlando", role: "UI Designer", invitation: "Send invitation", status: "Accepted", avatar: "/avatars/orlando.jpg" },
    { name: "Andi Lane", username: "@andi", role: "Product Manager", invitation: "Invited", status: "Pending", avatar: "/avatars/andi.jpg" },
    { name: "Kate Morrison", username: "@kate", role: "QA Engineer", invitation: "Send invitation", status: "Accepted", avatar: "/avatars/kate.jpg" },
    { name: "John Smith", username: "@john", role: "QA Engineer", invitation: "Send invitation", status: "Pending", avatar: "/avatars/kate.jpg" },
    { name: "Jane Doe", username: "@jane", role: "Frontend Developer", invitation: "Send invitation", status: "Accepted", avatar: "/avatars/kate.jpg" },
    { name: "Jane Doe", username: "@jane", role: "Frontend Developer", invitation: "Send invitation", status: "Accepted", avatar: "/avatars/kate.jpg" },
    { name: "Jane Doe", username: "@jane", role: "Frontend Developer", invitation: "Send invitation", status: "Accepted", avatar: "/avatars/kate.jpg" },
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
            {/* Sidebar */}

            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 p-6">
                <div className="overflow-x-auto border rounded-lg">
                    <table className="w-full border-collapse">
                        <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                            <tr className="text-left">
                                <th className="p-3 w-10"></th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Role</th>
                                <th className="p-3">Invitation</th>
                                <th className="p-3">Status</th>
                                <th className="p-3 w-12"></th>
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
                                    <td className="p-3 text-gray-700">{person.role}</td>
                                    <td className="p-3">
                                        {person.invitation === "Send invitation" ? (
                                            <span className="text-blue-600 cursor-pointer hover:underline">
                                                {person.invitation}
                                            </span>
                                        ) : (
                                            <span className="text-gray-500">{person.invitation}</span>
                                        )}
                                    </td>
                                    <td className="p-3">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs ${person.status === "Accepted"
                                                ? "bg-green-100 text-green-600"
                                                : "bg-yellow-100 text-yellow-600"
                                                }`}
                                        >
                                            {person.status}
                                        </span>
                                    </td>

                                    <td className="p-3 text-right">
                                        <button className="text-gray-400 hover:text-red-500">
                                            <Trash2 size={18} />
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
                                className={`px-3 py-1 border rounded ${currentPage === page ? "bg-blue-500 text-white" : "hover:bg-gray-100"
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
