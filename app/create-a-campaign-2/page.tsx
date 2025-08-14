"use client";
import { useState } from "react";
import Link from "next/link";

export default function CampaignForm() {
    const [form, setForm] = useState({
        network: '',
        niche: '',
        age: '',
        location: '',
        followers: '',
        engagement: '',
        audienceMatch: '',
        influencerCount: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // const handleNext = () => {
    //     const query = new URLSearchParams(form as any).toString();
    //     router.push(`/create-a-campaign-2?${query}`);
    // };

    return (
        <div className="min-h-screen bg-white px-4 py-10 sm:px-10 text-gray-800">
            <div className="max-w-5xl mx-auto">
                {/* Top right nav link */}
                <div className="flex justify-end mb-20">
                    <Link
                        href="/your-campaign"
                        className="inline-block px-6 py-2 text-white rounded-full bg-gradient-to-b from-[#264d99] to-[#66b3ff] text-sm font-semibold shadow-md"
                    >
                        Your Campaign
                    </Link>
                </div>

                <h1 className="text-2xl sm:text-3xl font-semibold mb-10">Enter your campaign details</h1>

                {/* Form section */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { name: "network", label: "Network", options: ["Instagram, TikTok"] },
                        { name: "niche", label: "Niche", options: ["Fashion"] },
                        { name: "age", label: "Age", options: ["20-25"] },
                        { name: "location", label: "Location", options: ["Bangalore"] },
                        { name: "followers", label: "Follower count", options: ["5000 - 10000"] },
                        { name: "engagement", label: "Eng rate", options: ["5 - 10%"] },
                        { name: "audienceMatch", label: "Influencer’s Followers matches", options: ["70% female, 20-25 age"] },
                        { name: "influencerCount", label: "Number of influencers", options: ["80"] },
                    ].map((f) => (
                        <SelectField
                            key={f.name}
                            label={f.label}
                            name={f.name}
                            value={form[f.name as keyof typeof form]}
                            onChange={handleChange}
                            options={f.options}
                        />
                    ))}
                </form>

                {/* Next button */}
                <div className="flex justify-center mt-10">
                    <Link
                        href="/answers"
                        className="px-10 py-2 text-white rounded-full bg-gradient-to-b from-[#264d99] to-[#66b3ff] text-sm font-semibold shadow-md text-center"
                    >
                        Next
                    </Link>
                </div>

            </div>
        </div>
    );
}

function SelectField({
    label,
    name,
    value,
    onChange,
    options,
}: {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
}) {
    return (
        <div>
            <label className="block text-sm mb-1">{label}</label>
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="w-full bg-blue-50 px-4 py-2 rounded-md focus:outline-none focus:ring-0 focus:border-none"
            >
                <option value="">Select {label}</option>
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </div>
    );
}
