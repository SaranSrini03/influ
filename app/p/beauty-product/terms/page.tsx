// app/influencers/page.jsx
"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function InfluencersPage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
          <h1 className="text-center text-2xl font-bold mb-6">
            Terms and Conditions
          </h1>

          {/* Scrollable Terms */}
          <div className="max-h-[100vh] overflow-y-auto pr-2 text-gray-700 text-sm leading-relaxed whitespace-pre-line">
            {`These Terms and Conditions ("Agreement") govern the collaboration between [Brand Name] ("Brand") and [Influencer Name] ("Influencer") for the campaign titled [Campaign Name]. The Influencer agrees to create and publish content, including posts, videos, or stories, as specified by the Brand, while adhering to the provided guidelines and including required elements such as hashtags, tags, captions, and product links. All content drafts must be submitted for the Brand’s review and approval prior to publication, and the Brand reserves the right to request revisions or reject any content that does not meet campaign objectives. The Influencer will ensure timely submission of drafts and publication of approved content by the agreed deadlines. Compensation for the campaign will be [Insert Payment Details], with payments processed within [X days] after approval or completion. Performance metrics such as reach, impressions, and engagement rates will be tracked by the Brand, and the Influencer agrees to provide necessary access or reports. Confidentiality regarding all campaign-related information, including the Brand and products, must be maintained, and any unauthorized disclosures are prohibited. The Brand may terminate this Agreement if deadlines, deliverables, or guidelines are not met, and unapproved or unused content cannot be published by the Influencer without authorization. Content created for the campaign may be used by the Brand for promotional purposes, as agreed. The Influencer indemnifies the Brand against any claims arising from unauthorized or misleading content. Both parties agree to act professionally and cooperatively, with the Agreement governed by the laws of [Insert Jurisdiction]. By accepting these terms, both parties confirm their understanding and consent to the conditions outlined in this Agreement.`}
          </div>
        </div>
      </div>
    </div>
  );
}
