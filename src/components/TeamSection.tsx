
import { Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TeamSection = () => {
  const team = [
    {
      name: "Mr. Sonam Dechen",
      role: "Managing Partner",
      phone: "+975 17111281",
      expertise: "Strategic Leadership & Business Development",
      description: "Leading Jigzen Synergy with extensive experience in business strategy and operations across Bhutan's dynamic market landscape."
    },
    {
      name: "Mr. Shashi K Agarwala", 
      role: "Managing Partner",
      phone: "+91 9810290056",
      expertise: "Investments, Finance & Corporate Strategy",
      description: "Bringing 18+ years of deep expertise in investments, finance, fund raising, and corporate strategy to drive client success."
    },
    {
      name: "Mr. Biresh Sharma",
      role: "Senior Operations Consultant", 
      expertise: "Operations Excellence & Hospitality Management",
      description: "30+ years of operations experience with Taj Hotels, specializing in operational efficiency and service excellence."
    },
    {
      name: "Mr. Ramesh Kafley",
      role: "Internal Audit Team Lead",
      expertise: "Local Laws, Accounting & Compliance",
      description: "Bhutanese national with strong background in local regulations, accounting practices, and internal audit processes."
    }
  ];

  return (
    <section id="team" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Our <span className="text-gradient">Expert Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced professionals who bring decades of expertise in investments, 
              operations, strategy, and local market knowledge to serve your business needs.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-background/50 backdrop-blur-sm border-2 hover:border-primary/20">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-lg font-semibold text-primary">
                        {member.role}
                      </p>
                      <p className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                        {member.expertise}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>

                    {/* Contact Info */}
                    {member.phone && (
                      <div className="flex items-center space-x-3 text-sm">
                        <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                        <a 
                          href={`tel:${member.phone}`}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {member.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Team Info */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Supporting Team</h3>
                <p className="text-muted-foreground">
                  Our core team is supported by a dedicated group of CA interns from India, 
                  providing additional expertise in accounting, financial analysis, and audit support 
                  to ensure comprehensive service delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
