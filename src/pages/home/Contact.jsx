import Navbar from "@/components/helpers/Navbar";
import { Button } from "@/components/ui/button"; // Import shadcn/ui Button component
import { Input } from "@/components/ui/input"; // Import shadcn/ui Input component
import { Textarea } from "@/components/ui/textarea"; // Import shadcn/ui Textarea component

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 to-purple-50">
    {/* Navbar */}
    <Navbar />
  
    {/* Main Content */}
    <div className="flex-grow container mx-auto px-6 py-12 mt-10">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Contact Us
      </h1>
  
      {/* Grid Layout for Form and Map */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <Input
                type="text"
                placeholder="Enter your name"
                className="w-full"
              />
            </div>
  
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
              />
            </div>
  
            {/* Message Textarea */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <Textarea
                placeholder="Enter your message"
                className="w-full"
                rows={5}
              />
            </div>
  
            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Send Message
            </Button>
          </form>
        </div>
  
        {/* Map and Contact Info */}
        <div className="space-y-8">
          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-lg shadow-lg h-64 flex items-center justify-center">
            <p className="text-gray-600">Map Placeholder</p>
          </div>
  
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-gray-700">123 Career Path, New York, USA</p>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p className="text-gray-700">+1 (123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-gray-700">info@careerpath.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Additional Content to Make Page Scrollable */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          More About Us
        </h2>
        <p className="text-gray-700 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
    </div>
  
    {/* Footer */}
    <footer className="bg-white py-8 mt-auto">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600">
          &copy; 2024 CareerPath. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
  );
}