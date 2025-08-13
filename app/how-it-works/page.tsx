import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Top Right Button */}
        <div className="flex justify-end mb-20">
          <Link
            href="/campaign"
            className="inline-block px-6 py-2 text-white rounded-full bg-gradient-to-b from-[#264d99] to-[#66b3ff]  text-sm font-semibold shadow-md"
          >
            Your Campaign
          </Link>
        </div>

        {/* Welcome Heading */}
        <div className="mb-22">
          <h1 className="text-3xl font-bold">Welcome to new start of your growth!</h1>
        </div>

        {/* How it Works Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-2">How it works ?</h2>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Nunc neque tincidunt urna enim blandit vitae.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {[
            { color: 'bg-purple-600' },
            { color: 'bg-orange-400' },
            { color: 'bg-yellow-400' },
            { color: 'bg-green-500' },
          ].map((step, i) => (
            <div key={i} className="flex flex-col text-left">
              <span className={`w-2 h-2 rounded-full ${step.color} mb-4`}></span>
              <hr className="w-full max-w-[80%] border-t border-gray-100 mb-4" />
              <h3 className="text-sm font-semibold text-gray-500 mb-1">{`Step 0${i + 1}`}</h3>
              <h4 className="font-semibold mb-1">Heading goes here</h4>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur. Quis in vitae fringilla aliquet viverra eget eu.
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-32">
          <Link
            href="/create-a-campaign-1"
            className="inline-block px-10 py-2 text-white rounded-full bg-gradient-to-b from-[#264d99] to-[#66b3ff]  text-sm font-semibold shadow-md"
          >
            Create a Campaign
          </Link>
        </div>
      </div>
    </div>
  );
}
