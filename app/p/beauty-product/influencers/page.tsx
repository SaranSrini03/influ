// app/influencers/page.jsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";

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
  { name: "John Smith", username: "@john", role: "QA Engineer", invitation: "Send invitation", status: "Pending",stdatus: "Pending", avatar: "/avatars/kate.jpg" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.42, 0, 0.58, 1] }, // Cubic Bezier easing
  },
};

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="overflow-x-auto border rounded-lg"
        >
          <table className="w-full border-collapse">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
              <tr className="text-left">
                <th className="p-3 w-10"></th>
                <th className="p-3">Name</th>
                <th className="p-3">Role</th>
                <th className="p-3">Invitation</th>
                <th className="p-3">Status</th>
                <th className="p-3">Status</th>
                <th className="p-3">Status</th>
                <th className="p-3 w-12"></th>
              </tr>
            </thead>

            {/* Re-mount tbody on page change to retrigger the animation */}
            <motion.tbody
              key={currentPage}
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {currentData.map((person, idx) => (
                <motion.tr
                  key={idx}
                  variants={rowVariants}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">
                    <input type="checkbox" />
                  </td>

                  <td className="p-3">
                    <div className="flex items-center gap-3">
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
                    </div>
                  </td>

                  <td className="p-3 text-gray-700">{person.role}</td>

                  <td className="p-3">
                    {person.invitation === "Send invitation" ? (
                      <span className="text-purple-700 bg-purple-200 px-2 py-1 rounded-full text-xs">
                        {person.invitation}
                      </span>
                    ) : (
                      <span className="text-purple-700 bg-purple-200 px-2 py-1 rounded-full text-xs">
                        {person.invitation}
                      </span>
                    )}
                  </td>

                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        person.status === "Accepted"
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
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>

        {/* Pagination */}
        <div className="flex justify-center text-gray-600 items-center gap-2 mt-6 text-xs">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            &lt; Previous
          </button>

          {/* Page Numbers with Ellipsis */}
          {(() => {
            const pages = [];
            const maxVisible = 4; // Number of pages to show before ellipsis
            if (totalPages <= maxVisible) {
              for (let i = 1; i <= totalPages; i++) pages.push(i);
            } else {
              if (currentPage <= 3) pages.push(1, 2, 3, "...", totalPages);
              else if (currentPage >= totalPages - 2)
                pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
              else
                pages.push(
                  1,
                  "...",
                  currentPage - 1,
                  currentPage,
                  currentPage + 1,
                  "...",
                  totalPages
                );
            }

            return pages.map((page, idx) => (
              <button
                key={idx}
                onClick={() => typeof page === "number" && setCurrentPage(page)}
                disabled={page === "..."}
                className={`px-3 py-1 border rounded ${
                  currentPage === page ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                } ${page === "..." ? "cursor-default" : ""}`}
              >
                {page}
              </button>
            ));
          })()}

          {/* Next Button */}
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
