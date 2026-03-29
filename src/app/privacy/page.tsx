import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import noiseBg from '@/public/assets/svg/noise.svg';

export const metadata: Metadata = {
  title: "Privacy Policy - Beacon Studio",
  description: "Learn how BEACON STUDIO protects your privacy and handles data across our custom web and AI solutions.",
};

export default function Privacy() {
  return (
    <>
      <div className="relative z-[2]">
        <section className="relative min-h-[50vh] flex flex-col overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://res.cloudinary.com/dkxe8h4cs/image/upload/v1774549132/file_000000009bf871fab5ef5600980f17fd_ps10bh.png" 
              alt="Hero background" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent"></div>
            
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-screen" 
              style={{ 
                backgroundImage: `url(${noiseBg.src})`,
              }}
            ></div>
          </div>

          <div className="relative z-10 flex flex-col w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            <Navbar />
          </div>
        </section>

        <main className="relative flex-grow flex flex-col items-center pt-16 pb-32 sm:py-24 px-4 sm:px-6 bg-black">
         
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] leading-[1.2] sm:leading-[1.15] text-center max-w-3xl mb-12 sm:mb-16 text-white px-2">
            Privacy Policy
          </h1>

          <div className="relative w-full max-w-[800px] mb-20 sm:mb-0 z-10 px-4 sm:px-0">
            <div className="space-y-8 text-[14px] sm:text-[16px] leading-[1.7] text-gray-300">
            
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
                <p>
                  At BEACON STUDIO, we specialize in building custom solutions for small businesses and web development agencies. Whether we are developing full end-to-end websites or deploying custom AI agents, we are committed to protecting your privacy and the data of your users. This Privacy Policy outlines how we collect, use, and safeguard information across our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h2>
                <p className="mb-3">We collect information to provide better services to our clients and their end-users. This includes:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Client Information:</strong> Contact details, project specifications, and business data necessary to build custom websites and AI solutions.</li>
                  <li><strong>End-User Data:</strong> When deploying custom AI agents or web applications on your behalf, we may process data inputted by your users (e.g., chat logs, form submissions) strictly according to your instructions.</li>
                  <li><strong>Technical Data:</strong> Usage statistics, IP addresses, and performance metrics to ensure our AI agents and web platforms operate securely and efficiently.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                <p className="mb-3">The data we collect is used exclusively to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Design, develop, and maintain end-to-end web solutions and custom AI agents.</li>
                  <li>Train and fine-tune AI models specifically for your business use-case (we do not share your proprietary data across other clients&#39; models).</li>
                  <li>Provide technical support, troubleshooting, and continuous improvement of our infrastructure.</li>
                  <li>Comply with legal obligations and enforce our terms of service.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">4. Data Security &amp; AI Processing</h2>
                <p>
                  Security is paramount when dealing with custom AI solutions. We implement enterprise-grade encryption and secure server architectures to protect your data. When our AI agents process sensitive business information or customer interactions, data is anonymized where possible and retained only as long as necessary to fulfill the service requirements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">5. Third-Party Services</h2>
                <p>
                  In the process of building comprehensive web and AI solutions, we may integrate third-party APIs (such as LLM providers, payment gateways, or analytics tools). We ensure that all third-party partners adhere to strict data protection standards. However, we encourage you to review the privacy policies of any third-party services integrated into your custom solution.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">6. Your Rights</h2>
                <p>
                  You retain full ownership of your proprietary business data. You have the right to access, correct, or request the deletion of your personal information and the data processed by your custom AI agents. To exercise these rights, please contact our support team.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">7. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or how we handle data for your custom web and AI projects, please reach out to us via our contact page or email us directly.
                </p>
              </section>

            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
