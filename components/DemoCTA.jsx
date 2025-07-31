
import Link from 'next/link';

export default function DemoCTA() {
  return (
    <>
      <section className="bg-gray-50 py-16 px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:mr-8 mb-8 md:mb-0 flex items-center">
              <div className="relative w-20 h-20 mr-6">
                <div className="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-lg opacity-20"></div>
                <div className="absolute top-2 right-0 w-8 h-4 bg-blue-400 rounded"></div>
                <div className="absolute top-8 left-4 w-12 h-10 bg-blue-300 rounded-lg flex items-center justify-center">
                    <div className="bg-gray-900 w-2 h-2 rounded-full mr-1"></div>
                    <div className="bg-gray-900 w-2 h-2 rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-xl mb-2">
                    Trade on demo — no registration is required! 
                </h3>
                <p className="text-gray-500">
                    Or register a personal account to access additional features.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/Login"
                className="bg-gray-200 border border-gray-400 text-gray-900 px-6 py-3 rounded-md text-center hover:bg-gray-300 transition-colors whitespace-nowrap flex-1"
              >
                Try demo
              </Link>
              <Link
                href="/Login"
                className="bg-green-500 text-white px-6 py-3 rounded-md text-center hover:bg-green-600 transition-colors whitespace-nowrap flex-1 font-semibold"
              >
                Register an account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
