import { useState } from "react"; // Import useState for handling mobile menu state
import { Button } from "@/components/ui/button"; // Import shadcn/ui Button component
import { Link } from "react-router-dom"; // Import Link component from react-router-dom

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">CareerPath</div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/features" className="text-gray-700 hover:text-blue-600">
            Features
          </Link>
          <Link
            to="/testimonials"
            className="text-gray-700 hover:text-blue-600"
          >
            Testimonials
          </Link>

          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>

          {/* <a href="#" className="text-gray-700 hover:text-blue-600">
            Features
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Testimonials
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Contact
          </a> */}
        </div>

        {/* Login Button (Desktop) */}
        <Button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white">
          Login
        </Button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Features
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Testimonials
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Login
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
