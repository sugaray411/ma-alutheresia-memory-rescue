import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Heart, Target, Users, Activity, Brain, Shield } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Our Organization
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto leading-relaxed">
            Honoring memory, supporting families, and building healthier
            communities through compassionate care
          </p>
        </div>
      </section>

      {/* Memorial Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              In Loving Memory
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our organization was founded to honor the memory of two remarkable
              women whose lives inspire our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Ma Alu Elizabeth Nvenge */}
            <Card className="memorial-card hover-lift overflow-hidden">
              <div className="relative">
                <img
                  src="/images/Ma_Alu.jpg"
                  alt="Ma Alu Elizabeth Nvenge portrait"
                  className="w-full h-64 object-cover object-[center_30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Ma Alu Elizabeth Nvenge
                  </h3>
                  <p className="text-lg text-orange-600 font-semibold mb-4">
                    (1955-2022)
                  </p>
                  <Badge variant="secondary" className="mb-4">
                    Mother of 3 Children
                  </Badge>
                  <p className="text-gray-700 leading-relaxed">
                    Died of heart attack. Her legacy reminds us of the
                    importance of cardiovascular health awareness and
                    prevention, driving our commitment to heart health education
                    in our community.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Ma Theresa Nvenge */}
            <Card className="memorial-card hover-lift overflow-hidden">
              <div className="relative">
                <img
                  src="/images/Ma_Theresa.jpg"
                  alt="Ma Theresa Nvenge portrait"
                  className="w-full h-64 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Ma Theresa Nvenge
                  </h3>
                  <p className="text-lg text-orange-600 font-semibold mb-4">
                    (1934-2016)
                  </p>
                  <Badge variant="secondary" className="mb-4">
                    Mother of 12 Children
                  </Badge>
                  <p className="text-gray-700 leading-relaxed">
                    Died of complications of memory loss. Her journey inspires
                    our dedication to memory care and cognitive support,
                    ensuring families have the resources and support they need.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Vision & Mission */}
            <Card className="hover-lift bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200/50">
              <CardContent className="p-8">
                <div className="flex flex-col items-center mb-6">
                  <img
                    src="/images/dancing.png"
                    alt="Mission activity"
                    className="w-32 h-28 object-cover rounded-xl shadow-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Our Vision and Mission
                  </h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">
                      Vision:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Vision: A world where individuals and families affected by
                      memory loss and cardiovascular challenges live with
                      dignity, resilience, and hope empowered through
                      community-driven support and holistic care.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">
                      Mission:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      To improve quality of life by offering innovative,
                      non-pharmacological, and community-centered programs that
                      stimulate memory, strengthen heart health, and foster
                      social connections. We are committed to education,
                      advocacy, and holistic wellness approaches that prevent
                      decline, promote healthy lifestyles, and support families
                      on their journey.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Games and Activities */}
            <Card className="hover-lift bg-gradient-to-br from-green-50 to-emerald-50 border-green-200/50">
              <CardContent className="p-8">
                <div className="flex flex-col items-center mb-6">
                  <img
                    src="/images/draft2.png"
                    alt="Games activity"
                    className="w-32 h-28 object-cover rounded-xl shadow-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Games And Activities
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">
                          Memory Enhancement:
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Through games and activities like balloon volleyball,
                          playing cards, Ludo, Draught game, peg puzzle,
                          coloring, and others.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">
                          Physical Activity:
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Engaging in exercises like riding a fixed exercise
                          bike, walking, and dancing.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">
                          Cognitive Stimulation:
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Promoting mental wellbeing through various games and
                          activities.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">
                          Social Interaction:
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Fostering connections and community through group
                          activities.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">
                          Cardiovascular Health Education and Awareness:
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Programs for heart disease awareness and prevention.
                          Educating on healthy lifestyle choices.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">
                          Spiritual Support:
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Providing counseling, reflection, and prayer.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">
                          Counterfeit and Illicit Medication Awareness and
                          Prevention:
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Raising awareness of medication safety and partnering
                          with national and international organizations to
                          support a robust supply chain that helps to promote
                          the distribution of safe and effective medicines.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">
                          Holistic Wellness:
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Supporting overall wellbeing through a combination of
                          these programs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Approach */}
            <Card className="hover-lift bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200/50">
              <CardContent className="p-8">
                <div className="flex flex-col items-center mb-6">
                  <img
                    src="/images/ludo2.png"
                    alt="Holistic approach"
                    className="w-32 h-28 object-cover rounded-xl shadow-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Our Approach: Holistic and Non-Pharmacological
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">
                      Holistic Approach:
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We consider the physical, emotional, mental, and social
                      well-being of each individual, engaging them in Emotional
                      Support, Counseling, Physical Activities, Social
                      Engagement, and Community Building.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">
                      Non-Pharmacological Approach:
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We utilize methods that don't rely on medication to
                      prevent, treat, or manage health conditions, such as
                      cognitive behavioral therapy.
                    </p>
                  </div>

                  {/* Core Values */}
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">
                      Core Values:
                    </h4>
                    <ul className="list-disc pl-6 text-gray-700 text-sm space-y-2">
                      <li>
                        <span className="font-semibold">Compassion:</span> We
                        serve with empathy, dignity, and respect for every
                        individual and family.
                      </li>
                      <li>
                        <span className="font-semibold">Integrity:</span> We
                        uphold honesty, transparency, and accountability in all
                        our programs and partnerships.
                      </li>
                      <li>
                        <span className="font-semibold">Community:</span> We
                        believe in collective strength, building supportive
                        networks that bring people together.
                      </li>
                      <li>
                        <span className="font-semibold">Innovation:</span> We
                        promote creative, evidence-based, and
                        non-pharmacological approaches to memory and heart
                        health.
                      </li>
                      <li>
                        <span className="font-semibold">
                          Holistic Wellness:
                        </span>{" "}
                        We support mind, body, spirit, and social wellbeing as
                        interconnected parts of healthy living.
                      </li>
                      <li>
                        <span className="font-semibold">
                          Education & Advocacy:
                        </span>{" "}
                        We empower communities with knowledge to prevent
                        illness, fight stigma, and promote awareness.
                      </li>
                      <li>
                        <span className="font-semibold">Legacy & Hope:</span> We
                        honor the memory of those who inspire our mission while
                        creating a healthier future for the next generation.
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Dedicated Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate individuals committed to making a difference
              in memory care and cardiovascular health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Eric Nvenge - Founder */}
            <Card className="hover-lift bg-white border-gray-200/50">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                    <img
                      src="/images/eric.jpeg"
                      alt="Eric Nvenge - Founder"
                      className="w-full h-full rounded-full object-cover shadow-lg"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Eric Nvenge
                </h3>
                <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-600">
                  Founder
                </Badge>
                <p className="text-gray-700 text-sm leading-relaxed">
                  About Our Founder, Eric Nvenge B Pharm, is the Founder of Ma
                  AluTheresia Memory Rescue and Glitter of Hope Health Inc. With
                  a strong background in pharmacy and social services, Eric
                  leverages his expertise to drive positive change in the
                  healthcare industry. Qualifications & Experience - Degree in
                  Pharmacy and certifications in Pharmacy Compounding, Clinical
                  Research, and Social Services - Registered professional with
                  the Maryland Board of Pharmacy, Board of Nursing, and Maryland
                  Non-Profit Organization - Proven experience in pharmacy
                  management, including Staff member at CVS Pharmacy, Hollywood
                  Pharmacy, American Center for developmental disabilities
                  Maryland, US and owner of Appolonia Pharmacy in Tiko, Cameroon
                  - Former Chief Pharmacist at Cameroon Development Corporation
                  (CDC) -Impact & Mission Through Ma AluTheresia Memory Rescue
                  and Glitter of Hope Health Inc., Eric promotes holistic,
                  non-pharmacological, community-based initiatives that foster
                  social engagement and enhance overall well-being for
                  individuals and families.
                </p>
              </CardContent>
            </Card>

            {/* Michel Balla - Board Member */}
            <Card className="hover-lift bg-white border-gray-200/50">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-green-500 to-blue-500 p-1">
                    <img
                      src="/images/michel.jpeg"
                      alt="Michel Balla - Board Member"
                      className="w-full h-full rounded-full object-cover shadow-lg"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Michel Balla
                </h3>
                <Badge className="mb-4 bg-gradient-to-r from-green-500 to-blue-500">
                  Board Member
                </Badge>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A dedicated board member of Ma AluTheresia Memory Rescue and
                  Glitter of Hope Health Inc. With over 5 years of experience
                  supporting individuals with developmental disabilities, Michel
                  previously served as a Staff Coordinator at Community Support
                  Services (CSS), where he worked directly with children on the
                  autism spectrum. In this role, he coordinated individualized
                  care plans, guided staff, documented progress, and supported
                  behavioral and educational interventions to foster growth,
                  independence, and inclusion. He also holds certifications in
                  medication management, clinical research, and IT. Passionate
                  about promoting cognitive and mental health, Michel applies
                  creative strategies to help individuals with memory loss and
                  developmental challenges, reflecting his deep commitment to
                  improving lives and empowering communities.
                </p>
              </CardContent>
            </Card>

            {/* Sugar Ebere Raymond - Member */}
            <Card className="hover-lift bg-white border-gray-200/50">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                    <img
                      src="/images/mypic.jpeg"
                      alt="Sugar Ebere Raymond - Member"
                      className="w-full h-full rounded-full object-cover object-top shadow-lg"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Sugar Ebere Raymond
                </h3>
                <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500">
                  Board Member
                </Badge>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A dedicated member of the foundation, Sugar holds a Master’s
                  degree in Information Technology from the University of
                  Cincinnati. As a Software Engineer with a strong background in
                  social services, he bridges the fields of healthcare and
                  technology, bringing a unique perspective that integrates
                  technical knowledge with compassionate support for individuals
                  with memory loss, developmental disabilities, and cognitive
                  challenges. Guided by a deep passion for care, inclusion, and
                  empowerment, Sugar is committed to helping individuals
                  overcome daily challenges and improve their quality of life.
                  His multidisciplinary expertise—spanning information
                  technology, clinical research, and behavioral support—reflects
                  his dedication to advancing the foundation’s mission of
                  improving health outcomes through research, technology
                  awareness, and community engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
