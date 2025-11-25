
import Image from "next/image";
import Link from "next/link";

export default function services() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
     
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-12">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
          <div className="bg-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-orange-700 mb-4">
              Malipoflex
            </h3>
            <p className="text-gray-700 leading-relaxed">
              I started a project called MalipoFlex designed to empower informal sector workers by providing them with opportunities to participate in pension schemes, access loans, and save money securely through an easy-to-use digital system.
            </p>
             <Link
              href="https://malipoflex.vercel.app/"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-colors"
            >
              <span className="text-sm text-white">
               Information website
              </span>
            </Link>
          </div>

          
          <div className="bg-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-orange-700 mb-4">
              FuelFlash
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Built Fuel Flash, an SMS and USSD-based alert system that notifies fuel customers in Rwanda about real-time fuel prices, enhancing pricing transparency and informed decision-making.
            </p>
            <Link
              href="https://fuel-flash-informational.vercel.app/"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-colors"
            >
              <span className="text-sm text-white">
               Information website
              </span>
            </Link>
          </div>

          <div className="bg-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-orange-700 mb-4">
              Projects
            </h3>
            <h4 className="text-xl font-medium text-orange-600 mb-3">
              Mitumbasales
            </h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Built Mitumbasales project aimed at solving the trust menace in the Dandora dumpsite in Kenya by connecting the traders and consumers.
            </p>
            <Link
              href="https://mitumbaesales.vercel.app/login"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-colors"
            >
              <span className="text-sm text-white">
                Mitumbasales Dashboard
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}