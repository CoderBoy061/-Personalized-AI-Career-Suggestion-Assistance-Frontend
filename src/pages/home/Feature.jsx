import Navbar from "@/components/helpers/Navbar";
import { Button } from "@/components/ui/button"; // Import shadcn/ui Button component
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"; // Import shadcn/ui Card components

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 to-purple-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow container mx-auto px-6 py-12 mt-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Features
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the powerful tools and resources we offer to help you find your dream career path.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Card className="hover:scale-105 transition-transform duration-300 cursor-pointer">
            <CardHeader>
              <img
                src="https://via.placeholder.com/400x200" // Replace with your image URL
                alt="Personalized Career Suggestions"
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <CardTitle className="mt-4">Personalized Career Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get tailored career recommendations based on your skills, interests, and goals.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="hover:scale-105 transition-transform duration-300 cursor-pointer">
            <CardHeader>
              <img
                src="https://via.placeholder.com/400x200" // Replace with your image URL
                alt="Skill Assessments"
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <CardTitle className="mt-4">Skill Assessments</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Take skill assessments to identify your strengths and areas for improvement.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="hover:scale-105 transition-transform duration-300 cursor-pointer">
            <CardHeader>
              <img
                src="https://via.placeholder.com/400x200" // Replace with your image URL
                alt="Expert Guidance"
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <CardTitle className="mt-4">Expert Guidance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Connect with career experts for personalized advice and mentorship.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature 4 */}
          <Card className="hover:scale-105 transition-transform duration-300 cursor-pointer">
            <CardHeader>
              <img
                src="https://via.placeholder.com/400x200" // Replace with your image URL
                alt="Job Market Insights"
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <CardTitle className="mt-4">Job Market Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Stay updated with the latest trends and opportunities in the job market.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature 5 */}
          <Card className="hover:scale-105 transition-transform duration-300 cursor-pointer">
            <CardHeader>
              <img
                src="https://via.placeholder.com/400x200" // Replace with your image URL
                alt="Resume Builder"
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <CardTitle className="mt-4">Resume Builder</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Create professional resumes tailored to your desired career path.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature 6 */}
          <Card className="hover:scale-105 transition-transform duration-300 cursor-pointer">
            <CardHeader>
              <img
                src="https://via.placeholder.com/400x200" // Replace with your image URL
                alt="Interview Preparation"
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <CardTitle className="mt-4">Interview Preparation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Practice mock interviews and get feedback to ace your next interview.
              </CardDescription>
            </CardContent>
          </Card>
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