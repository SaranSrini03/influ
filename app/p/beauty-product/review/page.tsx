// app/influencers/page.jsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { Download, Trash2 } from "lucide-react";

const data = [
    { name: "Olivia Rhye", username: "@olivia", role: "Product Designer", invitation: "Send invitation", status: "Done", avatar: "/avatars/olivia.jpg", contentType: "Reels", noOfPosts: 5 },
    { name: "Phoenix Baker", username: "@phoenix", role: "Product Manager", invitation: "Send invitation", status: "Accepted", avatar: "/avatars/phoenix.jpg", contentType: "Reels", noOfPosts: 3 },
    { name: "Lana Steiner", username: "@lana", role: "Frontend Developer", invitation: "Send invitation", status: "Pending", avatar: "/avatars/lana.jpg", contentType: "Reels", noOfPosts: 2 },
    { name: "Demi Wilkinson", username: "@demi", role: "Backend Developer", invitation: "Send invitation", status: "Pending", avatar: "/avatars/demi.jpg", contentType: "Reels", noOfPosts: 4 },
    { name: "Candice Wu", username: "@candice", role: "Fullstack Developer", invitation: "Send invitation", status: "Accepted", avatar: "/avatars/candice.jpg", contentType: "Reels", noOfPosts: 6 },
    { name: "Natali Craig", username: "@natali", role: "UX Designer", invitation: "Invited", status: "Pending", avatar: "/avatars/natali.jpg", contentType: "Reels", noOfPosts: 1 },
    { name: "Drew Cano", username: "@drew", role: "UX Copywriter", invitation: "Invited", status: "Done", avatar: "/avatars/drew.jpg", contentType: "Reels", noOfPosts: 3 },
    { name: "Orlando Diggs", username: "@orlando", role: "UI Designer", invitation: "Send invitation", status: "Accepted", avatar: "/avatars/orlando.jpg", contentType: "Reels", noOfPosts: 7 },
    { name: "Andi Lane", username: "@andi", role: "Product Manager", invitation: "Invited", status: "Pending", avatar: "/avatars/andi.jpg", contentType: "Reels", noOfPosts: 2 },
    { name: "Kate Morrison", username: "@kate", role: "QA Engineer", invitation: "Send invitation", status: "Accepted", avatar: "/avatars/kate.jpg", contentType: "Reels", noOfPosts: 4 },
    { name: "John Smith", username: "@john", role: "QA Engineer", invitation: "Send invitation", status: "Pending", avatar: "/avatars/kate.jpg", contentType: "Reels", noOfPosts: 3 },
    { name: "Jane Doe", username: "@jane", role: "Frontend Developer", invitation: "Send invitation", status: "Done", avatar: "/avatars/kate.jpg", contentType: "Reels", noOfPosts: 5 },
    { name: "Jane Doe", username: "@jane", role: "Frontend Developer", invitation: "Send invitation", status: "Accepted", avatar: "/avatars/kate.jpg", contentType: "Reels", noOfPosts: 5 },
    { name: "Jane Doe", username: "@jane", role: "Frontend Developer", invitation: "Send invitation", status: "Accepted", avatar: "/avatars/kate.jpg", contentType: "Reels", noOfPosts: 5 },
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
          <th className="p-3">Influencer Name</th>
          <th className="p-3">Status</th>
          <th className="p-3">Content type</th>
          <th className="p-3">No of posts</th>
          <th className="p-3">Approval</th>
          <th className="p-3">Submitted posts</th>
        </tr>
      </thead>
      <tbody>
        {currentData.map((person, idx) => (
          <tr key={idx} className="border-b hover:bg-gray-50">
            {/* Influencer Name */}
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

            {/* Status */}
            <td className="p-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  person.status === "Done"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {person.status}
              </span>
            </td>

            {/* Content Type */}
            <td className="p-3 text-gray-700">{person.contentType}</td>

            {/* No of Posts */}
            <td className="p-3 text-gray-700">{person.noOfPosts}</td>

            {/* Approval Buttons */}
            <td className="p-3 flex gap-2">
              <button className="px-3 py-1 rounded-full bg-red-500 text-white text-xs font-medium hover:bg-red-600">
                Accept
              </button>
              <button className="px-3 py-1 rounded-full bg-red-500 text-white text-xs font-medium hover:bg-red-600">
                Reject
              </button>
            </td>

            {/* Submitted Posts Download */}
            <td className="p-3">
              <button className="text-gray-500 hover:text-black">
                <Download size={18} />
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
