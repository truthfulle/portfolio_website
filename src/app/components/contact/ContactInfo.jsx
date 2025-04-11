'use client';

export default function ContactInfo() {
  return (
    <div className="lg:w-1/3 bg-gray-800/50 rounded-xl border border-gray-700 p-8 flex flex-col">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-white mb-6">Let's Work Together</h2>
        <p className="text-gray-300 mb-8 text-base">
          Interested in working together or have questions? Feel free to reach out through any of these channels.
        </p>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-300 text-base">
              <span className="i-mdi-email mr-3 text-xl" />
              jonatan.wiankowski@gmail.com
            </li>
            <li className="flex items-center text-gray-300 text-base">
              <span className="i-mdi-phone mr-3 text-xl" />
              +44 07565456076
            </li>
            <li className="flex items-center text-gray-300 text-base">
              <span className="i-mdi-map-marker mr-3 text-xl" />
              Glasgow, Scotland
            </li>
          </ul>
        </div>
      </div>
      <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all text-lg">
        Download CV
      </button>
    </div>
  );
}