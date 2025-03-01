import React, { useEffect, useRef } from 'react';
import { 
  CheckCircle, 
  Clock, 
  Lightbulb, 
  Menu, 
  Sparkles, 
  Users, 
  X,
  BookOpen,
  Edit3,
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const waitlistContainerRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    // Create and load the script
    const script = document.createElement('script');
    script.src = 'https://grantwise.kit.com/8aa8e7f6db/index.js';
    script.async = true;
    script.setAttribute('data-uid', '8aa8e7f6db');
    
    // Append the script to the container
    if (waitlistContainerRef.current) {
      waitlistContainerRef.current.appendChild(script);
    }

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (waitlistContainerRef.current && waitlistContainerRef.current.contains(script)) {
        waitlistContainerRef.current.removeChild(script);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-skyblue/10 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img 
                  src="/logo.png" 
                  alt="GrantWise Logo" 
                  className="h-16 w-auto my-2 mr-2"
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#features" className="border-transparent text-gray-600 hover:border-navy hover:text-navy inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Features
                </a>
                <a href="#how-it-works" className="border-transparent text-gray-600 hover:border-navy hover:text-navy inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  How It Works
                </a>
                <a href="#waitlist" className="border-transparent text-gray-600 hover:border-navy hover:text-navy inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Join Waitlist
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <a href="#waitlist" className="bg-navy hover:bg-navy/90 text-white px-5 py-2 rounded-md text-sm font-medium transition-all shadow-md hover:shadow-lg">
                Get Early Access
              </a>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-navy hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-navy"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-navy hover:text-navy"
                onClick={toggleMobileMenu}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-navy hover:text-navy"
                onClick={toggleMobileMenu}
              >
                How It Works
              </a>
              <a
                href="#waitlist"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-navy hover:text-navy"
                onClick={toggleMobileMenu}
              >
                Join Waitlist
              </a>
              <div className="mt-4 pl-3 pr-4">
                <a href="#waitlist" className="w-full bg-navy hover:bg-navy/90 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md block text-center">
                  Get Early Access
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Shape your story,</span>{' '}
                  <span className="block text-navy xl:inline">secure your funding</span>
                </h1>
                <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Think of us as your writing partner, guiding you toward grant success. We break down the grant-writing process into clear steps so you can focus on what matters most—your mission.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#waitlist"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-navy hover:bg-navy/90 md:py-4 md:text-lg md:px-10 transition-all shadow-md hover:shadow-lg"
                    >
                      Join the waitlist
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#how-it-works"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-navy bg-skyblue/30 hover:bg-skyblue/40 md:py-4 md:text-lg md:px-10 transition-all"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="stock_photo.png"
            alt="Team collaborating on grant proposal"
          />
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-navy font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl">
              We're here to help you shine
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              Our AI-powered platform streamlines the entire grant writing process, helping you craft a compelling story that funders can't ignore.
            </p>
          </div>

          <div className="mt-12">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-skyblue/30 text-navy">
                  <Sparkles className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-800">AI-Powered Writing Assistance</p>
                <p className="mt-2 ml-16 text-base text-gray-600">
                  Using the latest in AI technology, we transform your organization's story into a compelling narrative that resonates with funders.
                </p>
              </div>

              <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-skyblue/30 text-navy">
                  <Edit3 className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-800">Smart Information Collection</p>
                <p className="mt-2 ml-16 text-base text-gray-600">
                  Our intuitive forms gather essential information about your organization and program to generate customized grant proposals.
                </p>
              </div>

              <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-skyblue/30 text-navy">
                  <BookOpen className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-800">Best Practice Integration</p>
                <p className="mt-2 ml-16 text-base text-gray-600">
                  Each proposal is custom generated following grant writing best practices and tailored to specific funder requirements.
                </p>
              </div>

              <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-skyblue/30 text-navy">
                  <Clock className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-800">Time-Saving Automation</p>
                <p className="mt-2 ml-16 text-base text-gray-600">
                  Generate complete grant proposals in minutes instead of days, freeing your team to focus on mission-critical work.
                </p>
              </div>

              <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-skyblue/30 text-navy">
                  <Users className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-800">Version Control</p>
                <p className="mt-2 ml-16 text-base text-gray-600">
                  Keep track of all your proposal versions with our comprehensive version history system, making it easy to compare changes and revert if needed.
                </p>
              </div>

              <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-skyblue/30 text-navy">
                  <Lightbulb className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-800">Funder-Aligned Content</p>
                <p className="mt-2 ml-16 text-base text-gray-600">
                  Our AI analyzes grant requirements to ensure your proposal perfectly aligns with what funders are looking for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="bg-lightgray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-navy font-semibold tracking-wide uppercase">How It Works</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl">
              Your path to funding, simplified
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              We break down the grant-writing process into clear steps so you can focus on what matters most—your mission.
            </p>
          </div>

          <div className="mt-12">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-white text-navy border-2 border-skyblue mx-auto shadow-md">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-800">Enter Organization Details</h3>
                <p className="mt-2 text-base text-gray-600">
                  Complete our simple form with information about your organization, mission, and impact.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-white text-navy border-2 border-skyblue mx-auto shadow-md">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-800">Describe Your Program</h3>
                <p className="mt-2 text-base text-gray-600">
                  Tell us about the specific program or project you're seeking funding for.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-white text-navy border-2 border-skyblue mx-auto shadow-md">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-800">Specify Grant Requirements</h3>
                <p className="mt-2 text-base text-gray-600">
                  Upload or enter the grant requirements and our AI will tailor the proposal to match funder priorities.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-white text-navy border-2 border-skyblue mx-auto shadow-md">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-800">Review and Submit</h3>
                <p className="mt-2 text-base text-gray-600">
                  Get a comprehensive AI-generated proposal, make final adjustments, and submit with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Section (Replacing Pricing) */}
      <div id="waitlist" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-navy font-semibold tracking-wide uppercase">Join Our Waitlist</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl">
              Be the first to experience GrantWise
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              We're currently in private beta. Sign up to get early access and special founding member benefits.
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto">
            <div className="bg-gradient-to-br from-skyblue/20 to-white rounded-lg shadow-lg overflow-hidden">
              <div ref={waitlistContainerRef}></div>
            </div>
            
            <div className="mt-10 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-navy" aria-hidden="true" />
                </div>
                <p className="ml-3 text-base text-gray-600">
                  <span className="font-medium text-gray-800">Early access</span> - Be among the first to use our platform
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-navy" aria-hidden="true" />
                </div>
                <p className="ml-3 text-base text-gray-600">
                  <span className="font-medium text-gray-800">Founding member benefits</span> - Special pricing and features
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-navy" aria-hidden="true" />
                </div>
                <p className="ml-3 text-base text-gray-600">
                  <span className="font-medium text-gray-800">Exclusive updates</span> - Stay informed about our launch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-navy to-navy/90">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to shape your story?</span>
            <span className="block text-white/80">Let's craft your success together.</span>
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-navy bg-white hover:bg-gray-50 transition-all"
              >
                Join Waitlist
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-navy bg-skyblue hover:bg-skyblue/90 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <div className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="GrantWise Logo" 
                  className="h-14 w-auto my-2 brightness-0 invert"
                />
              </div>
              <p className="text-gray-300 text-base">
                We simplify grant writing and empower you to craft compelling proposals that funders can't ignore.
              </p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2025 <a href="https://actualreality.tech" className="text-white hover:text-gray-300">Actual Reality Technologies</a> All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;