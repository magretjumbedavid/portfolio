
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-6">
      <div className="">
     
        <h1 className="text-center text-4xl md:text-5xl font-bold text-purple-900 mb-12">
          Who am I?
        </h1>

        <div className="bg-white-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          
            <div className="flex-shrink-0  ">
              <div className=" ml-[]">
                <Image
                  src="/images/profile.jpg"
                  alt="Magret Jambe David"
                  width={192}
                  height={192}
                  className=""
                  priority
                />
              </div>
            </div>

          
            <div className="flex-1 text-center md:text-left">
         
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              
              </h2>
              <p className="text-lg text-purple-600 font-medium mt-1">
                
              </p>

              
              <p className=" text-gray-700 leading-relaxed">
                My name is Magret Jumbe David, a software engineer with a passion for building scalable, user-centric solutions that solve real-world problems. I specialize in full-stack web development, leveraging technologies like JavaScript (React, Node.js), Python (Django).
 I've contributed to projects ranging from e-commerce platform and ussd and sms platform to data-driven dashboards for local startups. My journey began with a Diploma in iformation technology from AkiraChix, where I honed my skills. Since then, I've worked with teams to deploy production-ready code, optimize performance, and for enhanced user experiences.


              </p>

              
              <p className="mt-6 text-gray-700 leading-relaxed">
                I am eager to gain hands-on experience in a dynamic work environment, where I can apply and further develop my skills. 
                I am highly motivated and enthusiastic about contributing my abilities, as well as my willingness to tackle new challenges and 
                learn from them. I believe that embracing new opportunities for growth will enable me to make a meaningful impact while 
                continuously improving both my technical and interpersonal competencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}