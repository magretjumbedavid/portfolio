
import { Link, Mail, MapPin, User } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-6 pt-17 bg-gray-50" id="contact text-color">
      <div className="max-w-5xl mx-auto">
    
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-3">
            Reach out me
          </h2>
          <p className="text-gray-600 text-lg">
            Let&apos;s get in touch through the following:
          </p>
          <p className="text-orange-600 font-medium text-xl mt-2">contact me</p>
        </div>

       
        <div className="grid md:grid-cols-2 gap-12 items-start">
        
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none transition text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none transitione text-black"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none transition text-black"
            />
          </div>

         
          <div className="space-y-6">
            <textarea
              placeholder="Message..."
              rows={6}
              className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none transition resize-none text-black"
            ></textarea>
        <a
           href="mailto:magretjumbedavid@gmail.com"
           className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 inline-block text-center"
         role="button">

          Send message
       </a>

          </div>
        </div>

        
         

        <div className=" bg-gradient-to-r from-orange-400 to-orange-500 text-white pb-10  pr-20 pl-3 rounded-t-3xl w-300 h-77 ml-[-80px]" >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left px-6">
           
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div>
                <p className="font-semibold mt-30">Name</p>
                <p className="text-orange-100">Magret David</p>
              </div>
            </div>

         
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div>
                <p className="font-semibold mt-30">Location</p>
                <p className="text-orange-100">Blantyre, Malawi</p>
              </div>
            </div>

            
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div>
                <p className="font-semibold mt-30">Email</p>
                <p className="text-orange-100 break-words">magretjumbedavid@gmail.com</p>
              </div>
            </div>
          </div>

          
          <div className="text-center mt-80 text-orange-100 text-sm">
            Created by Magret | © 2025 All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}