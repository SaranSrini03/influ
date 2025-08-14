import Link from 'next/link';
import { CheckCircledIcon } from "@radix-ui/react-icons";

export default function ClarifyingSummaryPage() {
    return (
        <div className="min-h-screen w-full bg-white py-10 px-6 flex justify-center">
            <div className="max-w-3xl w-full">
                <div className="flex justify-end mb-10">
                    <Link
                        href="/your-campaign"
                        className="inline-block px-6 py-2 text-white rounded-full bg-gradient-to-b from-[#264d99] to-[#66b3ff]  text-sm font-semibold shadow-md"
                    >
                        Your Campaign
                    </Link>
                </div>
                <h1 className="text-2xl font-semibold text-black mb-10">Answer the clarifying questions</h1>

                <ul className="space-y-6">
                    {questions.map((q, index) => (
                        <li key={index} className="flex items-start justify-between">
                            <div className="w-full pr-4">
                                <label className="text-sm font-medium text-gray-900 block mb-1">
                                    {q.label}
                                </label>
                                <input
                                    type="text"
                                    placeholder={q.answer}
                                    className="w-full text-sm px-4 py-2  rounded-md focus:outline-none focus:ring-0 text-gray-400"
                                />
                            </div>
                            <CheckCircledIcon className="w-5 h-5 text-blue-500 mt-2 flex-shrink-0" />
                        </li>
                    ))}
                </ul>

                <div className="pt-10 flex justify-center">
                    <Link
                        href="/influencer"
                        className="inline-block bg-gradient-to-b from-[#264d99] to-[#66b3ff] text-white font-medium text-sm py-2 px-16 rounded-full transition-all shadow-md text-center"
                    >
                        Search
                    </Link>
                </div>
            </div>
        </div>
    );
}


const questions = [
    {
        label: "What is the main goal of this campaign?",
        answer: "e.g., brand awareness, product promotion, sales, app installs",
    },
    {
        label: "Which platform(s) should the influencer use?",
        answer: "e.g., Instagram, TikTok, YouTube Shorts, Threads, X",
    },
    {
        label: "What is your target audience’s age group and interests?",
        answer: "e.g., 18–24, interested in fitness and sustainable fashion",
    },
    {
        label: "Do you prefer influencers from a specific location or region?",
        answer: "e.g., Tier-1 cities in India, USA-based, bilingual regions",
    },
    {
        label: "What is the estimated budget or compensation per influencer?",
        answer: "e.g., ₹500 per reel, barter-only, flat ₹2,000/post",
    },
    {
        label: "What content format are you expecting from influencers?",
        answer: "e.g., 1 reel + 2 stories, review video, unboxing, UGC",
    },
    {
        label: "How many influencers are you planning to collaborate with?",
        answer: "e.g., 5, 10–20, or an ongoing pool of nano-creators",
    },
    {
        label: "What is the minimum follower count or engagement rate you prefer?",
        answer: "e.g., at least 2K followers and 5%+ engagement",
    },
    {
        label: "Do you want influencers with experience in your product niche?",
        answer: "Yes, or explain",
    },
];
