// components/SearchSortBar.js
import { useState } from "react";
import Link from 'next/link';

export default function SearchSortBar() {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("Name");

    return (
        <div className="flex items-center justify-between w-full py-12 px-4 text-gray-400">
            {/* Left side: Search + Sort */}
            <div className="flex items-center gap-3">
                {/* Search Box */}
                <div className="flex items-center border rounded-full px-2 w-90">
                    <svg
                        className="w-4 h-4 text-gray-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="outline-none p-1 text-sm w-full"
                    />
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center  text-sm">
                    <span className="mr-3 text-gray-600">Sort by</span>
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="border text-left rounded px-9 py-1 text-sm"
                    >
                        <option value="Name">Name</option>
                        <option value="Date">Date</option>
                    </select>
                </div>
            </div>

            {/* Right side: Button */}
            <Link
                href="/your-campaign"
                className="inline-block ml-10 px-6 py-2 text-white rounded-full bg-gradient-to-b from-[#264d99] to-[#66b3ff]  text-sm font-semibold shadow-md"
            >
                Start Campaign
            </Link>
        </div>
    );

}
