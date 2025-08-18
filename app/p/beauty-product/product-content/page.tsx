// app/influencers/page.jsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { Trash2, Pencil, X } from "lucide-react";

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
];


export default function InfluencersPage() {
    const [currentPage, setCurrentPage] = useState(1);
    interface Person {
        name: string;
        username: string;
        role: string;
        invitation: string;
        status: string;
        avatar: string;
        productLink?: string;
        type?: string;
        noOfPost?: string;
        deadline?: string;
    }

    const [selectedPerson, setSelectedPerson] = useState<Person | null>(null); // For modal
    const rowsPerPage = 10;

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
                                <th className="p-3">Role</th>
                                <th className="p-3">Invitation</th>
                                <th className="p-3">Status</th>
                                <th className="p-3 w-12"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((person, idx) => (
                                <tr key={idx} className="border-b hover:bg-gray-50">
                                    {/* Edit Icon */}
                                    <td className="p-4 text-gray-400 hover:text-blue-500 cursor-pointer">
                                        <button onClick={() => setSelectedPerson(person)}>
                                            <Pencil size={18} />
                                        </button>
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
                                        <span className="text-purple-700 bg-purple-200 px-2 py-1 rounded-full text-xs">
                                            {person.invitation}
                                        </span>
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

                <div className="flex justify-center text-gray-600 items-center gap-2 mt-6 text-xs">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        &lt; Previous
                    </button>

                    {(() => {
                        const pages = [];
                        const maxVisible = 4;
                        if (totalPages <= maxVisible) {
                            for (let i = 1; i <= totalPages; i++) {
                                pages.push(i);
                            }
                        } else {
                            if (currentPage <= 3) {
                                pages.push(1, 2, 3, "...", totalPages);
                            } else if (currentPage >= totalPages - 2) {
                                pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
                            } else {
                                pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
                            }
                        }

                        return pages.map((page, idx) => (
                            <button
                                key={idx}
                                onClick={() => typeof page === "number" && setCurrentPage(page)}
                                disabled={page === "..."}
                                className={`px-3 py-1 border rounded 
                                    ${currentPage === page ? "bg-blue-500 text-white" : "hover:bg-gray-100"} 
                                    ${page === "..." ? "cursor-default" : ""}`}
                            >
                                {page}
                            </button>
                        ));
                    })()}

                    <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Next &gt;
                    </button>
                </div>
            </main>

            {/* Modal */}
            {/* Modal */}
            {selectedPerson && (
                <div className="fixed inset-0 text-black bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={() => setSelectedPerson(null)}
                        >
                            <X size={18} />
                        </button>

                        <h2 className="text-lg font-bold mb-6">Edit Campaign</h2>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Product detail */}
                            <div>
                                <label className="text-sm text-gray-600">Product detail</label>
                                <input
                                    type="file"
                                    className="w-full border rounded px-3 py-2 mt-1"
                                />
                            </div>

                            {/* Product link */}
                            <div>
                                <label className="text-sm text-gray-600">Product link</label>
                                <input
                                    type="text"
                                    defaultValue={selectedPerson.productLink}
                                    className="w-full border rounded px-3 py-2 mt-1"
                                />
                            </div>

                            {/* Type */}
                            <div>
                                <label className="text-sm text-gray-600">Type</label>
                                <input
                                    type="text"
                                    defaultValue={selectedPerson.type}
                                    className="w-full border rounded px-3 py-2 mt-1"
                                />
                            </div>

                            {/* No of post */}
                            <div>
                                <label className="text-sm text-gray-600">No of post</label>
                                <input
                                    type="text"
                                    defaultValue={selectedPerson.noOfPost}
                                    className="w-full border rounded px-3 py-2 mt-1"
                                />
                            </div>

                            {/* Guidelines & Instructions */}
                            <div>
                                <label className="text-sm text-gray-600">Guidelines & Instructions</label>
                                <input
                                    type="file"
                                    className="w-full border rounded px-3 py-2 mt-1"
                                />
                            </div>

                            {/* Deadline */}
                            <div>
                                <label className="text-sm text-gray-600">Deadline</label>
                                <input
                                    type="text"
                                    defaultValue={selectedPerson.deadline}
                                    className="w-full border rounded px-3 py-2 mt-1"
                                />
                            </div>

                            {/* Status (full width) */}
                            <div className="col-span-2">
                                <label className="text-sm text-gray-600">Status</label>
                                <input
                                    type="text"
                                    defaultValue={selectedPerson.status}
                                    className="w-full border rounded px-3 py-2 mt-1"
                                />
                            </div>
                        </div>

                        {/* Save Button */}
                        <div className="flex justify-center mt-6">
                            <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded-full shadow hover:from-blue-700 hover:to-blue-500">
                                Set
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
