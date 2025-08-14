"use client"
import Link from "next/link";
import SearchSortBar from "@/components/SearchSortBar";

export default function YourCampaignPage() {
    const campaigns = [
        { name: "Beauty product", start: "28/12/2024", influencers: 58, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "Active" },
        { name: "Beauty product", start: "28/12/2024", influencers: 78, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "Active" },
        { name: "Beauty product", start: "28/12/2024", influencers: 55, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 60, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 20, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 28, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 75, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 60, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 40, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 40, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 40, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 40, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 40, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 40, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "Active" },
    ];

    return (
        <div className="min-h-screen  w-full bg-white py-10 px-6">
            <div className="w-[94rem] mx-auto">
                <SearchSortBar />

                <div className="p-8">
                    <h1 className="text-xl font-semibold mb-6 text-black">All campaigns</h1>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead className="bg-gray-50 text-left text-gray-500">
                                <tr>
                                    <th className="p-3">Campaign Name</th>
                                    <th className="p-3">Start date</th>
                                    <th className="p-3">No of Influencers</th>
                                    <th className="p-3">Reach</th>
                                    <th className="p-3">Impression</th>
                                    <th className="p-3">Platform</th>
                                    <th className="p-3">Budget</th>
                                    <th className="p-3">No of Posts</th>
                                    <th className="p-3">Spent</th>
                                    <th className="p-3">Ends</th>
                                    <th className="p-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {campaigns.map((c, i) => (
                                    <tr key={i} className="border-b text-gray-500   hover:bg-gray-50">
                                        <td className="p-5">
                                            <Link
                                                href={`/p/${c.name.toLowerCase().replace(/\s+/g, "-")}`}
                                                className="text-gray-500 hover:underline"
                                            >
                                                {c.name}
                                            </Link>
                                        </td>
                                        <td className="p-5">{c.start}</td>
                                        <td className="p-5">{c.influencers}</td>
                                        <td className="p-5">{c.reach}</td>
                                        <td className="p-5">{c.impression}</td>
                                        <td className="p-5">{c.platform}</td>
                                        <td className="p-5">{c.budget}</td>
                                        <td className="p-5">{c.posts}</td>
                                        <td className="p-5">{c.spent}</td>
                                        <td className="p-5">{c.end}</td>
                                        <td className="p-5">
                                            <span
                                                className={`px-2 py-1 text-xs rounded-full ${c.status === "Active"
                                                    ? "bg-green-100 text-green-600"
                                                    : "bg-red-100 text-red-600"
                                                    }`}
                                            >
                                                {c.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}