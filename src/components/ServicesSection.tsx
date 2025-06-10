
import { TrendingUp, Shield, Users, Target, BarChart3, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Investment Strategy",
      description: "Expert guidance on investment decisions, portfolio management, and capital allocation strategies backed by 18+ years of experience.",
      features: ["Portfolio Analysis", "Risk Assessment", "Capital Planning", "ROI Optimization"]
    },
    {
      icon: Briefcase,
      title: "Corporate Strategy",
      description: "Comprehensive strategic planning to drive business growth, market expansion, and competitive advantage.",
      features: ["Market Analysis", "Growth Planning", "Competitive Strategy", "Digital Transformation"]
    },
    {
      icon: BarChart3,
      title: "Operations Excellence",
      description: "Operational improvements and efficiency optimization drawing from 30+ years of hospitality and operations experience.",
      features: ["Process Optimization", "Quality Management", "Cost Reduction", "Performance Metrics"]
    },
    {
      icon: Shield,
      title: "Internal Audit",
      description: "Comprehensive internal audit services ensuring compliance with local regulations and international standards.",
      features: ["Compliance Review", "Risk Management", "Financial Auditing", "Process Validation"]
    },
    {
      icon: Users,
      title: "Fund Raising",
      description: "Strategic fundraising support to secure capital for business expansion and operational requirements.",
      features: ["Investor Relations", "Due Diligence", "Valuation Support", "Capital Structure"]
    },
    {
      icon: Target,
      title: "Business Advisory",
      description: "Holistic business advisory services combining local market knowledge with international best practices.",
      features: ["Strategic Planning", "Market Entry", "Regulatory Guidance", "Performance Improvement"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive management consulting services designed to drive sustainable growth 
              and operational excellence for businesses across Bhutan.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
