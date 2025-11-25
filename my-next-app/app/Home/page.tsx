import Image from 'next/image';
import Link from 'next/link';

export default function Homes() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
    
      <nav className="bg-amber-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
         
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-amber-900 tracking-wide">
                Portfolio
              </span>
            </div>

          
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/Home"
                  className="text-amber-900 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-amber-200/50"
                >
                  Home
                </Link>
                <Link
                  href="/Skills"
                  className="text-amber-900 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-amber-200/50"
                >
                  Skills
                </Link>
                <Link
                  href="/Services"
                  className="text-amber-900 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-amber-200/50"
                >
                  Services
                </Link>
                <Link
                  href="/About"
                  className="text-amber-900 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-amber-200/50"
                >
                  About
                </Link>
                <Link
                  href="/Contact"
                  className="text-amber-900 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-amber-200/50"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

     
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
     
        <Image
          src="/images/profile.jpg"  
          alt="Magret Jumbe David"
          fill
          
          priority
          quality={95}
          className='z-1 object-cover object-center'
        />

      
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-amber-400 drop-shadow-2xl tracking-tight">
            Magret Jumbe David
          </h1>
          <p className="mt-4 text-2xl md:text-4xl text-white font-semibold drop-shadow-lg">
            Software Developer
          </p>
          <p className="mt-6 text-lg md:text-xl text-amber-200 max-w-2xl mx-auto">
            Passionate about building innovative solutions to solve real-world problems
          </p>
        </div>

        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-amber-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}