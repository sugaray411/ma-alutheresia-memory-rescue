import { Card, CardContent } from "../components/ui/card";
import { Heart, Users, Activity, Brain, Shield } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Welcome to{" "}
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Ma Alu Theresia Memory Rescue
                  </span>{" "}
                  and Glitter of Hope Health Inc.(M&G Hope Health Inc.)
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                  A non-profit organization dedicated to supporting individuals
                  and families affected by memory loss, related cognitive
                  impairment, and cardiovascular health issues through
                  charitable initiatives and community-driven programs.
                </p>
              </div>

              <p className="text-lg text-blue-200">
                We believe that everyone deserves to live with dignity and
                purpose, regardless of their health challenges. Our mission is
                to provide innovative programs, education, support, and
                resources to address these challenges using holistic,
                non-pharmacological approaches.
              </p>

              <p className="text-lg font-semibold text-yellow-300 mb-2">
                Our Approach:
              </p>
              <p className="text-blue-100">
                We use innovative, holistic, and non-pharmacological approaches
                to achieve our mission. (Discovery conference February 18, 2019
                Preview).
              </p>
            </div>
            {/* <-- Close grid column for text content */}

            <div className="relative w-full">
              <div className="relative z-10 w-full">
                <img
                  src="/images/aa.jpeg"
                  alt="Two elderly Black men playing balloon volleyball indoors - Eric Nvenge and James Leroy Ivey engaging in joyful activity"
                  className="rounded-2xl shadow-2xl w-full h-auto min-h-[500px] object-cover mx-auto hover-lift"
                />
                <div className="mt-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-sm text-gray-700 italic leading-relaxed">
                    The image above captures a heartwarming moment between
                    Resident Agent Eric Nvenge of Ma AluTheresia Memory Rescue
                    and Glitter of Hope Health Inc. and his friend, the late
                    James Leroy Ivey, as they played a fun game of balloon
                    volleyball. This activity was part of our personal efforts
                    to enhance our physical, social, emotional, and mental
                    wellbeing, which proved to be incredibly rewarding. We
                    cherish this memory as a tribute to James Leroy Ivey
                    (1928-2023), whose kindness and generosity touched many
                    lives.
                  </p>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-3xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Join Us
            </span>
          </h2>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200/50">
            <p className="text-xl text-gray-700 leading-relaxed">
              We're committed to making a difference in the lives of individuals
              and families affected by memory loss, cognitive impairment, and
              cardiovascular health issues. Join us in our mission to provide
              support, resources, and community engagement. Together, we can
              enhance the quality of life for those affected and create a more
              compassionate and supportive community. Please be part of our
              mission to bring joy and health.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Expected Outcomes and Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We focus on comprehensive support through innovative,
              community-driven approaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Improved Cognitive and Cardiovascular Health
                </h3>
                <p className="text-gray-600">
                  Enhanced wellbeing outcomes among program participants
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-to-br from-green-50 to-emerald-50 border-green-200/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Enhanced Community Engagement
                </h3>
                <p className="text-gray-600">
                  Social interaction and support network for individuals and
                  families affected by memory loss and cognitive impairment
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Comprehensive Community Program
                </h3>
                <p className="text-gray-600">
                  Sustainable community-based program addressing memory loss and
                  cardiovascular health
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-to-br from-red-50 to-pink-50 border-red-200/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Increased Awareness
                </h3>
                <p className="text-gray-600">
                  Counterfeit medication risks and heart disease awareness among
                  the target community
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sustainable Health Network
                </h3>
                <p className="text-gray-600">
                  Community health network focusing on memory health and
                  cardiovascular wellbeing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
