import React from "react";
import Image from "next/image";

function Footer() {
  const defaultImageUrl =
    "https://media.licdn.com/dms/image/v2/C4D03AQHKhXkwlry9UQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655316407125?e=2147483647&v=beta&t=4BdyGzR_3Qf6O1fYauh552uPLqUhdQ94v5NFmq7HUI0";

  return (
    <footer className="bg-gray-100 text-gray-700 py-12 px-6 md:px-12 lg:px-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-start gap-12 md:gap-8">
        <div className="flex flex-col gap-6 md:w-1/3">
          <div className="flex items-center gap-3">
            <Image
              src={defaultImageUrl}
              alt="AI-DE Logo"
              className="w-12 h-12 rounded-full object-cover"
              width={48}
              height={48}
            />
            <div>
              <h1 className="text-[#008000] font-bold text-xl">AI-DE</h1>
              <p className="text-sm text-gray-600">
                Innovating Agriculture with Intelligence
              </p>{" "}
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            AI-DE is dedicated to revolutionizing farming through artificial
            intelligence. We provide cutting-edge solutions that optimize yield,
            enhance sustainability, and connect farmers to global markets,
            ensuring a prosperous future for agriculture.
          </p>
        </div>

        <div className="md:w-1/6">
          <h1 className="text-lg font-semibold text-gray-800 mb-4">
            Learn More
          </h1>
          <ul className="space-y-2 text-sm">
            {" "}
            <li>
              <a href="#" className="hover:text-[#008000] transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#008000] transition-colors">
                Our Programs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#008000] transition-colors">
                Impact & Sustainability
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#008000] transition-colors">
                Partnerships
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#008000] transition-colors">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 md:w-1/3">
          <h1 className="text-lg font-semibold text-gray-800 mb-2">
            Get in Touch
          </h1>
          <div className="flex items-start gap-3">
            <p className="text-sm">
              123 Farmstead Lane, Green Valley, AGRI 9000, Philippines
              <br />
              Email: info@aide.com
              <br />
              Phone: +63 912 345 6789
            </p>
          </div>
          <h1 className="text-lg font-semibold text-gray-800 mb-2 mt-4">
            Connect With Us
          </h1>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-[#008000]">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-[#008000]">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-[#008000]">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-300 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} AI-DE. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
