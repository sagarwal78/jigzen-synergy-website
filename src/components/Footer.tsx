
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Jigzen Synergy</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Premier management consulting firm delivering strategic excellence 
                and operational transformation for businesses across Bhutan.
              </p>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span className="text-sm">jigzensynergy.com</span>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Information</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Po Box No. 056</p>
                    <p>Gaki Lam, Phuentsholing</p>
                    <p>Bhutan</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <div>
                    <p>+975 17111281 (Sonam Dechen)</p>
                    <p>+91 9810290056 (Shashi K Agarwala)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Our Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Investment Strategy</li>
                <li>Corporate Strategy</li>
                <li>Operations Excellence</li>
                <li>Internal Audit</li>
                <li>Fund Raising</li>
                <li>Business Advisory</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-primary-foreground/80">
                © {currentYear} Jigzen Synergy. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
