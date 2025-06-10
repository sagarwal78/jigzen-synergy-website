
import { Building, Globe, Award, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to delivering exceptional results and maintaining the highest professional standards."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building long-term relationships based on trust, transparency, and mutual success."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Bringing international best practices while respecting local culture and regulations."
    },
    {
      icon: Building,
      title: "Integrity",
      description: "Upholding ethical business practices and maintaining confidentiality in all our engagements."
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">
              About <span className="text-gradient">Jigzen Synergy</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A premier management consulting firm based in Phuentsholing, Bhutan, 
              dedicated to delivering strategic excellence and operational transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Our Story</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Jigzen Synergy was founded with a vision to bridge the gap between international 
                  business excellence and local market expertise in Bhutan. Our team combines decades 
                  of experience from global markets with deep understanding of Bhutanese business culture.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We specialize in providing comprehensive management consulting services that help 
                  businesses navigate complex challenges, optimize operations, and achieve sustainable growth 
                  in today's dynamic market environment.
                </p>
              </div>

              {/* Location Info */}
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Building className="w-5 h-5 text-primary mr-2" />
                  Our Location
                </h4>
                <p className="text-muted-foreground">
                  <strong>Po Box No. 056</strong><br />
                  Gaki Lam, Phuentsholing<br />
                  Bhutan
                </p>
              </div>
            </div>

            {/* Stats/Highlights */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-background/80 rounded-lg border hover-scale">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Years Combined Experience</div>
                </div>
                <div className="text-center p-6 bg-background/80 rounded-lg border hover-scale">
                  <div className="text-3xl font-bold text-primary mb-2">360°</div>
                  <div className="text-sm text-muted-foreground">Business Solutions</div>
                </div>
                <div className="text-center p-6 bg-background/80 rounded-lg border hover-scale">
                  <div className="text-3xl font-bold text-primary mb-2">Local</div>
                  <div className="text-sm text-muted-foreground">Market Expertise</div>
                </div>
                <div className="text-center p-6 bg-background/80 rounded-lg border hover-scale">
                  <div className="text-3xl font-bold text-primary mb-2">Global</div>
                  <div className="text-sm text-muted-foreground">Best Practices</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our approach to every client engagement and business relationship.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
