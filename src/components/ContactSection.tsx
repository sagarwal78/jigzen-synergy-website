
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: [
        "Po Box No. 056",
        "Gaki Lam, Phuentsholing",
        "Bhutan"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Mr. Sonam Dechen: +975 17111281",
        "Mr. Shashi K Agarwala: +91 9810290056"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business? Contact us today to discuss how 
              Jigzen Synergy can help you achieve your strategic goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="bg-background/80 backdrop-blur-sm border-l-4 border-l-primary">
                      <CardHeader className="pb-4">
                        <CardTitle className="flex items-center text-lg">
                          <info.icon className="w-5 h-5 text-primary mr-3" />
                          {info.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Quick Actions</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1" asChild>
                    <a href="tel:+97517111281" className="flex items-center justify-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <a href="mailto:info@jigzensynergy.com" className="flex items-center justify-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="lg:pl-8">
              <Card className="bg-gradient-to-br from-primary/5 to-blue-600/5 border-primary/20 h-full">
                <CardContent className="p-8 h-full flex flex-col justify-center space-y-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
                    <p className="text-muted-foreground">
                      Schedule a consultation with our experts to discuss your business needs 
                      and discover how we can help you achieve your strategic objectives.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Schedule Free Consultation
                    </Button>
                    <p className="text-sm text-center text-muted-foreground">
                      No commitment required • 30-minute initial consultation
                    </p>
                  </div>

                  <div className="border-t pt-6">
                    <div className="text-center space-y-2">
                      <p className="font-semibold">Domain Information</p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Website:</strong> jigzensynergy.com<br />
                        <small>Registered via Squarespace</small>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
