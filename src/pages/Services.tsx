import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Brain, Heart, Users, Activity, Shield, Utensils, Dumbbell, BookOpen, Music, Puzzle, Coffee, Zap, HeartHandshake } from 'lucide-react';

export function Services() {
  const memoryServices = [
    {
      icon: Brain,
      title: "Memory Enhancement",
      description: "Through games and activities like balloon volleyball, playing cards, Ludo, Draught game, peg puzzle, coloring, and others.",
      activities: ["Balloon volleyball", "Playing cards", "Ludo", "Draught game", "Peg puzzle", "Coloring activities"]
    },
    {
      icon: Activity,
      title: "Physical Activity",
      description: "Engaging in exercises like riding a fixed exercise bike, walking, and dancing.",
      activities: ["Fixed exercise bike", "Walking programs", "Dancing sessions", "Movement activities"]
    },
    {
      icon: Brain,
      title: "Cognitive Stimulation",
      description: "Promoting mental wellbeing through various games and activities.",
      activities: ["Mental games", "Puzzle solving", "Brain exercises", "Cognitive activities"]
    },
    {
      icon: Users,
      title: "Social Interaction",
      description: "Fostering connections and community through group activities.",
      activities: ["Group activities", "Community events", "Peer connections", "Social gatherings"]
    }
  ];

  const lifestyleServices = [
    {
      icon: Heart,
      title: "Cardiovascular Health Education and Awareness",
      description: "Programs for heart disease awareness and prevention. Educating on healthy lifestyle choices.",
      features: ["Heart disease awareness", "Prevention programs", "Healthy lifestyle education", "Risk factor education"]
    },
    {
      icon: HeartHandshake,
      title: "Spiritual Support",
      description: "Providing counseling, reflection, and prayer.",
      features: ["Counseling sessions", "Reflection time", "Prayer groups", "Spiritual guidance"]
    },
    {
      icon: Shield,
      title: "Counterfeit and Illicit Medication Awareness and Prevention",
      description: "Raising awareness of medication safety and partnering with national and international organizations to support a robust supply chain that helps to promote the distribution of safe and effective medicines.",
      features: ["Medication safety education", "National partnerships", "International collaborations", "Supply chain support", "Safe medicine distribution"]
    },
    {
      icon: Zap,
      title: "Holistic Wellness",
      description: "Supporting overall wellbeing through a combination of these programs.",
      features: ["Comprehensive care", "Wellness programs", "Integrated support", "Overall wellbeing"]
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: "Counterfeit Medication Awareness",
      description: "Education and partnerships to help identify and prevent counterfeit medication use.",
      details: "We provide comprehensive education about identifying counterfeit medications and partner with healthcare providers to ensure medication safety."
    },
    {
      icon: Heart,
      title: "Cardiovascular Health Education",
      description: "Awareness, prevention, and education programs focused on heart health and cardiovascular wellness.",
      details: "Our cardiovascular programs include heart health screenings, education about risk factors, and prevention strategies for heart disease."
    },
    {
      icon: Brain,
      title: "Progress Assessment and Tracking",
      description: "Comprehensive monitoring and evaluation of participant progress and program effectiveness.",
      details: "At Ma AluTheresia Memory Rescue and Glitter of Hope Health Inc., we track participant progress and outcomes through a base admission tool and follow-up questionnaires, ensuring our programs are effective and beneficial."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Programs & Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Comprehensive, holistic support for memory enhancement, lifestyle changes, and overall wellness
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-4xl mx-auto">
            <p className="text-lg text-blue-100">
              Healthy Lifestyle and Cognitive Function: A 2019 study published in the journal Neurology found that a healthy lifestyle (including physical activity, social engagement, and cognitive stimulation) is associated with better cognitive function in older adults.
            </p>
          </div>
        </div>
      </section>

      {/* Memory Enhancement Services */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Memory Enhancement Programs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cognitive stimulation, physical activity, social interaction, and spiritual support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {memoryServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover-lift bg-white border-blue-200/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Activities Include:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.activities.map((activity, actIndex) => (
                          <Badge key={actIndex} variant="secondary" className="text-xs">
                            {activity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lifestyle Changes Services */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Lifestyle Change Initiatives
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nutrition, stress management, exercise, and social support for healthier living
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lifestyleServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover-lift bg-white border-green-200/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Program Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, featIndex) => (
                          <Badge key={featIndex} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Additional Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized programs for medication safety and cardiovascular health
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover-lift bg-white border-purple-200/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="text-gray-700 text-sm leading-relaxed">{service.details}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-gray-200/50">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Disclaimer
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At Ma AluTheresia Memory Rescue and Glitter of Hope Health Inc., we offer complementary non-pharmacological and holistic approaches to support memory enhancement and overall wellbeing. Our programs are designed to empower individuals through natural methods, promoting cognitive health and cardiovascular wellness. However, our services are not a substitute for conventional medical treatment. We strongly advise consulting a licensed healthcare professional before starting any new program, especially if you have specific health concerns or questions. Our goal is to support, not replace, traditional medical care.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
