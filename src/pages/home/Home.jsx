
import Navbar from "@/components/helpers/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"; // Import shadcn/ui Card components

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-20"> {/* Add padding-top to account for the fixed Navbar */}
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Dream Career Path
          </h1>
          <p className="text-gray-600 mb-8">
            Get personalized career suggestions, skill assessments, and guidance to achieve your goals.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
              Get Started
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 cursor-pointer">
              Learn More
            </Button>
          </div>
          <div className="mt-12">
            <img
              src="https://placehold.co/600x400/orange/white" // Replace with your hero image
              alt="Career Path"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>

        {/* Featured Content Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Card>
                <CardHeader>
                  <CardTitle>Personalized Career Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Get tailored career recommendations based on your skills, interests, and goals.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card>
                <CardHeader>
                  <CardTitle>Skill Assessments</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Take skill assessments to identify your strengths and areas for improvement.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card>
                <CardHeader>
                  <CardTitle>Expert Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Connect with career experts for personalized advice and mentorship.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 italic">
                    "CareerPath helped me discover my true potential and guided me toward a fulfilling career."
                  </p>
                  <div className="mt-4 flex items-center">
                    <img
                      src="https://placehold.co/40" // Replace with user avatar
                      alt="User"
                      className="rounded-full"
                    />
                    <div className="ml-3">
                      <p className="font-bold">John Doe</p>
                      <p className="text-sm text-gray-500">Software Engineer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 italic">
                    "The skill assessments were eye-opening, and the career suggestions were spot on!"
                  </p>
                  <div className="mt-4 flex items-center">
                    <img
                      src="https://placehold.co/40"  // Replace with user avatar
                      alt="User"
                      className="rounded-full"
                    />
                    <div className="ml-3">
                      <p className="font-bold">Jane Smith</p>
                      <p className="text-sm text-gray-500">Data Scientist</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 italic">
                    "I highly recommend CareerPath to anyone looking for career guidance."
                  </p>
                  <div className="mt-4 flex items-center">
                    <img
                      src="https://placehold.co/40" // Replace with user avatar
                      alt="User"
                      className="rounded-full"
                    />
                    <div className="ml-3">
                      <p className="font-bold">Alex Johnson</p>
                      <p className="text-sm text-gray-500">Product Manager</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-600">
              &copy; 2024 CareerPath. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}