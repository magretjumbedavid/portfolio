'use client';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-5xl mx-auto text-center">
    
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What I have
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          My creative skills & experiences.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-10">
          As an entry level developer in the tech industry, I have developed a diverse set of creative skills that have been invaluable in my work. Here's a brief overview of my creative abilities and experiences.
        </p>

      
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          View more
          <ArrowRight className="w-5 h-5" />
        </button>

      
        {isExpanded && (
          <div className="mt-12 text-left bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="text-lg leading-8 text-gray-700">
              "As an aspiring software engineer with a diploma in Information Technology, I have hands-on experience building both web and mobile applications. I work with technologies such as{' '}
              <strong>React, Next.js, Tailwind CSS, Django, and Kotlin</strong> to develop responsive user interfaces and reliable backends. I have developed projects like{' '}
              <strong>MitumbaeSales</strong>, a mobile app that connects traders and customers, and{' '}
              <strong>MalipoFlex</strong>, a system that supports savings and loans for informal workers. Through these projects, I have strengthened my skills in API integration, database design, testing with tools like Cypress, and collaborative development using Git. I am eager to apply these skills in a professional environment."
            </p>
             <Link
              href="https://docs.google.com/document/d/1NzibZ2RBqWzYkkSTuxWH13pbCIF0c9-x742ruIY-TZE/edit?tab=t.0#heading=h.p5iph25erbex"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-colors"
            >
              <span className="text-sm text-white">
               CV
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}