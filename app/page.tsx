import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-black text-3xl font-bold mb-2">
          Welcome to Influencer Campaign!
        </h1>
        <p className="text-gray-600 lg:w-200 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <img
          src="/assests/image1.jpg"
          alt="Campaign Visual"
          className="mx-auto  max-w-full  mb-6"
        />
        <Link
          href="/how-it-works"
          className="inline-flex items-center gap-2 ml-4 px-5 py-2 text-white text-sm font-semibold rounded-full bg-gradient-to-b from-[#264d99] to-[#66b3ff] shadow-md hover:opacity-90 transition"
        >
          Let's start
          <span className="flex items-center justify-center w-6 h-6 bg-p[#264d99] border border-white  rounded-full">
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
