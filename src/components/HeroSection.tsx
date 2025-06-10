
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const highlights = [
    "18+ Years Investment Expertise",
    "30+ Years Operations Experience", 
    "Local Bhutanese Knowledge",
    "International Standards"
  ];

  return (
    <section id="home" className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gradient">Strategic Excellence</span>
                  <br />
                  for Your Business
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Jigzen Synergy brings world-class management consulting expertise to Bhutan. 
                  With decades of combined experience in investments, operations, and corporate strategy, 
                  we help businesses achieve sustainable growth and operational excellence.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 group">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-2xl p-8 backdrop-blur-sm border">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Our Expertise</h3>
                    <p className="text-muted-foreground">
                      Transforming businesses across Bhutan
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/80 rounded-lg p-4 text-center hover-scale">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Years Combined Experience</div>
                    </div>
                    <div className="bg-background/80 rounded-lg p-4 text-center hover-scale">
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                    </div>
                    <div className="bg-background/80 rounded-lg p-4 text-center hover-scale">
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Support Available</div>
                    </div>
                    <div className="bg-background/80 rounded-lg p-4 text-center hover-scale">
                      <div className="text-2xl font-bold text-primary">360°</div>
                      <div className="text-sm text-muted-foreground">Business Solutions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
